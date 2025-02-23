# Magento 2 Front-end training

## PLAN

### Itroduction
### Frontend Prerequisites
### Environment
### Back office (Quick Overview)
### Custom Theme
1. **File Structure**
2. **What is luma Theme**
3. **Creating a custom Theme**
4. **The concept of Layout, Block, Template**
    - Layout
    - Block
    - Template
5. **Translation and Locales**
6. **Style**
7. **Javascript**
### Theme Hyvä
1. **What is Hyvä ?**
2. **Setup and initialization**
3. **Tailwind**
4. **Alpine JS**

### Conclusion

---

## Introduction
### What is Magento 2?
Magento 2 is an open-source eCommerce platform that provides merchants with a flexible shopping cart system, control over the look, functionality, and content of their online store, and robust marketing, SEO, and catalog management tools.

---

## Frontend Development Prerequisites
To work on Magento 2 frontend development, you need to be familiar with the following technologies:

- CSS, CSS3
- LESS
- HTML, HTML5
- XML
- JavaScript
- PHTML
- PHP (Basic)
- Responsive Web Design (RWD)

---

## Environment
Set up your development environment with the following:

- **System Requirements:** [Magento 2 System Requirements](https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/overview)
- **Create Your Magento Authentication Keys:** [Magento Marketplace](https://commercemarketplace.adobe.com/)
- **Use This Docker Image:** [Magento 2 Docker by Mark Shust](https://github.com/markshust/docker-magento)
- **Install Grunt:** [Magento 2 Grunt Installation Guide](https://developer.adobe.com/commerce/frontend-core/guide/tools/grunt/)

---

## Back Office - Quick Overview
Magento 2's back office (Admin Panel) allows store owners to manage products, orders, customers, marketing, and configurations efficiently.

---

## Custom Theme

Magento 2 allows developers to create custom themes by overriding default layouts, styles, and templates.

### File Structure

A Magento 2 theme is located in the following directory: `app/design/frontend/<Vendor>/<Theme>/`


Key directories in a Magento theme:
- `etc/` – Theme configuration files
- `web/` – Contains static assets like CSS, JS, fonts, and images
- `layout/` – XML files that define page structure
- `templates/` – PHTML files for rendering frontend elements

### What is Luma Theme?

Luma is the default theme in Magento 2, which is fully responsive and serves as the foundation for creating custom themes. It is built using modern UI/UX principles and LESS for styling.

### Creating a Custom Theme

Follow these steps to create a custom Magento 2 theme:

1. **Create the Theme Directory**
   - Go to the `app/design/frontend/` directory and create a new folder structure:
     ```
     app/design/frontend/<Vendor>/<Theme>/
     ```

2. **Define `theme.xml`**
   - Create a `theme.xml` file inside the theme directory:
     ```xml
     <theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
         <title>My Custom Theme</title>
         <parent>Magento/blank</parent>
     </theme>
     ```

3. **Register the Theme**
   - Create a `registration.php` file inside the theme folder:
     ```php
     \Magento\Framework\Component\ComponentRegistrar::register(
         \Magento\Framework\Component\ComponentRegistrar::THEME,
         'frontend/<Vendor>/<Theme>',
         __DIR__
     );
     ```

4. **Configure `composer.json`**  
   - For theme distribution, create the `composer.json`:
     ```json
     {
         "name": "vendor/theme",
         "description": "Custom Magento 2 Theme",
         "type": "magento2-theme",
         "version": "1.0.0"
     }
     ```

5. **Add Static Assets**
   - Add CSS files in `web/css/`.
   - Add JS files in `web/js/`.
   - Add images in `web/images/`.

6. **Apply the Theme**
   - Go to the Magento Admin Panel → Content → Design → Configuration.
   - Apply your custom theme to the desired store view.

### The Concept of Layout, Block, and Template

In Magento 2, the frontend is made up of three key concepts: **Layout**, **Block**, and **Template**. These work together to render content and define the structure of pages.

#### Layout

- Layout defines the page structure using XML files.
- It determines the blocks' positions and the overall structure of the page.
- Layout files can be found in the `layout/` directory of a theme and are loaded based on the current page.
- Example:
    ```xml
    <referenceBlock name="header">
        <block class="Magento\Theme\Block\Html\Header" name="custom.header"/>
    </referenceBlock>
    ```

#### Block

- A **Block** is a PHP class that retrieves dynamic data and sends it to a template for rendering.
- Blocks are defined in the layout files and link to specific templates to be rendered.
- Blocks can interact with models, helpers, or other classes to provide the necessary data.
- Example of a block class:
    ```php
    <?php
    namespace <Vendor>\<Theme>\Block;

    class CustomBlock extends \Magento\Framework\View\Element\Template
    {
        public function getSomeData()
        {
            // Logic to fetch data
            return "Some dynamic content";
        }
    }
    ```

#### Template

- **Template** files are PHTML files that receive data from blocks and display it in HTML format.
- Templates are located in the `templates/` folder of the theme and are used to generate the final output.
- Example of a simple template (`header.phtml`):
    ```php
    <div class="header-content">
        <h1><?php echo $block->getSomeData(); ?></h1>
    </div>
    ```

These concepts allow you to build dynamic and customizable layouts and content within Magento 2 themes.

### Translation and Locales

Magento 2 supports **translation** and **localization**, making it possible to adapt the theme for multiple languages and regions.

- **Translations** are managed through CSV files located in the `i18n/` directory of your theme.
- For each language, create a `.csv` file (e.g., `fr_FR.csv` for French) to translate specific strings.
  
Example: Add a French translation file (`fr_FR.csv`) in the `i18n/` directory:
```
csv
"Welcome", "Bienvenue"
```

### Style

Magento 2 uses **CSS** and **LESS** to style themes. LESS offers more dynamic styling capabilities compared to traditional CSS, such as variables, mixins, and nesting.

- **Custom styles** for your theme should be placed in the `web/css/` directory.
- LESS files are compiled into CSS, making it easier to manage complex styles.

### JavaScript

Magento 2 uses **RequireJS** for managing JavaScript modules and dependencies, as well as **Knockout.js** for dynamic and interactive UI elements like product options and the checkout process.

### Theme Hyvä

#### What is Hyvä?

**Hyvä** is a modern, fast, and lightweight front-end theme for Magento 2. It aims to simplify Magento’s front-end development process, focusing on performance and best practices. It uses **Tailwind CSS** for styling and **Alpine.js** for interactivity, ensuring a minimal and efficient setup.

#### Setup and initialization
#### Tailwind
#### Alpine JS

---

## More information

### Documentation links

- Frontend Developer Guide [https://developer.adobe.com/commerce/frontend-core/guide/](https://developer.adobe.com/commerce/frontend-core/guide/)
- Magento UI Library [https://magento2-ui-library.rafaelcg.com/](https://magento2-ui-library.rafaelcg.com/)
- Require JS [https://requirejs.org/](https://requirejs.org/)
- JQuery [https://api.jquery.com/](https://api.jquery.com/)
- Knockout JS [https://knockoutjs.com/documentation/introduction.html](https://knockoutjs.com/documentation/introduction.html)

### Magento CMD
```
bin/magento setup:di:compile
bin/magento indexer:reindex
bin/magento setup:upgrade
bin/magento setup:static-content:deploy -f
bin/magento deploy:mode:set developer
bin/magento cache:clean
bin/magento cache:flush
```

### How to clean static files
```
rm -rf pub/static/*
rm -rf var/preprocessed/*
```

### Grunt CMD
```
grunt clean
grunt exec:<theme_name>
grunt less:<theme_name>
grunt watch
```

### How to disable 2FA
```
bin/magento config:set dev/debug/template_hints_storefront 1
bin/magento config:set dev/debug/template_hints_blocks 1
?templatehints=1
```

### How to add a custom CMS block to the page
```
<block class="Magento\Cms\Block\Block" name="custom.sidebar.block">
    <arguments>
        <argument name="block_id" xsi:type="string">sidebar-block</argument>
    </arguments>
</block>
```

### How to add a custom static template to the page
```
<block class="Magento\Framework\View\Element\Template" name="custom.block" template="Magento_Theme::html/custom-block.phtml"/>
```
### How to add arguments for a specific block
```
<referenceBlock name="logo">
    <arguments>
        <argument name="logo_width" xsi:type="number">89</argument>
        <argument name="logo_height" xsi:type="number">48</argument>
    </arguments>
</referenceBlock>
```


