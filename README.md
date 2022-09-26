# ReMoods Theme (BETA)
The ReMoods Theme project is inherited from the past Ohmine Dark Theme and drives it to an entirely new stage. ReMoods beautifies your Joplin screen and document appearance, taking care of your writing moods and eyes-health!

![Screenshot 2022-09-25 032654-tile](https://user-images.githubusercontent.com/110529913/192116296-82e79460-48b3-4d84-8575-a0daa459bd28.png)

## Why ReMoods? 

When simple and clear documentation makes it easy to understand, adding a beautiful appearance would make everyone enjoy reading more. As a theme for a documentation tool, ReMoods is designed for those who work often based on sharing screens or documents with others. As a theme for personal notetaker, ReMoods is tailored for your writing moods and eyes-health.

- Use single-color tones to boost your writing moods - You can switch to assorted colors anytime! 
- Auto hiding unnecessary UI elements from your screen and bring you to focus on writing. 
- Provide over 80% consistent syntax highlighting styles for the code block of Markdown Editor and Render Viewer. 
- Extra formatting adjustments for the Exported HTML File and PDF Document to increase the reading experience. 
- Provide certain helpful HTML custom elements to increase your notetaking experience. 
- Provide third-party plugins’ CSS styles to add extra uses in ReMoods.

# Table Of Contents
P.S. Some of the contents are incomplete at the moment.

- [REMOODS THEME GETTING START](#remoods-theme-getting-start-important) [IMPORTANT]
  - [Download Recommended Fonts](#download-recommended-fonts)
  - [Customizable Heading](#customizable-heading)
  - [Text Styles](#text-styles)
  - [Code Block Syntax Highlight](#code-block-syntax-highlight)
  - [Floating TOC](#floating-toc)
  - [Eye-Protector](#eye-protector)
- [CUSTOM ELEMENTS](#custom-elements)
  - [Art Gallery](#art-gallery)
  - [Sticky Notes](#sticky-notes)
  - [Custom Title Block](#custom-title-block)
  - [Key Point](#key-point)
  - [Key Mention](#key-mention)
- [THIRD-PARTY PLUGINS STYLING](#third-party-plugins-styling)
  - [Spoiler](#spoiler)
  - [Markdown Table Colorize](#markdown-table-colorize)
- [PRINT & EXPORT](#print--export)
  - [Export HTML File](#export-html-file)
  - [Export PDF Document](#export-pdf-document)
- [TESTED PLUGINS](#tested-plugins)
- [CONTRIBUTION](#contribution)

# REMOODS THEME GETTING START [IMPORTANT]

ReMoods has been styling lots of Joplin elements, and all of them are helpful to you. Some of the effects are highly rely on the Joplin built-in settings and third-party plugins to get work, so you may need to follow the below guides to get 100% of what ReMoods Theme brings to you!

***

**ReMoods needs to run with the Joplin built-in Dark theme. Otherwise, it might cause some of the colors abnormal:**

1. Open Joplin
2. Go to `tools` > `Options` >`Appearance` > `Theme`
3. Choose `Dark`
4. Click `Apply`

***

**ReMoods is relying on the "Rich Markdown" plugin to style the text because Joplin didn't provide enough CSS classes to specify those elements. So, it would cause some styles to be missing from ReMoods while you didn't install this plugin, or you didn't enable the settings:**

1. Open Joplin
2. Go to `tools` > `Options` > `Plugins`
3. Search the plugin by inputting the word `rich`
4. Click `Install` on the `Rich Markdown`
5. Quit & restart Joplin app
6. Go to `Tools` , `Options`, `Rich Markdown`
7. Enable the `Add additional CSS classes for enhanced customization`
8. Click `Apply`

***

**ReMoods has styled the Special Text, but some of them didn't turn on by Joplin default, so you should turn them on manually:**

1. Open Joplin
2. Go to `tools` > `Options` >`Markdown` 
3. Enable all of the below: 
	- `Enable math expressions (wysiwyg: yes)`
	- `Enable Mermaid diagrams support (wysiwyg: yes)`
	- `Enable ==mark== syntax (wysiwyg: yes)`
	- `Enable footnotes (wysiwyg: no)`
	- `Enable table of contents extension (wysiwyg: no)`
	- `Enable ~sub~ syntax (wysiwyg: yes)`
	- `Enable ^sup^ syntax (wysiwyg: yes)`
	- `Enable abbreviation syntax (wysiwyg: no)`
	- `Enable ++insert++ syntax (wysiwyg: yes)`
4. Click `Apply`

***

**The "Quick HTML Tags" plugin provides you with a quick and easy way to create HTML tags in your notes, and it's helpful to create the custom elements of ReMoods:**

1. Copy this line of text:  `kp;span;ctb;km;ag;note;tip;explain;question;comment;keyword;important;`
2. Open Joplin
3. Go to `Tools` > `Options` > `Plugins`
4. Search plugin by input the word `html`
5. Click `Install` which on the `Quick HTML Tags` plugin
6. Quit & restart Joplin app
7. Go to `Tools` > `Options` > `Quick HTML Tags`
8. Go to `HTML predefined tags` 
9. Paste the text in the input bar
10. Click `OK`

After this, you can use this plugin like below:

1. Whenever you want to use an HTML tag just press  `ctrl + h`
2. Then, press the `Down` key on your keyboard to find the right tag
3. Press the `Enter` key. It's done!

Please mention that the `<ag>` is not a complete custom element name. You should add a number on it every time, such as `<ag4>`, `<ag8>` etc... Art Gallery lets you create 2 to 12 columns for images, so each time you create an `ag` tag with the Quick HTML Tags plugin, just don't forget to give it a number.

***

**ReMoods Theme has been tested over 50 free fonts from 10px to 16px, and I was developing everything for this theme based on using the below fonts, so I recommend you use them: (They are the default fonts for ReMoods)**

- Base Font: Montserrat
- Monospace Font: Cascadia Mono Light 
- Traditional & Simplified Chinese Font: Chiron Hei Hk Text Extralight 

Here is the abridged version of the font packages I have uploaded to my Google Drive; you can download the exact files you need at the below link: 

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

***

## Download Recommended Fonts 



## Customizable Heading 

![Screenshot 2022-09-25 164824](https://user-images.githubusercontent.com/110529913/192136884-4a05f5e1-8e36-45c0-b880-fb8252b1ebce.png)

### Hints

1. For the headings you always use with a border, you can enable the heading's border through the settings page.
2. For the headings you want to add border flexibly, you can manually be adding `---` behind the heading at any time.
3. Enable the heading reference will appear in front of the headings.
4. When using emoji within the H1 heading, you should use `<span></span>` to wrap it up.

![Screenshot 2022-09-25 203245](https://user-images.githubusercontent.com/110529913/192143564-00ae82a5-55ac-4c87-abec-5baa9bbc1f0b.png)
![Screenshot 2022-09-25 203723](https://user-images.githubusercontent.com/110529913/192143773-76b71e07-7310-44b2-a34e-1022f4d02ff6.png)

[:arrow_up:Back](#table-of-contents)

## Text Styles

Some of the text color would change with the theme color.

![Screenshot 2022-09-25 025053](https://user-images.githubusercontent.com/110529913/192114108-06e98831-c1f6-4dc4-b754-3a98bb6315dc.png)

Let's compare the difference after the theme color changed:

![Screenshot 2022-09-26 002351](https://user-images.githubusercontent.com/110529913/192154325-b19c269b-2c6c-42ab-82d9-87751f96e7aa.png)

[:arrow_up:Back](#table-of-contents)

## Code Block Syntax Highlight

ReMoods Theme provides over 80% consistent syntax highlighting styles for the code block of Markdown Editor and Render Viewer.

![Screenshot 2022-09-26 000631](https://user-images.githubusercontent.com/110529913/192153453-4d51e804-769d-47f8-abac-0794ad4266a1.png)

Syntax Highlight would change with the theme color too:

![Screenshot 2022-09-26 003511](https://user-images.githubusercontent.com/110529913/192154770-10349a7e-6364-4ff4-a9f7-3caa95771865.png)

[:arrow_up:Back](#table-of-contents)

## Floating TOC 

Joplin provides us a great built-in Markdown TOC feature which let you create the TOC by typing a simple command `[[toc]]` within your notes. ReMoods has restyle it and made it floating at the bottom right of the Render Viewer.

![Screenshot 2022-09-25 032314](https://user-images.githubusercontent.com/110529913/192115112-9432ac02-94de-4894-b0a6-3fcc8333d32f.png)

### Hints

The Markdown TOC feature is disable by Joplin default. To use the Markdown TOC, you should enable the the extension manually.

To enable the TOC feature:
1. Go to `Options > Markdown`
2. Checked `Enable table of contents extension (wysiwyg:no)`

[:arrow_up:Back](#table-of-contents)

## Eye-Protector

All attached images and mermaid charts will default to 20% darker than the original, to avoid bright light flickering your eyes while reading the notes. Hovering over them will restore the original brightness slowly.

You can disable it by go to `Options > ReMoods Theme` and unchecked the `Enable Eye-Protector effect for mermaid charts` or `Enable Eye-Protector effect for images`.

![EyeProtector](https://user-images.githubusercontent.com/86870826/154980775-2df6b700-ae1a-4a4d-b0f8-a9f99a60484f.jpg)

[:arrow_up:Back](#table-of-contents)

# CUSTOM ELEMENTS

ReMoods Theme provides a lot of custom elements to help you create a better reading experience, and here are the 6 major kinds:

- Art Gallery
- Sticky Notes
- Custom Title Block
- Key Point
- Key Mention

### Hints

If Joplin is your only place to taking notes, you can just use the Custom Elements without thinking. Otherwise, you should notice the below:

1. Custom Elements are unique HTML Elements and CSS Styles for ReMoods Theme, so it might become plain text format when you transfer your notes to other software.
2. Even if other software is support customize CSS, you should still need to copy the related codes from ReMoods to your new software manually.

[:arrow_up:Back](#table-of-contents)

## Art Gallery 

Art Gallery provides 11 custom elements for you to split attached images into columns. It would be helpful if you have many images needed to attach to your note. 

Art Gallery has limited the `max-height` to 60% viewport height by default. Let's see how its work:

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
2. The art gallery tag must use *right behind the plain text* .
3. Do not including any blank line within this part of the codes, *blank line will break the format* .

[:arrow_up:Back](#table-of-contents)

## Sticky Notes 

ReMoods has 8 custom elements for creating the Sticky Notes: `note` , `tip` , `question` , `explain` , `warning` , `comment`, `keyword` , `important`. They can help you build the article structure. Normally, you would be removed them from the content when you have completed your article. 

Let’s see what are the Sticky Notes for:

![Screenshot 2022-09-25 193253](https://user-images.githubusercontent.com/110529913/192141288-388a53d8-e9d2-4177-9ef8-40ebb4149d01.png)

### Hints

1. Make sure there is a blank line *before the open tag*, otherwise it may cause the format problem.
2. Start typing your content in a *new line*.
3. Use plain text within a custom element.
4. Use `ENTER` to add a line break.
5. Do not including any blank line within the Sticky Notes, if you want to adding a *blank line* please use  `<br>`.

[:arrow_up:Back](#table-of-contents)

## Custom Title Block

Custom Title Block would be suitable for supplementing information that you think is important to readers. The usage is very similar to a blockquote but come up with a clear heading, it's making a key concept more outstanding.

Let's see what it looks like:

![Screenshot 2022-09-25 180612](https://user-images.githubusercontent.com/110529913/192138206-2c66c33d-5121-40bf-a5aa-2227d17c8260.png)

### Hints

1. The custom element name `ctb` stands for *Custom Title Block*.
2. Type your title *next to the open tag* .
3. Keep your title *within one line*.
4. Start typing your content *in the second line*.
5. Use plain text within a custom element.
6. Please mention that *within one line* means it's *according to your panel width*.

[:arrow_up:Back](#table-of-contents)

## Key Point

The custom element Key Point is super useful while you want to split out a paragraph without using the Heading or Strong Text. It also can keeps your mind clear from the sense of overly using the Strong Text or Heading. The usage is very similar to the HTML Description List element.

3 best timing to use the Key Point:

1. To keep *multiple paragraph* of contents stay within *one heading*.
2. To *explain a part of content* that with *multiple key points* and each one have *a paragraph of description*.
3. To avoiding using Strong Text to *create a paragraph*. (keep your strong text only appear within a paragraph content.)

See it below:

![Screenshot 2022-09-25 181155](https://user-images.githubusercontent.com/110529913/192138395-287ca10b-4abf-4b57-99e7-eb7f89634120.png)

### Hints

1. The custom element name `kp` stands for *Key Point*.
2. I recommend **only** use it at *the beginning of line*.
3. It **cannot** be used within *any other block elements* such as Custom Title Block, Spoiler Block, Sticky Notes, etc...

[:arrow_up:Back](#table-of-contents)

## Key Mention

The custom element Key Mention is use for 

![Screenshot 2022-09-25 185512](https://user-images.githubusercontent.com/110529913/192140048-a6384ac9-069b-4d88-924c-9eb4a64c778a.png)

### Hints

1. The custom element name `km` stands for *Key Mention*.
2. Always use `km` **right behind the target element** which you want to describe for.
3. Use with the Joplin built-in function `Insert Date Time` make you easy.
4. You can also use `km` within any Sticky Notes, and if you do that, please make sure `km` is always the **first child** inside the Sticky Notes.
5. The text strong, emphasize, insert, and strikethrough will present as red color when inside the `km`.
6. Mouse hover on it to zoom bigger.

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

[:arrow_up:Back](#table-of-contents)

## Spoiler 

This plugin allows you to create inline spoilers and spoiler blocks with title and extendable body. And the below shows what Spoiler looks like in ReMoods:

Let's take a look to the spoiler block:

![Screenshot 2022-09-25 233436](https://user-images.githubusercontent.com/110529913/192151983-f7da56cc-add8-4638-9224-60abeb4894c7.png)

### Hints

ReMoods has been created 4 more custom styles that you can use within the Spoiler block for advanced usage:

1. Spoiler Block > Span
2. Spoiler Block > List
3. Spoiler Block > List > Span
4. Spoiler Block > Custom Title Block

Quick setting up:

1. Open Joplin
2. Go to `tools` > `Options` > `Plugins`
3. Search the plugin by inputting the word `spoiler`
4. Click `Install` which is on the `Spoiler`
5. Quit & restart Joplin app

[:arrow_up:Back](#table-of-contents)

## Markdown Table Colorize

This plugin adds colors to Joplin markdown table syntax so you can quickly identify what column the content belongs to.

Sometimes, Markdown table syntax can be very messy when too much information is within the table. Thanks to the Markdown Table Colorize plugin, OhmineDT can create a better style for the markdown table now!

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

Quick setting up:

1. Open Joplin
2. Go to `tools` > `Options` > `Plugins`
3. Search the plugin by inputting the word `color`
4. Click `Install` on the `Markdown Table: Colorize`
5. Quit & restart Joplin app

[:arrow_up:Back](#table-of-contents)

# PRINT & EXPORT

[:arrow_up:Back](#table-of-contents)

## Export HTML File 

[:arrow_up:Back](#table-of-contents)

## Export PDF Document

[:arrow_up:Back](#table-of-contents)

# TESTED PLUGINS

When I'm free, I will test different plugins and see what can be improve. If you are interested to know what I did for those plugins you can check out the below:

This table will keep up to date

|Plugin|Status|Updated|Modified|Remarks|
|:-----|:----:|:-----:|:-------|:-----|
|Spoiler|Done|25AUG2022|1. Matching theme styles<br>2. Added use `<span>` within spoiler block as a title.<br>3. Added `<ctb>` style for spoiler block.<br>4. List text color changed.<br>5. Added use `<span>` within between list items for description.<br>6. Added symbol and hover effect for spoiler inline.<br>7. Adjustments for print & export PDF.|- |
|TurnToChart|Done|25AUG2022|1. Color adjustments for Render Viewer & PDF.|-|
|Inline Todo|Done|25AUG2022|1. Improved alignment for Montserrat font.<br>2. Changed assignee tag style.<br>3. Improved text clarity for tags.<br>4. Added line-through effect for checked items. (hover for hiding the line)|- |
|Markdown Table Colorize|Done|25AUG2022|1. Added column marks, max support up to 52 columns.<br>2. Added row separation.<br>3. Added hover zoom effect for column marks.|- |
|Draw.io|Tested|25AUG2022|-|-|
|||||

[:arrow_up:Back](#table-of-contents)

## CONTRIBUTION

[:arrow_up:Back](#table-of-contents)
