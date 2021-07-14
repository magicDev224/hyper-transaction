# Installation instruactions
1. Install Hyperledger fabric dependencies:
https://hyperledger-fabric.readthedocs.io/en/release-1.4/prereqs.html

2. Donwload fabric binaries and samples:
`curl -sSL http://bit.ly/2ysbOFE | bash -s 1.4.3`

3. Go to fabric samples
`cd fabric-samples`

4. Pull code from git

5. Go to the code

6. Install node-js dependencies & supply network
`./network.sh install`

# start the network

1. Generate the crypto material and start the network
`./network.sh start`
This will create the crypto material for all the orgs, start the network and register it's admins and users.

2. Run and build project
`docker-compose up -d --build`

3. stop network
`./network.sh stop`