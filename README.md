# ReMoods Theme

![ReMoods GitHub Social Preview 2](https://user-images.githubusercontent.com/110529913/195153547-0029b001-c7a2-47c6-93fa-c5cb3b6fe74e.png)

ReMoods is a multi-purpose theming plugin inherited from the past Ohmine Dark Theme project and drives it to an entirely new stage. ReMoods beautifies your screen and documents and takes care of your writing moods and eye health. 

## Why ReMoods?

![collage 6](https://user-images.githubusercontent.com/110529913/204046340-6045e673-049c-49f2-ae6f-66146a335a8c.png)

- Provide 3 theme modes to let you work comfortably under different lighting environments. 
- Use single-color tones to boost your writing mood. 
- Available to change the theme colors at any time. 
- Auto-hiding unnecessary UI elements from your screen bring you to focus on writing.  
- Provide over 80% consistent syntax highlighting styles for the code block of Markdown Editor and Render Viewer.  
- Extra formatting adjustments for the Exported HTML File and PDF Document to increase the reading experience.  
- Provide certain helpful HTML custom elements to improve your notetaking experience.  
- Provide third-party plugins’ CSS styles to add extra usage in ReMoods. 

# Table Of Contents

- [REMOODS THEME GETTING STARTED](#remoods-theme-getting-started)
  - [Download And Install Recommended Fonts](#download-and-install-recommended-fonts-optional) [Optional]
  - [Install ReMoods Theme Plugin](#install-remoods-theme-plugin)
  - [Install And Configure The Required Plugin: Rich Markdown](#install-and-configure-the-required-plugin-rich-markdown)
  - [Install And Set The Helpful Plugin: Quick HTML Tags](#install-and-set-the-helpful-plugin-quick-html-tags-optional) [Optional]
  - [Set Joplin's Built-in Theme](#set-joplins-built-in-theme)
  - [Update Joplin's Built-in Markdown Settings](#update-joplins-built-in-markdown-settings)
  - [Understanding The ReMoods Theme Font Settings](#understanding-the-remoods-theme-font-settings)
  - [Set Joplin Starting Screen Background Color](#set-joplin-starting-screen-background-color)
- [GENERAL ELEMENTS & USE TIPS](#general-elements--use-tips)
  - [Theme Mode](#theme-mode) [NEW]
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
  - [Key Mention](#key-mention)
- [THIRD-PARTY PLUGINS STYLING](#third-party-plugins-styling)
  - [Spoiler](#spoiler)
  - [Markdown Table Colorize](#markdown-table-colorize)
- [PRINT & EXPORT](#print--export) (soon...)
  - [Export HTML File](#export-html-file) (soon...)
  - [Export PDF Document](#export-pdf-document) 
- [TESTED THIRD-PARTY PLUGINS](#tested-third-party-plugins) (Latest: 26.NOV.2022)

# REMOODS THEME GETTING STARTED

ReMoods has been styling lots of Joplin elements, and all of them are helpful to you. However, some of the effects are highly reliant on the Joplin built-in settings and third-party plugins to get work, so you may need to follow the below guides to get 100% of what ReMoods Theme brings to you!

Let's go for it one by one!

## Download And Install Recommended Fonts [OPTIONAL]

**ReMoods has tested the best fonts for you with both great performance of reading and writing, and I developed everything based on using those fonts, so I recommended you use them:** 
 
- **Base Font:** Mulish (For main note contents)
- **Monospace Font:** Cascadia Mono Light (For markdown syntax, code block, list token, etc.) 
- **Heading Font:** Montserrat (For headings only) 
- **Traditional & Simplified Chinese Font:** Chiron Hei HK ExtraLight & Chiron Hei HK Light

Note: The Chiron Hei HK font will auto-switch to ExtraLight when using Dusk Mode and Night Mode, and switch to Light when using Day Mode.
 
Here is the abridged version of the font packages you can download from my Google Drive:  
 
[https://drive.google.com/drive/folders/1SEBEVGpBrXFlmOtVzyqnhEVuO7Vrp61Y?usp=sharing  ](https://drive.google.com/drive/folders/1oQVRSix1hw5zgmJiphZIEAqMrEH5EuLQ?usp=sharing)
 
Alternatively, if you are interested to download the original complete packages, you can download them by visiting the official pages below:  
 
Mulish: https://fonts.google.com/specimen/Mulish?query=mulish 
Montserrat: https://fonts.google.com/specimen/Montserrat?query=montserrat 
Cascadia Code: https://github.com/microsoft/cascadia-code/releases  
Chiron Hei HK: https://github.com/chiron-fonts/chiron-hei-hk/releases 

[:arrow_up:Back](#table-of-contents)

## Install ReMoods Theme Plugin

Note: Don't use more than one theming plugin at the same time. The theming plugins may conflict with each other. If you want to install more than one theme at a time, only enable the theme you would like to use.

To install ReMoods:

1. Navigate to `Tools` > `Options` > `Plugins`.
2. Search the word `remoods`.
3. Click `Install` ReMoods Theme.
4. Quit and restart Joplin. (You can download all the plugins first before restart.)

> A reminder to the old OhmineDT users:
>
> You should first remove all the old OhmineDT codes from your `userstyle.css` and `userchrome.css`, this is important. While ReMoods seems very similar to OhmineDT, they are two completely different things. The code base has changed, and they are running under different logic. So, remove all the OhmineDT codes now, forget the old theme and then give ReMoods a hug!

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

## Set Joplin's Built-in Theme

**ReMoods relies on Joplin's built-in theme to function properly.**

1. Open Joplin.
2. Navigate to `tools` > `Options` > `Appearance` > `Theme`.
3. Select the theme based on the ReMoods Theme Mode you use.
4. Click `Apply`.

|Theme Mode|Joplin Built-in Theme|
|-|-|
|Day Mode|Light Theme|
|Dusk Mode|Dark Theme|
|Night Mode|Dark Theme|

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

## Understanding The ReMoods Theme Font Settings

Note: Since the v3.2.0, ReMoods put all the settings properties into the settings page, so now you can configure everything right there! Additionally, If you still having the older versions font settings template codes on your `userstyle.css` and `userchrome. css`, you should delete all of them first.

If you are new to ReMoods you might confuse about why ReMoods making the Joplin's original font settings invalid. For that reason, I would like to let you understand that.

ReMoods has separated the font settings into 2 standalone parts `Screen` and `Print & Export PDF` it was because I want to provide you with a more flexible experience of customization:

- Screen: It mean everything that you can see within the Joplin app. But you won't actually see the word `screen` appearing on the settings page because it has spliting to multiple small parts `Markdown Editor`, `Render Viewer`, etc.
- Print & Export PDF: It mean when you converting your note to PDF file.

Below is the structure overview for introducing the relationship between font and font-size in ReMoods Theme:

```
- Screen
  - Base Font
    - Base Font Size 
  - Monospace Font
    - Monospace Font Size
      - Smaller Monospace Font Size (Markdown Editor Only)
      - Smaller Code Block Font Size
      - Smaller Markdown Table Syntax Font Size (Markdown Editor Only)
  - Heading Font
    
- Print & Export PDF
  - Print Base Font
    - Print Base Font Size 
  - Print Monospace Font
    - Print Monospace Font Size
      - Print Smaller Code Block Font Size
  - Print Heading Font
  ```

That means you can have standalone font settings based on different parts or different usage, and I hope you will find that useful for you!

[:arrow_up:Back](#table-of-contents)

## Set Joplin Starting Screen Background Color

**You might hate to see the starting screen in white background color when using `Dusk Mode` and `Night Mode`, but this problem can't be solved by a plugin. So, to set the Joplin starting screen background color to stay consistent with the theme mode color, you should do it through your `userchrome.css` manually:**

1. Open Joplin.
2. Navigate to `Tools` > `Options` > `Appearance`.
3. Click `Show Advanced Settings`.
4. Click `Custom Stylesheet for Joplin-wide app styles` and it will open the `userchrome.css` file.
5. Copy / paste the below codes into `userchrome.css` and save the file:
```
/* Set starting screen background color */
body {
  background-color: var(--code-mirror-bg-color) !important;
}
```
6. Quit and restart Joplin to apply the updates.

[:arrow_up:Back](#table-of-contents)

# Theme Mode

**Day Mode:** Perfect for working under sunlight and white light environments.

![dayMode](https://user-images.githubusercontent.com/110529913/203996190-8fac31d5-b55f-41c8-aeb6-936010c4d86d.png)

**Dusk Mode:** Perfect for working under medium light and warm light environments, but it’s still fine for all lighting environments if you feel lazy switching to other theme modes.

![duskMode](https://user-images.githubusercontent.com/110529913/203996215-cde1bc84-eb08-4e35-9a34-b35807848f73.png)

**Night Mode:** Perfect for working under low light environments.

![nightMode](https://user-images.githubusercontent.com/110529913/203996199-6a29f26d-8a63-4c99-bd97-0969ebf854a7.png)

# GENERAL ELEMENTS & USE TIPS

ReMoods is expecting to try its best to create a comfortable and helpful theme for you. I believe that you would feel it slowly throughout the time you use it.

While I did many little pieces of stuff for this theme, I can't show you everything through this document, but I'm happy to show you some screenshots and useful tips to help you dive deep in it:

## Customizable Heading 

![Screenshot 2022-09-25 164824](https://user-images.githubusercontent.com/110529913/192136884-4a05f5e1-8e36-45c0-b880-fb8252b1ebce.png)

### Hints

1. You can set standalone font family for the headings by editing the `Custom Heading Font` in the settings page to improve the personality style of your notes.
1. You can enable the heading's border through the settings page for the headings you often use with a border.
2. You can add `---` or `***` at the next line to the heading manually for the heading which you didn't enable the border in settings.
3. The heading's reference will appear right before each heading when you enable it.(Render Viewer Only)
4. If the H1 twill pattern style is enabled, it's required to use HTML `span` for wrapping the emoji to avoid the styles affecting it. (H1 only)

![Screenshot 2022-09-25 203245](https://user-images.githubusercontent.com/110529913/192143564-00ae82a5-55ac-4c87-abec-5baa9bbc1f0b.png)
![Screenshot 2022-09-25 203723](https://user-images.githubusercontent.com/110529913/192143773-76b71e07-7310-44b2-a34e-1022f4d02ff6.png)

[:arrow_up:Back](#table-of-contents)

## Text Styles

Most of the text colors would change with the theme color. Let's compare the difference after the theme color changed:

![Screenshot 2022-09-25 025053](https://user-images.githubusercontent.com/110529913/192114108-06e98831-c1f6-4dc4-b754-3a98bb6315dc.png)

![Screenshot 2022-09-26 002351](https://user-images.githubusercontent.com/110529913/192154325-b19c269b-2c6c-42ab-82d9-87751f96e7aa.png)

### Hints

1. About links, we usually use anchor text links like `[Joplin](https://www.joplin.org)` but that wouldn't be showing up the URL when print or export PDF. So, if you want to display the URL on the PDF, you should use the anchor text link with a title like `[Joplin](https://www.joplin.org "Joplin")`.
2. While I personally prefer using *Mark Text* as an alternative to underline text, some users might prefer using *Insert Text* as underline text. For that reason, *Insert Text* might have different meanings to users. So, I create a few different styles of *Insert Text* for options. If you mostly use *Insert Text and Strikethrough Text* as the meanings of add & remove, you would feel comfortable with the red & green colors style. If using *Insert Text* as underline text, it's better to use the theme color style.
3. 
4. You can use the HTML `span` tag below a list item to describe a list item, and the `span` text would present in a different color.
5. For other text settings, you can find them on the settings page.


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

The Markdown TOC feature is disabled by Joplin default. To use the Markdown TOC, you should make sure you've enabled the extension:

1. Go to `Tools` > `Options` > `Markdown`
2. Checked `Enable table of contents extension (wysiwyg:no)`
3. Click `OK`

[:arrow_up:Back](#table-of-contents)

## Eye-Protector

![IMG_20211114_145258_HDR1](https://user-images.githubusercontent.com/110529913/192705530-e3a3329c-2419-4f00-a9fa-fa246a5e6699.jpg)

Eye-Protector is only available for `Dusk Mode` and `Night Mode`, it will automatically reduce the brightness for all attached images and mermaid charts within your notes to avoid bright light flashing your eyes while reading. Hovering over them will restore the original brightness slowly.

|Theme Mode|Reduce Brightness|
|-|-|
|Day Mode|Not available|
|Dusk Mode|20% Darker|
|Night Mode|25% Darker|

### Hints

1. You can disable it by going to `Tools` > `Options` > `ReMoods Theme` and disabling the `Enable Eye-Protector effect for mermaid charts` or `Enable Eye-Protector effect for images`.

[:arrow_up:Back](#table-of-contents)

# CUSTOM ELEMENTS & USE TIPS

ReMoods provides a lot of simple custom elements to help you create a better reading experience, and here are the 6 major kinds below:

- Art Gallery - Splitting attached images into multiple columns
- Sticky Notes - To help you build the notes structure
- Custom Title Block - Emphasizing the key concepts of a specific part of the content
- Key Point - Create multiple key points or key steps that related to the heading
- Key Mention - Adding additional shorten information for reference

### Hints

If Joplin is your only place to take notes, you can just use the Custom Elements without thinking. Otherwise, you should notice the belows:

1. Custom Elements are unique HTML Elements and CSS Styles for ReMoods Theme, so it would become plain text format when you transfer your notes to other software. However, it won't cause any content to be missing.
2. If other software is supported custom CSS, you should still need to copy the related codes from ReMoods to another software manually.

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
2. The `ag` tag must use *at the next line of the plain text* .
3. Do not include any blank line within the body, *blank line will break the format* .

[:arrow_up:Back](#table-of-contents)

## Sticky Notes 

ReMoods has 8 custom elements for creating the Sticky Notes: `note` , `tip` , `question` , `explain` , `warning` , `comment`, `keyword` , `important`. They can help you build the article structure. Normally, you would remove them from the content once you have completed your article.

Let’s see what are the Sticky Notes for:

![Screenshot 2022-09-25 193253](https://user-images.githubusercontent.com/110529913/192141288-388a53d8-e9d2-4177-9ef8-40ebb4149d01.png)

### Hints

1. Make sure there is a blank line *on top the open tag* from other content, otherwise it may cause a format problem.
2. Start typing your content in a *new line*.
3. Use plain text within a custom element.
4. Use  `<br>` for line break.
5. Do not include any blank line within the Sticky Notes, if you want to add a *blank line* please use  `<br><br>`.

[:arrow_up:Back](#table-of-contents)

## Custom Title Block

Custom Title Block would be suitable for emphasizing a key concept for the heading, making it more outstanding from other content.

Let's see what it looks like:

![Screenshot 2022-09-25 180612](https://user-images.githubusercontent.com/110529913/192138206-2c66c33d-5121-40bf-a5aa-2227d17c8260.png)

### Hints

1. The custom element name `ctb` stands for *Custom Title Block*.
2. Type your title *near the open tag* .
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
2. To *explain a part of content* with *multiple key points* and each has *a paragraph of description*, just like using a description list.
3. To avoid using Strong Text to *create a heading*. (keep your strong text only appearing within a paragraph.)

See the below:

![Screenshot 2022-09-25 181155](https://user-images.githubusercontent.com/110529913/192138395-287ca10b-4abf-4b57-99e7-eb7f89634120.png)

### Hints

1. The custom element name `kp` stands for *Key Point*.
2. I recommend **only** use it at **the beginning of the line**.
3. It **cannot** be used within **any other block elements** such as Custom Title Block, Spoiler Block, Sticky Notes, etc...
4. If a Key Point **only have one paragraph of content**, it's better to type your description **near it**.
5. If there are multiple Key Points and **each of them with one paragraph of description**, it's better to type your description **right below to it**.
6. If your Key Point is a **long title**, such as a whole sentence, a question, etc. and **with multiple paragraphs of descriptions**, it's better to **add a blank line between all of them**.

[:arrow_up:Back](#table-of-contents)

## Key Mention

The custom element Key Mention is good for adding additional shorten information for reference. Use it right below a target element, and you will see it aligned to the right. You can use it to markup the last update time of the table or paragraph. Or you can use it like the HTML `<cite>` tag.

![Screenshot 2022-09-25 185512](https://user-images.githubusercontent.com/110529913/192140048-a6384ac9-069b-4d88-924c-9eb4a64c778a.png)

### Hints

1. The custom element name `km` stands for *Key Mention*.
2. Always use `km` **right below the target element** that you want to describe.
3. Use the Joplin built-in function `Insert Date Time` to make it easy.
4. You can also use `km` within any Sticky Notes, and if you do that, please make sure `km` is always in the **first line** within the Sticky Notes.
5. The text strong, emphasize, insert, and strikethrough will all present as red color when using within the `km`.
6. Mouse hovers on it to zoom bigger.

More use cases:

```

<km>Call Me: [+12345678910](tel:+12345678910)</km>

<km>Contact Me: [jesscia@example.com](mailto:jesscia@example.com)</km>

<km>*Girl In Ice* | Erica Ferencik</km>

<km>Toothbrush ~~USD 8.00~~ USD 3.00</km>

<km>Reference: [Joplin Home Page](https://www.joplin.org)</km>

<comment>
<km>Jasper >> Layla | 20/11/2022 00:30</km> Jasper leave a commet to Layla within a note.
</comment>

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
2. I'm not recommended to use it with any other markdown table formatting feature.
3. Keep all table contents close to each others, the column marks will give you  better column identifying experience.

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
|TurnToChart|Done|20OCT2022|1. Color adjustments for Render Viewer & PDF.<br>2.Removed chart background color.<br>3.|-|
|Inline Todo|Done|25AUG2022|1. Improved alignment for Montserrat font.<br>2. Changed assignee tag style.<br>3. Improved text clarity for tags.<br>4. Added line-through effect for checked items. (hover for hiding the line)|- |
|Markdown Table Colorize|Done|25AUG2022|1. Added column marks, max support up to 52 columns.<br>2. Added row separation.<br>3. Added hover zoom effect for column marks.|- |
|Draw.io|Tested|25AUG2022|-|-|
|Enhancement|Done|22OCT2022|1.Removed the left color bar of admonition.<br>2.Changed footnote marker text to monospace font.<br>3.Changed cursor type when mouse hovering link marker.<br>4.Changed link and footnote colors.<br>5.Changed admonition color. |I'm not using this plugin, so I'll only fix bugs based on user requests. |
|Note Link System|Done|20NOV2022|1.Fix the link hash keep showing on the spoiler block title and content top.| - |

[:arrow_up:Back](#table-of-contents)
