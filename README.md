A personal portfolio and blogging website

# Getting started

- This project uses AWS Amplify and Next.js
- Go to root of repository
- `npm --prefix ./apps/web/ install`
- `npm --prefix ./apps/web/ run dev`
- In the browser, go to `http://localhost:3000/`

# Project Management

- Todo lists - Use Kanbn Extension for Visual Studio Code

# Project Structure

```
- apps
    - .github/workflows     # Github Actions workflows
    - .kanbn                # kanbn todo lists
    - web                   # frontend, Next.js root folder
        - amplify           # AWS Amplify folder
        - src/app           # Next.js App Router
        - src/components    # React components
        - src/lib           # utils
    ...                     # other future apps like "api"
- docs
```

# Environment management

- For web app, we use nvm to manage node versions

# Maintanance

- `npm --prefix ./apps/web/ audit`

# Deployment

- Steps
  - Push changes to Github
  - Manually trigger Github Actions - Deploy Amplify web service
  - Wait for AWS Amplify to finish deployment
- We configured AWS IAM roles for Github Actions
  - [Use IAM roles to connect GitHub Actions to actions in AWS](https://aws.amazon.com/blogs/security/use-iam-roles-to-connect-github-actions-to-actions-in-aws/)
- We use Github Actions to deploy our app to AWS Amplify
- We need to configure environment secrets on the repo for Github Actions
  ```
  - AWS_REGION
  - IAM_ROLE
  - AMPLIFY_WEB_SRVC_WEBHOOK_URL
  ```
- We need to use the Github Actions Workflow: Deploy Amplify web service - `deploy-amplify-web-service.yml`
- The Github Actions Workflow will trigger the deployment in AWS Amplify via a webhook
- You can find the webhook URL in the AWS Amplify console. 
  - AWS Amplify > nynvr.io > Hosting > Build settings > Incoming webhooks > TriggerBuildWebhook
  - AWS Amplify > nynvr.io > Hosting > Environment variables - AMPLIFY_WEB_SRVC_WEBHOOK_URL
- We need to configure the environment variable on AWS Amplify for Google Analytics
  - AWS Amplify > nynvr.io > Hosting > Environment variables - GOOGLEANALYTICS_ID