![ReMoods GitHub Social Preview 2](https://user-images.githubusercontent.com/110529913/195153547-0029b001-c7a2-47c6-93fa-c5cb3b6fe74e.png)

# ReMoods Theme (BETA)

ReMoods is a multi-purpose theming plugin that was inherited from the past Ohmine Dark Theme project and drives it to an entirely new stage. 

- Use single-color tones to boost your writing moods.
- Available to change the theme colors at any time.
- Auto hiding unnecessary UI elements from your screen and bring you to focus on writing. 
- Provide over 80% consistent syntax highlighting styles for the code block of Markdown Editor and Render Viewer. 
- Extra formatting adjustments for the Exported HTML File and PDF Document to increase the reading experience. 
- Provide certain helpful HTML custom elements to increase your note-taking experience. 
- Provide third-party plugins’ CSS styles to add extra uses in ReMoods.

![Screenshot 2022-09-25 032654-tile](https://user-images.githubusercontent.com/110529913/192116296-82e79460-48b3-4d84-8575-a0daa459bd28.png)

# Table Of Contents
Note: some of the contents are incomplete at the moment.

- [REMOODS THEME GETTING STARTED](#remoods-theme-getting-started)
  - [Set Joplin's Built-in Theme to Dark](#set-joplins-built-in-theme-to-dark)
  - [Update Joplin's Built-in Markdown Settings](#update-joplins-built-in-markdown-settings)
  - [Install And Configure The Required Plugin: Rich Markdown](#install-and-configure-the-required-plugin-rich-markdown)
  - [Install And Set The Helpful Plugin: Quick HTML Tags](#install-and-set-the-helpful-plugin-quick-html-tags-optional) [Optional]
  - [Download And Install Recommended Fonts](#download-and-install-recommended-fonts-optional) [Optional]
  - [Install ReMoods Theme Plugin](#install-remoods-theme-plugin)
  - [A Temporary Solution To Customize The Theme Color & Font Settings](#a-temporary-solution-to-customize-the-theme-color--font-settings) (Latest: 17.OCT.2022)
- [THE FOUR CORE VALUES OF REMOODS](#the-four-core-values-of-remoods)
  - [Eye-Health](#eye-health-)
  - [Writing & Reading Moods](#writing--reading-moods-)
  - [Writing & Reading Experience](#writing--reading-experience-)
  - [Basic Solutions](#basic-solutions-)
- [GENERAL ELEMENTS & USE TIPS](#general-elements--use-tips)
  - [Customizable Heading](#customizable-heading)
  - [Text Styles](#text-styles)
  - [Code Block Syntax Highlight](#code-block-syntax-highlight)
  - [Floating TOC](#floating-toc)
  - [Eye-Protector](#eye-protector)
- [CUSTOM ELEMENTS & USE TIPS](#custom-elements--use-tips)
  - [Art Gallery](#art-gallery)
  - [Sticky Notes](#sticky-notes)
  - [Custom Title Block](#custom-title-block)
  - [Key Point](#key-point)
  - [Key Mention](#key-mention) [NEW]
- [THIRD-PARTY PLUGINS STYLING](#third-party-plugins-styling)
  - [Spoiler](#spoiler)
  - [Markdown Table Colorize](#markdown-table-colorize)
- [PRINT & EXPORT](#print--export) (soon...)
  - [Export HTML File](#export-html-file) (soon...)
  - [Export PDF Document](#export-pdf-document) 
- [TESTED THIRD-PARTY PLUGINS](#tested-third-party-plugins) (Latest: 13.OCT.2022)
- [CONTRIBUTION](#contribution)
  - [Send Me A User Feedback](#send-me-a-user-feedback)
  - [Report An Issue](#report-an-issue)
  - [Click A Button For Me](#click-a-button-for-me)

# REMOODS THEME GETTING STARTED

ReMoods has been styling lots of Joplin elements, and all of them are helpful to you. However, some of the effects are highly reliant on the Joplin built-in settings and third-party plugins to get work, so you may need to follow the below guides to get 100% of what ReMoods Theme brings to you!

Let's go for it one by one!

## Set Joplin's Built-in Theme to Dark

**ReMoods relies on Joplin's built-in Dark Theme to function properly. Enable the Dark Theme:**

1. Open Joplin.
2. Navigate to `tools` > `Options` > `Appearance` > `Theme`.
3. Select `Dark` from the drop down.
4. Click `Apply`.

[:arrow_up:Back](#table-of-contents)

## Update Joplin's Built-in Markdown Settings

**ReMoods has styled the special text. However, some of the required settings aren't enabled by default in Joplin. Enable these settings in Joplin:**

1. Open Joplin.
2. Navigate to `tools` > `Options` > `Markdown`.
3. Enable the following options: 
	- `Enable math expressions (wysiwyg: yes)`
	- `Enable Mermaid diagrams support (wysiwyg: yes)`
	- `Enable ==mark== syntax (wysiwyg: yes)`
	- `Enable footnotes (wysiwyg: no)`
	- `Enable table of contents extension (wysiwyg: no)`
	- `Enable ~sub~ syntax (wysiwyg: yes)`
	- `Enable ^sup^ syntax (wysiwyg: yes)`
	- `Enable abbreviation syntax (wysiwyg: no)`
	- `Enable ++insert++ syntax (wysiwyg: yes)`
4. Click `Apply`.

[:arrow_up:Back](#table-of-contents)

## Install And Configure The Required Plugin: Rich Markdown

**ReMoods relies on the 'Rich Markdown' plugin to style text because Joplin doesn't natively provide all of the CSS classes required to specify those elements. Without the Rich Markdown plugin enabled, there would be styles missing from ReMoods:**

1. Open Joplin.
2. Navigate to `tools` > `Options` > `Plugins`.
3. Search the word `rich`.
4. Click `Install` Rich Markdown.
5. Quit & restart Joplin.
6. Navigate to `Tools` > `Options` > `Rich Markdown`.
7. Enable the `Add additional CSS classes for enhanced customization`.
8. Click `Apply`.

[:arrow_up:Back](#table-of-contents)

## Install And Set The Helpful Plugin: Quick HTML Tags [Optional] 

**The "Quick HTML Tags" plugin provides you with a quick and easy way to create HTML tags in your notes, and it's helpful to create the custom elements of ReMoods:**

1. Copy this line of text:  `span;kp;ctb;km;ag;note;tip;explain;question;comment;keyword;important;`
2. Open Joplin
3. Go to `Tools` > `Options` > `Plugins`
4. Search the word `html`
5. Click `Install` Quick HTML Tags
6. Quit & restart Joplin app
7. Go to `Tools` > `Options` > `Quick HTML Tags`
8. Go to `HTML predefined tags` 
9. Paste the text in the input bar
10. Click `OK`

After this, you can use this plugin like the below:

1. Whenever you want to use an HTML tag just press  `ctrl + h`
2. Then, press the `Down` key on your keyboard to find the right tag
3. Press the `Enter` key. It's done!

Please mention that the `<ag>` is not a complete custom element name. You should add a number to it manually, such as `<ag4>`, `<ag8>`, etc. Art Gallery lets you create 2 to 12 columns for wrapping the images, so each time you create an `ag` tag with this plugin, just don't forget to add a number for `ag`.

[:arrow_up:Back](#table-of-contents)

## Download And Install Recommended Fonts [OPTIONAL]

**ReMoods Theme has been tested over 50 free fonts from 10px to 16px, and I was developing everything for this theme based on using the below fonts, so I recommend you use them:**

- Base Font: Montserrat
- Monospace Font: Cascadia Mono Light 
- Traditional & Simplified Chinese Font: Chiron Hei Hk Text Extralight

Here is the abridged version of the font packages, and I have uploaded them to my Google Drive; you can download the exact files you need at the below link: 

https://drive.google.com/drive/folders/1SEBEVGpBrXFlmOtVzyqnhEVuO7Vrp61Y?usp=sharing 

Each abridged version contains: 

- Montserrat (TTF) 
- Cascadia Mono (TTF/OTF) 
- Chiron Hei HK Text (TTF/OTF) 

Alternatively, if you are interested to download the original complete packages, you can download them by visiting the official pages below: 

- Montserrat: https://fonts.google.com/specimen/Montserrat?query=montserrat 
- Cascadia Code: https://github.com/microsoft/cascadia-code/releases 
- Chiron Hei HK: https://github.com/chiron-fonts/chiron-hei-hk/releases 

[:arrow_up:Back](#table-of-contents)

## Install ReMoods Theme Plugin

Note: Don't use more than one theming plugin at the same time. The theming plugins may conflict with each other. If you want to install more than one theme at a time, only enable the theme you would like to use.

To install ReMoods:

1. Navigate to `Tools` > `Options` > `Plugins`.
2. Search the word `remoods`.
3. Click `Install` ReMoods Theme.
4. Quit and restart Joplin.

> A reminder to the old OhmineDT users:
>
> You should first remove all the old OhmineDT codes from your `userstyle.css` and `userchrome.css`, this is important. While ReMoods seems very similar to OhmineDT, they are two completely different things. The code base has changed, and they are running under different logic. So, remove all the OhmineDT codes now, forget the old theme and then give ReMoods a hug!


## A Temporary Solution To Customize The Theme Color & Font Settings


Currently, some of the core settings are not available on the ReMoods plugin settings page because I don't know how to implement them. As a temporary workaround, you can edit the theme color and font settings through your `userstyle.css` and `userchrome.css` manually:

Note: The codes provided below might have chances to change due to the plugin updates. It will be noted in the [release information](https://github.com/Sinacs/Joplin.Plugin.ReMoods.Theme/releases) if the plugin updates require you to manually update the below codes to your custom CSS.

1. Open Joplin.
2. Navigate to `Tools` > `Options` > `Appearance`.
3. Click `Show Advanced Settings`.
4. Click `Custom Stylesheet for rendered Markdown` and it will open the `userstyle.css` file.
5. Copy / paste the below codes into `userstyle.css` and save the file:
```
:root {
  /* For render viewer and rich text editor */
  --usp-remoods-hue: 213deg !important; /* The theme color hue setting, must include "deg" after the numbers which between 0 to 360. */
  --usp-base-font: "montserrat","chiron hei hk text extralight" !important;
  --usp-monospace-font: "cascadia mono light", "chiron hei hk text extralight" !important;
  --usp-base-font-size: 14px !important;
  
  /* For print & export pdf */
  --usp-print-base-font: "montserrat","chiron hei hk text extralight" !important;
  --usp-print-monospace-font: "cascadia mono light", "chiron hei hk text extralight" !important;
  --usp-print-base-font-size: 12px !important;
}
```
6. Click `Custom Stylesheet for Joplin-wide app styles` and it will open the `userchrome.css` file.
7. Copy / paste the below codes into `userchrome.css` and save the file:
```
:root {
  /* For markdown editor */
  --usp-remoods-hue: 213deg !important; /* The theme color hue setting, must include "deg" after the numbers which between 0 to 360. */
  --usp-base-font: "montserrat","chiron hei hk text extralight" !important;
  --usp-monospace-font: "cascadia mono light", "chiron hei hk text extralight" !important;
  --usp-base-font-size: 14px !important;
}

/* Avoid white background when starting Joplin */
body {
  background-color: var(--code-mirror-bg-color) !important;
}
```
8. Now you can edit the values of these two stylesheets to adjust the settings.
9. Quit and restart Joplin to apply the updates.


> TIPS FOR BEGINNERS:
>
> If you don't understand CSS, don't worry! After you finish the above steps, you would be ready to edit the values. And the word "value" is mean the text between the `:` and `;`. For example, `--usp-remoods-hue: 213deg !important;` and `--usp-base-font-size: 14px !important;`. As you will see the `213deg !important` and `14px !important`. Ya right! They are the values! Please don't edit the `!important` keyword, and only edit the value in front of it. After that, you can close those files, then, quit and restart Joplin, and you will see it works!
>
> One more reminder, it's welcome to leave me a message when you are running into any problems with this getting started guide: https://discourse.joplinapp.org/t/plugin-remoods-theme/27547

[:arrow_up:Back](#table-of-contents)

# THE FOUR CORE VALUES OF REMOODS

While ReMoods is a multi-purpose theme, the word "fashionable" is not one of the core values. But I'm happy to show you the below four core values of ReMoods:

## Eye-Health >>>
  
For the users who stare at the screen for a long time every day, screens are hurting our eyes slowly. And I think we should pay extra attention to the tools we often use and improve the eye-health experience. Here I'm the first heavy user who already tested this theme for you with my eyes before it was published.
  
ReMoods care about every tiny difference within this theme and completely fine-tune every color contrast to ensure it's comfortable for long-time reading, even switching between any theme colors. 
  
In the beta version, ReMoods is now only providing you the Dusk Mode by default, but I'm happy to tell you that there are upcoming Day Mode and Night Mode in the future. And I hope to bring you a Joplin theme that is fit for use under different lighting environments.

[:arrow_up:Back](#table-of-contents)

## Writing & Reading Moods >>>
  
For users who are used to thinking while writing, colors are good helpers for you! ReMoods uses single-tone theme colors to boost your writing moods. It would be nice to switch to assorted colors when you are getting stuck in writing. Every minor change within your environment would be a chance to generate new inspiration.

You can also switch colors based on your needs of moods [(Reference - The Power and Symbolism of Colors)](https://www.color-meanings.com), and then feel the fantastic magic effects that finally come up for you!
  
On the other hand, ReMoods auto-hides all unnecessary UI elements and increases the editor panel area as big as possible to boost your focus on writing. 

[:arrow_up:Back](#table-of-contents)

## Writing & Reading Experience >>>
  
For users who often share their screen or documentation with other readers, ReMoods shows your passion for caring about the reading experience. ReMoods cares about every content separation, making your core concepts obvious and outstanding from the regular content.

ReMoods paid most of the time on the reading and typing tests, and I care about the balanced of them. I found that most people used to move their heads forward to the screen in some situations. Such as when they discover a typing mistake, reviewing, searching, etc. 

So I've tried my most to fight for a little chance that might stop it from happening to anyone. All is to ensure we could feel comfortable with reading and writing at a stable distance between the screen and our eyes.

[:arrow_up:Back](#table-of-contents)

## Basic Solutions >>>
  
ReMoods would keep discovering the basic solutions for everyone. Sometimes, we might meet some limitations due to the original function of a plugin or Joplin itself. While ReMoods is not a functional-based plugin, I will still try to fulfill all the basic needs in the note-taking process by creating helpful custom elements or adding additional CSS styles for them.

[:arrow_up:Back](#table-of-contents)

[[toc]]
# GENERAL ELEMENTS & USE TIPS

ReMoods is expecting to try its best to create a comfortable and helpful theme for you. Maybe you wouldn't feel it at once by reading this document, but I believe that you would feel it slowly throughout the time you use it.

While I did many little pieces of stuff for this theme, I can't show you everything through this document, but I'm happy to show you some of them! Below have some screenshots and useful tips:

## Customizable Heading 

![Screenshot 2022-09-25 164824](https://user-images.githubusercontent.com/110529913/192136884-4a05f5e1-8e36-45c0-b880-fb8252b1ebce.png)

### Hints

1. You can enable the heading's border through the settings page for the headings you always use with a border.
2. You can add `---` behind the heading manually for which you want to add a border flexibly.
3. The heading's reference will appear right before each heading when you enable it.
4. If the H1 twill pattern style is enabled, it's required to use HTML `span` for the emoji to avoid the styles affecting it. (H1 only)

![Screenshot 2022-09-25 203245](https://user-images.githubusercontent.com/110529913/192143564-00ae82a5-55ac-4c87-abec-5baa9bbc1f0b.png)
![Screenshot 2022-09-25 203723](https://user-images.githubusercontent.com/110529913/192143773-76b71e07-7310-44b2-a34e-1022f4d02ff6.png)

[:arrow_up:Back](#table-of-contents)

## Text Styles

Some of the text colors would change with the theme color. Let's compare the difference after the theme color changed:

![Screenshot 2022-09-25 025053](https://user-images.githubusercontent.com/110529913/192114108-06e98831-c1f6-4dc4-b754-3a98bb6315dc.png)

![Screenshot 2022-09-26 002351](https://user-images.githubusercontent.com/110529913/192154325-b19c269b-2c6c-42ab-82d9-87751f96e7aa.png)

### Hints

1. About links, we usually use anchor text links like `[Joplin](https://www.joplin.org)` but that wouldn't be showing up the URL when print or export PDF. So, if you want to display the URL on the PDF, you should use the anchor text link with a title like `[Joplin](https://www.joplin.org "Joplin")`.
2. While I personally prefer using *Mark Text* as an alternative to underline text, some users might prefer using *Insert Text* as underline text. For that reason, *Insert Text* might have different meanings to users. So, I create a few different styles of *Insert Text* for options. If you mostly use *Insert Text and Strikethrough Text* as the meanings of add & remove, you would feel comfortable with the red & green colors style. If using *Insert Text* as underline text, it's better to use the theme color style.
3. You can use the HTML `span` tag within a list element to describe a list item, and it would present in a different color.
4. For other text settings, you can find them on the settings page.


[:arrow_up:Back](#table-of-contents)

## Code Block Syntax Highlight

ReMoods provides over 80% consistent syntax highlighting styles for the code block of Markdown Editor and Render Viewer.

![Screenshot 2022-09-26 000631](https://user-images.githubusercontent.com/110529913/192153453-4d51e804-769d-47f8-abac-0794ad4266a1.png)

Syntax Highlight would change with the theme color too:

![Screenshot 2022-09-26 003511](https://user-images.githubusercontent.com/110529913/192154770-10349a7e-6364-4ff4-a9f7-3caa95771865.png)

[:arrow_up:Back](#table-of-contents)

## Floating TOC 

Joplin provides a great built-in Markdown TOC feature which helps you create the TOC by typing a simple command `[[toc]]` within your notes. ReMoods has restyled the TOC and made it float at the bottom right of the Render Viewer. It would open up when the mouse hovers on the TOC button.

![Screenshot 2022-09-25 032314](https://user-images.githubusercontent.com/110529913/192115112-9432ac02-94de-4894-b0a6-3fcc8333d32f.png)

### Hints

The Markdown TOC feature is disabled by Joplin default. To use the Markdown TOC, you should enable the extension manually:

1. Go to `Tools` > `Options` > `Markdown`
2. Checked `Enable table of contents extension (wysiwyg:no)`
3. Click `OK`

[:arrow_up:Back](#table-of-contents)

## Eye-Protector

![IMG_20211114_145258_HDR1](https://user-images.githubusercontent.com/110529913/192705530-e3a3329c-2419-4f00-a9fa-fa246a5e6699.jpg)

All attached images and mermaid charts will default to 20% darker than the original to avoid bright light flashing your eyes while reading the notes. Hovering over them will restore the original brightness slowly.

### Hints

1. You can disable it by going to `Tools` > `Options` > `ReMoods Theme` and disabling the `Enable Eye-Protector effect for mermaid charts` or `Enable Eye-Protector effect for images`.

[:arrow_up:Back](#table-of-contents)

# CUSTOM ELEMENTS & USE TIPS

ReMoods provides a lot of custom elements to help you create a better reading experience, and here are the 6 major kinds below:

- Art Gallery - Splitting attached images into multiple columns
- Sticky Notes - To help you build the notes structure
- Custom Title Block - Emphasizing the key concepts of the content
- Key Point - Create multiple key points or key steps
- Key Mention - Adding additional short information for reference

### Hints

If Joplin is your only place to take notes, you can just use the Custom Elements without thinking. Otherwise, you should notice the belows:

1. Custom Elements are unique HTML Elements and CSS Styles for ReMoods Theme, so it might become plain text format when you transfer your notes to other software.
2. Even if other software is supported custom CSS, you should still need to copy the related codes from ReMoods to another software manually.

[:arrow_up:Back](#table-of-contents)

## Art Gallery 

Art Gallery provides 11 custom elements for you to split attached images into multiple columns. It would be helpful if you have many images attached to your note. 

Art Gallery has default limited the `max-height` to 56% viewport height. Let's see how it works:

| Custom Elements | Force Columns |
|:---------------:|:-------------:|
|       ag2       |       2       |
|       ag3       |       3       |
|       ag4       |       4       |
|       ag5       |       5       |
|       ag6       |       6       |
|       ag7       |       7       |
|       ag8       |       8       |
|       ag9       |       9       |
|       ag10      |       10      |
|       ag11      |       11      |
|       ag12      |       12      |

Below is the sample of the art gallery(ag6) with 30 images: 

![Screenshot 2022-09-25 171257](https://user-images.githubusercontent.com/110529913/192136954-9ef7c0e7-9bf7-466d-a945-dcc222df3ff1.png)

### Hints

1. The custom element name `ag` stands for *Art Gallery*.
2. The `ag` tag must use *right behind the plain text* .
3. Do not include any blank line within the body, *blank line will break the format* .

[:arrow_up:Back](#table-of-contents)

## Sticky Notes 

ReMoods has 8 custom elements for creating the Sticky Notes: `note` , `tip` , `question` , `explain` , `warning` , `comment`, `keyword` , `important`. They can help you build the article structure. Normally, you would remove them from the content once you have completed your article.

Let’s see what are the Sticky Notes for:

![Screenshot 2022-09-25 193253](https://user-images.githubusercontent.com/110529913/192141288-388a53d8-e9d2-4177-9ef8-40ebb4149d01.png)

### Hints

1. Make sure there is a blank line *before the open tag*, otherwise it may cause a format problem.
2. Start typing your content in a *new line*.
3. Use plain text within a custom element.
4. Use  `<br>` for line break.
5. Do not include any blank line within the Sticky Notes, if you want to add a *blank line* please use  `<br>`.

[:arrow_up:Back](#table-of-contents)

## Custom Title Block

Custom Title Block would be suitable for emphasizing a key concept for the heading, making it more outstanding from other content.

Let's see what it looks like:

![Screenshot 2022-09-25 180612](https://user-images.githubusercontent.com/110529913/192138206-2c66c33d-5121-40bf-a5aa-2227d17c8260.png)

### Hints

1. The custom element name `ctb` stands for *Custom Title Block*.
2. Type your title *next to the open tag* .
3. Keep your title *within one line*.
4. Start typing your content *in the second line*.
5. Use plain text within a custom element.
6. Use  `<br>` for line break.
7. Please mention that *"within one line"* means it's *according to your panel width*.

[:arrow_up:Back](#table-of-contents)

## Key Point

The custom element Key Point is super useful when you want to separate the content without using the Heading or Strong Text. It also can keep your mind clear from the sense of overly using the Strong Text or Heading.

3 best timing to use the Key Point:

1. To keep *multiple subtitles* stay within *one heading*.
2. To *explain a part of content* with *multiple key points* and each has *a paragraph of description*.
3. To avoid using Strong Text to *create a heading*. (keep your strong text only appearing within a paragraph's content.)

See it below:

![Screenshot 2022-09-25 181155](https://user-images.githubusercontent.com/110529913/192138395-287ca10b-4abf-4b57-99e7-eb7f89634120.png)

### Hints

1. The custom element name `kp` stands for *Key Point*.
2. I recommend **only** use it at **the beginning of the line**.
3. It **cannot** be used within **any other block elements** such as Custom Title Block, Spoiler Block, Sticky Notes, etc...
4. If a Key Point **only have one paragraph of content**, it's better to type your description **right next to it**.
5. If there are multiple Key Points and **each of them with one paragraph of description**, it's better to type your description **right below to it**.
6. If your Key Points is a **long title**, such as a whole sentence, a question, etc. and **with multiple paragraphs of descriptions**, it's better to **add a blank line between all of them**.

[:arrow_up:Back](#table-of-contents)

## Key Mention

The custom element Key Mention is good for adding additional short information for reference. Use it right behind a target element, and you will see it presented to the right. You can use it to markup the last update time of the table or paragraph. Or you can use it like the HTML `<cite>` tag.

![Screenshot 2022-09-25 185512](https://user-images.githubusercontent.com/110529913/192140048-a6384ac9-069b-4d88-924c-9eb4a64c778a.png)

### Hints

1. The custom element name `km` stands for *Key Mention*.
2. Always use `km` **right behind the target element** you want to describe.
3. Use the Joplin built-in function `Insert Date Time` to make it easy.
4. You can also use `km` within any Sticky Notes, and if you do that, please make sure `km` is always the **first child** inside the Sticky Notes.
5. The text strong, emphasize, insert, and strikethrough will present as red color when inside the `km`.
6. Mouse hovers on it to zoom bigger.

More use cases:

```

<km>Call Me: [+12345678910](tel:+12345678910)</km>

<km>Contact Me: [jesscia@example.com](mailto:jesscia@example.com)</km>

<km>*Girl In Ice* | Erica Ferencik</km>

<km>Toothbrush ~~USD 8.00~~ USD 3.00</km>

<km>Reference: [Joplin Home Page](https://www.joplin.org)</km>

```
[:arrow_up:Back](#table-of-contents)

# THIRD-PARTY PLUGINS STYLING

The third-party plugin styling aims to keep the plugin styles consistent with the theme, and secondly is to add extra usage for using them in ReMoods. Let's keep reading the below:

[:arrow_up:Back](#table-of-contents)

## Spoiler 

This plugin allows you to create inline spoilers and spoiler blocks with a title and extendable body. And the below shows what Spoiler looks like in ReMoods:

Let's take a look at the spoiler block:

![Screenshot 2022-09-25 233436](https://user-images.githubusercontent.com/110529913/192151983-f7da56cc-add8-4638-9224-60abeb4894c7.png)

### Hints

ReMoods has created 4 more custom styles that you can use within the Spoiler block for advanced use:

1. Spoiler Block > Span
2. Spoiler Block > List
3. Spoiler Block > List > Span
4. Spoiler Block > Custom Title Block

Quick setting up:

1. Open Joplin
2. Go to `Tools` > `Options` > `Plugins`
3. Search the word `spoiler`
4. Click `Install` Spoiler
5. Quit & restart Joplin app

[:arrow_up:Back](#table-of-contents)

## Markdown Table Colorize

This plugin adds colors to the markdown table syntax, so you can quickly identify what column the content belongs to.

Markdown table syntax can be very messy when too much information is within the table. Thanks to the Markdown Table Colorize plugin, ReMoods can now create a better style for the markdown table!

After installing the Markdown Table Colorize plugin and ReMoods, you will see the markdown table syntax looks like below:

![Screenshot 2022-09-25 234159](https://user-images.githubusercontent.com/110529913/192152301-b4e3608d-f4f7-4191-a80e-8f804b117dc9.png)

- Separating table rows into independent sections
- Use colored letters as a column mark
- Column marks support up to 52 columns
- Mouse hover on the column mark to zoom bigger

### Hints

I would like to share the steps of how I create a markdown table. And these steps are perfect for this plugin style.

First to create the table structure:

```
||||||
||||||
||||||
```

Then, add the format to it:

```
||||||
|-|-|-|-|-|
||||||
```

Last, add content to it:

```
|TH|TH|TH|TH|TH|
|-|-|-|-|-|
|TD|TD|TD|TD|TD|
```

1. You might find that the typing-cursor will position to the left of column's mark sometimes, but it's fine to start typing without problem. It would be back to the right place after you enter something.

Quick setting up:

1. Open Joplin
2. Go to `Tools` > `Options` > `Plugins`
3. Search the word `color`
4. Click `Install` Markdown Table: Colorize
5. Quit & restart Joplin app

[:arrow_up:Back](#table-of-contents)

# PRINT & EXPORT
(soon...)


[:arrow_up:Back](#table-of-contents)

## Export HTML File 
(soon...)

[:arrow_up:Back](#table-of-contents)

## Export PDF Document

- In ReMoods, Print & Export PDF has separated from the Render Viewer styles. It means you can set different fonts and font sizes for Print & Export PDF use, and it won't affect the styles within Joplin.
- You can also control which elements should show on the PDF through the settings page, such as hiding the Sticky Notes, hiding the Key Mention, hiding the notebook title, etc.


![Screenshot 2022-09-26 190704](https://user-images.githubusercontent.com/110529913/192261498-b95ee279-65f3-4dc3-9a1f-609023f62859.png)

[:arrow_up:Back](#table-of-contents)

# TESTED THIRD-PARTY PLUGINS

When I'm free, I would test different plugins and see what I can do to them. If you are interested to know what plugins I've tested, you can check out the below:

This table will keep up to date

|Plugin|Status|Updated|Modified|Remarks|
|:-----|:----:|:-----:|:-------|:-----|
|Spoiler|Done|25AUG2022|1. Matching theme styles<br>2. Added use `<span>` within spoiler block as a title.<br>3. Added `<ctb>` style for spoiler block.<br>4. List text color changed.<br>5. Added use `<span>` within between list items for description.<br>6. Added symbol and hover effect for spoiler inline.<br>7. Adjustments for print & export PDF.|- |
|TurnToChart|Done|25AUG2022|1. Color adjustments for Render Viewer & PDF.|-|
|Inline Todo|Done|25AUG2022|1. Improved alignment for Montserrat font.<br>2. Changed assignee tag style.<br>3. Improved text clarity for tags.<br>4. Added line-through effect for checked items. (hover for hiding the line)|- |
|Markdown Table Colorize|Done|25AUG2022|1. Added column marks, max support up to 52 columns.<br>2. Added row separation.<br>3. Added hover zoom effect for column marks.|- |
|Draw.io|Tested|25AUG2022|-|-|
|*** Joplin Enhancement|Planning for second test|13OCT2022|-|-|

[:arrow_up:Back](#table-of-contents)

# CONTRIBUTION
At the very first, please let me give you a BIG HUGGG! Thank you! I'm glad you scrolling down here and looking for a way to support me!

There are many ways to contributing, and I'm so excited to let you know all of them:

## Send Me A User Feedback
I'm interested to know any of your feelings through the time you use ReMoods, and it would help inspire me.

**2 ways to let me know your story:**

- Write a reply to the [ReMoods post in Joplin forum](https://discourse.joplinapp.org/t/plugin-remoods-theme/27547?u=sinacs)
- <a href="mailto:sinacs.dev@gmail.com?subject=Hey! Here Is My User Feedback For You!">Send me an email</a> to tell me all about it.

**For reference, you can tell me about...**

- What is your use case? For work? For personal?
- What are your favorite fonts for using ReMoods? / How do you feel about the recommended fonts of ReMoods?
- What makes you love to use ReMoods? / What is your favorite feature?
- Did ReMoods make any changes to you?
- Did someone know you are using ReMoods? And what they said?
- Do you have any suggestion for me or ReMoods?
- Or others...

Your feedback means everything to me! Whatever you want to tell me you hate this theme, just let me know the reason, and it would be valuable for me!

[:arrow_up:Back](#table-of-contents)

## Report An Issue

ReMoods has styled tons of elements and sometimes it's easy to miss the small visual bugs. So, [create an issue post](https://github.com/Sinacs/Joplin.Plugin.ReMoods.Theme/issues/new) to let me know if you see anything that seems like a problem to you. If it's finally not a bug, it's still a chance for me to learn from your point of view. Whatever it is, it would be always helpful!

[:arrow_up:Back](#table-of-contents)

## Click A Button For Me 
This is the easiest way to show me your passion for ReMoods, it's an encouragement for me and also your mental way to keep the theme moving forward.

- Give a star to this [ReMoods Theme Repository](https://github.com/Sinacs/Joplin.Plugin.ReMoods.Theme)
- Give a heart to the [ReMoods post in Joplin forum](https://discourse.joplinapp.org/t/plugin-remoods-theme/27547?u=sinacs)

[:arrow_up:Back](#table-of-contents)
