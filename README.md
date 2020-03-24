# craftcms-starter-template

This is a simple CraftCMS template with a few usefull plugins already installed: 
``` 
"craftcms/redactor"
"marionnewlevant/picture"
"sebastianlenz/linkfield"    
```

All the styles is done with `tailwindcs` framework and all the configuration is already done with the help of `laravel-mix`. 
When developing your theme you can use `yarn watch` and browsersync is already configured. You only need to add one variable 
to your `.env` file. The prefix `MIX` make it available to the setup scripts.

```
MIX_DEFAULT_SITE_URL="http://url-to-my-site.test"
```

When building for production purgecss will be used. I included the common extensions to the configuration of purgecss, the
files that will be analyzed for classes to keep. You can edit the configuration as you like in the `webpack.mix.js`. 
You can find more information on the official website: https://laravel-mix.com/

# Start

```
composer install 
cp .env.example .env
php craft setup/security-key
yarn install
yarn watch
```