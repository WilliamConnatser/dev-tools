# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

    # Name vagrant machine
    config.vm.define "citadel"

    # Specify OS
    config.vm.box = "generic/debian11"

    # Set hostname
    config.vm.hostname = "citadel-dev"

    # Bridge machine to host network with Ruby
    config.vm.network "public_network", bridge: "#$default_network_interface"
  
    # Update package lists
    config.vm.provision "shell", inline: <<-SHELL
      apt-get update
    SHELL
  
    # Install Docker and Docker-Compose
    config.vm.provision "shell", inline: <<-SHELL
      apt-get install -y curl rsync wget python3-pip libffi-dev
      curl -fsSL https://get.docker.com | sh
      pip3 install docker-compose
      sudo usermod -aG docker vagrant      
    SHELL

    # Reload after Docker & Docker-Compose installation
    config.vm.provision "reload"

    # Install Citadel
    config.vm.provision "shell", inline: <<-SHELL
      apt-get install -y git fswatch jq python3-qrcode python3-pip python3-yaml python3-jsonschema python3-dacite
      cd /vagrant/runcitadel/citadel
      sudo OVERWRITE_NETWORK=regtest ./scripts/configure
      docker-compose build --parallel
      docker-compose run dashboard -c yarn
    SHELL

    # Start Citadel on boot
    config.vm.provision "shell", run: 'always', inline: <<-SHELL
      cd /vagrant/runcitadel/citadel
      sudo chown -R 1000:1000 .
      chmod -R 700 tor/data/*
      ./scripts/start
    SHELL
  
    
  end
  