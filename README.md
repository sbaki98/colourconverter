# colourconverter
Simple colour converter app with tests.

# How to clone using git 
Be sure that git is installed in your machine and then use the following command to clone it
git clone https://github.com/sbaki98/colourconverter.git

Then
cd colourconverter

# How to install and run
First install all the dependent packages using the following command
npm install

To run the server app use the following command from a shell
npm run start

To run the tests use the following command from another shell (tests rely on server running)
npm run test

# How to make changes for a feature branch
git checkout -b feature/add-new-feature (this is feature branch name)

make the necessary changes using your IDE (I use VSCode which is free from Microsoft: https://code.visualstudio.com/) and then use the following command to commit to your feature branch

# How to commit to git from a feature branch
git add .
git commit -m 'my changes'

#How to see your changes
use gitk in the shell to see your changes

# How to push a feature branch to Github (permission is required to do this)
git push origin feature/add-new-feature

# How to create a pull request for reviewing
create a pull request using github project and collaborate changes with your team. If your team is happy,  merge it to main branch.

#Links
Code has been created using semaphore url 
https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha

Continuous Integration
https://docs.travis-ci.com/user/getting-started/
