#

## Getting Started

```
npm install
npm run dev
```

## prettier
```
npm install --save-dev prettier husky lint-staged
```
package.json
```json
{ // package.json
  "scripts": {
    "prepare": "husky install"
  }
}
```
```
npm run prepare
npx husky add .husky/pre-commit "npx lint-staged"
```
```json
{ // package.json
 "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  }
}
```