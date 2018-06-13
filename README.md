# DEPRECATION WARNING
This boilerplate is deprecated as it is now succeeded by https://github.com/onextech/reactbp.

## React GraphQL Boilerplate 

### Installation
##### Loading dev server
1. `git clone https://github.com/onextech/react-graphql-bp.git`
2. `yarn; yarn run build-theme; yarn run build; yarn start`

##### Pushing to new git repo
1. `rm -rf .git; git init`
2. `git add .; git commit -m "first commit"`
3. `git remote add origin <NEW_GIT_REPO_URL>`
4. `git push -u origin master`

### Themeing Semantic
Build our own semantic-ui css:
1. Ensure that 'semantic-ui' package is in node_modules, otherwise do `yarn add -D semantic-ui --ignore-scripts`
2. Make changes in `./semantic/src/themes/default/globals/site.variables`
2. Run `$ yarn build-theme`

##### References:
- https://react.semantic-ui.com/usage#semantic-ui-package
- http://g14n.info/2016/11/react-semantic-customized/
- https://semantic-ui.com/usage/theming.html
