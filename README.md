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
- Provide certain helpful HTML custom elements to improve your note-taking experience.  
- Provide third-party plugins’ CSS styles to add extra usage in ReMoods. 
# Table Of Contents

- BULLETIN
  - [To Whom Is Moving From The Old Ohmine Dark Theme](#to-whom-is-moving-from-the-old-ohmine-dark-theme)
  - [To New Users](#to-new-users)
  - [Asking For Bits Of Help](#asking-for-bits-of-help)
- REMOODS THEME GETTING STARTED GUIDE
  - [Download And Install Recommended Fonts](#download-and-install-recommended-fonts-optional)
  - [Install And Configure 3 Important Plugins](#install-and-configure-3-important-plugins)
  - [Modify The Joplin's Built-in Settings](#modify-the-joplins-built-in-settings)
  - [Set Joplin Starting Screen Background Color](#set-joplin-starting-screen-background-color)
- GENERAL ELEMENTS & USE TIPS
  - [Theme Mode](#theme-mode) [NEW]
  - [Customizable Heading](#customizable-heading)
  - [Text Styles](#text-styles)
  - [Code Block Syntax Highlight](#code-block-syntax-highlight)
  - [Floating TOC](#floating-toc)
  - [Eye-Protector](#eye-protector)
- CUSTOM ELEMENTS & USE TIPS
  - [Art Gallery](#art-gallery)
  - [Sticky Notes](#sticky-notes)
  - [Custom Title Block](#custom-title-block)
  - [Key Point](#key-point)
  - [Key Mention](#key-mention)
- THIRD-PARTY PLUGINS STYLING
  - [Spoiler](#spoiler)
  - [Markdown Table Colorize](#markdown-table-colorize)
  - [TESTED THIRD-PARTY PLUGINS](#tested-third-party-plugins) (Latest: 26.NOV.2022)
- PRINT & EXPORT
  - [Export HTML File](#export-html-file) (soon...)
  - [Export PDF Document](#export-pdf-document) 

## To Whom Is Moving From The Old Ohmine Dark Theme

I'm glad you are for me again! While the Ohmine Dark Theme was deprecated in August 2022, ReMoods is the new project that inherited from it. So, before you start using ReMoods, you should remove all the old OhmineDT codes from your `userstyle.css` and `userchrome.css` first. Forget the old one and then give ReMoods a hug!

## To New Users

- Welcome to ReMoods! ReMoods has been styling over 90% of Joplin's elements, however, some of the effects are highly reliant on the Joplin built-in settings and third-party plugins to get work, so you should follow the `REMOODS THEME GETTING STARTED GUIDE` below to get 100% of what ReMoods Theme brings to you!
- The `GENERAL ELEMENTS & USE TIPS` and `CUSTOM ELEMENTS & USE TIPS` are showing you screenshots and useful tips of ReMoods.
- Please mention that don't enable more than one theming plugin at the same time, it will cause ReMoods can't display properly.

## Asking For Bits Of Help

- Report Issues: Please let me know if anything that make you feel uncomfortable when using ReMoods.
- Collecting Feedbacks: Tell me whatever you feel through the time you using this theme.

That means a lots to me! Thank you guys!
## Download And Install Recommended Fonts

**ReMoods has tested the best fonts for you, they've great read and write experience, and I developed everything based on using these fonts, so I recommended you use them:** 
 
- **Base Font:** Mulish (For main note contents)
- **Base Font:** Chiron Hei HK ExtraLight & Chiron Hei HK Light (For Traditional & Simplified Chinese)
- **Monospace Font:** Cascadia Mono Light (For markdown syntax, code block, list token, etc.)
- **Heading Font:** Montserrat (For heading only)

> To Chinese Language Users:
> 
> "Mulish" have great visual identification experience when combine using with Chinese font, and it supplies monospace number characters, it would make your notes seem neater. Moreover, the font-weight of "Chiron Hei HK" will switching between "light" and "extralight" based on the theme mode you use, it's for improving the reading experience under different background colors. So, I hope you will like it!
 
Here is the abridged version of the font packages and holds all you need: 
 
[Download from my Google Drive](https://drive.google.com/drive/folders/1oQVRSix1hw5zgmJiphZIEAqMrEH5EuLQ?usp=sharing)
 
Alternatively, if you are interested to download the original full packages, please visit the official pages below:  
 
- Mulish: https://fonts.google.com/specimen/Mulish?query=mulish 
- Montserrat: https://fonts.google.com/specimen/Montserrat?query=montserrat 
- Cascadia Code: https://github.com/microsoft/cascadia-code/releases  
- Chiron Hei HK: https://github.com/chiron-fonts/chiron-hei-hk/releases 

[:arrow_up:Back](#table-of-contents)

## Install And Configure 3 Important Plugins

Reason to install:

- ReMoods Theme: This is a must!
- Rich Markdown: ReMoods need to run with this plugin, otherwise, it would cause styles missing from ReMoods.
- Quick HTML Tags: It provides you with a quick and easy way to create the custom elements of ReMoods. (optional)

Let's go:

1. Navigate to `Tools` > `Options` > `Plugins`.
2. Search the word `remoods`.
3. Click `Install` ReMoods Theme plugin.
4. Search the word `rich`.
5. Click `Install` Rich Markdown plugin.
6. Search the word `html`.
7. Click `Install` Quick HTML Tags plugin.
8. Quit and restart Joplin.
9. Open Joplin again.
10. Navigate to `Tools` > `Options` > `Rich Markdown`.
11. Enable the `Add additional CSS classes for enhanced customization`.
12. Click `Apply`.
13. Navigate to `Tools` > `Options` > `Quick HTML Tags`
14. Go to `HTML predefined tags` 
15. Copy this line of text:  `span;kp;ctb;km;ag;note;tip;explain;question;comment;keyword;important;`
16. Paste it to the input bar.
17. Click `Apply`.(Don't quit, keep going to next step.)

After this, you can use the Quick HTML Tags plugin like the below:

1. Whenever you want to use an HTML tag just press  `ctrl + h`.
2. Then, press the `Down` key on your keyboard to find the right tag.
3. Press the `Enter` key. It's done!

Please mention that the `<ag>` is not a complete custom element name. You should add a number to it manually, such as `<ag4>`, `<ag8>`, etc. The ReMoods' custom element "Art Gallery" lets you create 2 to 12 columns for wrapping the attached images, so each time you create an `ag` tag, just don't forget to add a number to it.

[:arrow_up:Back](#table-of-contents)
## Modify The Joplin's Built-in Settings

Reason to modify:

- Joplin built-in theme: The `Theme Mode` of ReMoods are relies on Joplin's built-in theme to function properly.
- Joplin built-in Markdown: Joplin is default to disable some of the built-in markdown features that ReMoods has styles for.

Reference for settings:

|ReMoods Theme Mode| Require to run with the Joplin Built-in... |
|-|-|
|Day Mode|Light Theme|
|Dusk Mode|Dark Theme|
|Night Mode|Dark Theme|

Let's go:

1. Open Joplin and navigate to `tools` > `Options` > `Appearance` > `Theme`.
2. Select the Joplin built-in theme based on the ReMoods Theme Mode you use.
3. Click `Apply`.
4. Navigate to `tools` > `Options` > `Markdown`.
5. Enable the following options: 
	- `Enable math expressions (wysiwyg: yes)`
	- `Enable Mermaid diagrams support (wysiwyg: yes)`
	- `Enable ==mark== syntax (wysiwyg: yes)`
	- `Enable footnotes (wysiwyg: no)`
	- `Enable table of contents extension (wysiwyg: no)`
	- `Enable ~sub~ syntax (wysiwyg: yes)`
	- `Enable ^sup^ syntax (wysiwyg: yes)`
	- `Enable abbreviation syntax (wysiwyg: no)`
	- `Enable ++insert++ syntax (wysiwyg: yes)`
6. Click `Apply`.(Don't quit, keep going to the last step.)

## Set Joplin Starting Screen Background Color

**You might hate to see the starting screen in white background color when using `Dusk Mode` and `Night Mode`, but this problem can't be solved by a plugin. So, to set the Joplin starting screen background color to stay consistent with the theme mode color, you should do it through your `userchrome.css` manually:**

1. Navigate to `Tools` > `Options` > `Appearance`.
2. Click `Show Advanced Settings`.
3. Click `Custom Stylesheet for Joplin-wide app styles` and it will open the `userchrome.css` file.
4. Copy / paste the below codes into `userchrome.css` and save the file:
```
/* Set starting screen background color */
body {
  background-color: var(--code-mirror-bg-color) !important;
}
```
5. Quit and restart Joplin to apply the updates.

[:arrow_up:Back](#table-of-contents)
# Theme Mode

**Day Mode:** Perfect for working under sunlight and white light environments. Using high contrast colors and white background.

![dayMode](https://user-images.githubusercontent.com/110529913/203996190-8fac31d5-b55f-41c8-aeb6-936010c4d86d.png)

**Dusk Mode:** Perfect for working under medium light and warm light environments, but it’s still fine for all lighting environments if you feel lazy switching to other theme modes. Using medium contrast colors and grey background.

![duskMode](https://user-images.githubusercontent.com/110529913/203996215-cde1bc84-eb08-4e35-9a34-b35807848f73.png)

**Night Mode:** Perfect for working under low light environments. Using low contrast colors and reduced bright light.

![nightMode](https://user-images.githubusercontent.com/110529913/203996199-6a29f26d-8a63-4c99-bd97-0969ebf854a7.png)

## Customizable Heading

![Screenshot 2022-09-25 164824](https://user-images.githubusercontent.com/110529913/192136884-4a05f5e1-8e36-45c0-b880-fb8252b1ebce.png)

### Tips

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

### Tips

1. About links, we usually use anchor text links like `[Joplin](https://www.joplin.org)` but that wouldn't be showing up the URL when print or export PDF. So, if you want to display the URL on the PDF, you should use the anchor text link with a title like `[Joplin](https://www.joplin.org "Joplin")`.
2. While I personally prefer using *Mark Text* as an alternative to underline text, some users might prefer using *Insert Text* as underline text. For that reason, *Insert Text* might have different meanings to users. So, I create a few different styles of *Insert Text* for options. If you mostly use *Insert Text and Strikethrough Text* as the meanings of add & remove, you would feel comfortable with the red & green colors style. If using *Insert Text* as underline text, it's better to use the theme color style.
3. 
4. You can use the HTML `span` tag below a list item and add describe to it, and the `span` text would present in a different color.
5. More other text settings you can discover on the settings page.

[:arrow_up:Back](#table-of-contents)

## Code Block Syntax Highlight

ReMoods provides over 80% consistent syntax highlighting styles for the code block of Markdown Editor and Render Viewer.

![Screenshot 2022-09-26 000631](https://user-images.githubusercontent.com/110529913/192153453-4d51e804-769d-47f8-abac-0794ad4266a1.png)

Syntax Highlight would change with the theme color too:

![Screenshot 2022-09-26 003511](https://user-images.githubusercontent.com/110529913/192154770-10349a7e-6364-4ff4-a9f7-3caa95771865.png)

[:arrow_up:Back](#table-of-contents)

## Floating TOC 

Joplin provides a great built-in Markdown TOC feature which helps you create the TOC by typing a simple command `[[toc]]` within your notes. ReMoods has restyled the TOC and made it float at the bottom right of the Render Viewer. Mouse hovers on the TOC button to open it.

![Screenshot 2022-09-25 032314](https://user-images.githubusercontent.com/110529913/192115112-9432ac02-94de-4894-b0a6-3fcc8333d32f.png)

### Tips

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

### Tips

1. You can disable it by going to `Tools` > `Options` > `ReMoods Theme` and disabling the `Enable Eye-Protector effect for mermaid charts` or `Enable Eye-Protector effect for images`.

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

### Tips

1. The custom element name `ag` stands for *Art Gallery*.
2. The `ag` tag must use *at the next line of the plain text* .
3. Do not include any blank line within the body, *blank line will break the format* .

[:arrow_up:Back](#table-of-contents)

## Sticky Notes 

ReMoods has 8 custom elements for creating the Sticky Notes: `note` , `tip` , `question` , `explain` , `warning` , `comment`, `keyword` , `important`. They can help you build the article structure. Normally, you would remove them from the content once you have completed your article.

Let’s see what are the Sticky Notes for:

![Screenshot 2022-09-25 193253](https://user-images.githubusercontent.com/110529913/192141288-388a53d8-e9d2-4177-9ef8-40ebb4149d01.png)

### Tips

1. Make sure there is a blank line *on top the open tag* from other content, otherwise it may cause a format problem.
2. Start typing your content in a *new line*.
3. Use plain text within a custom element.
4. Use  `<br>` for line break.
5. Do not include any blank line within the Sticky Notes, if you want to add a *blank line* please use  `<br><br>`.

[:arrow_up:Back](#table-of-contents)

## Custom Title Block

Custom Title Block would be suitable for emphasizing a key concept, making it more outstanding from other content.

Let's see what it looks like:

![Screenshot 2022-09-25 180612](https://user-images.githubusercontent.com/110529913/192138206-2c66c33d-5121-40bf-a5aa-2227d17c8260.png)

### Tips

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

### Tips

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

### Tips

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

## Spoiler 

This plugin allows you to create inline spoilers and spoiler blocks with a title and extendable body. And the below shows what Spoiler looks like in ReMoods:

Let's take a look at the spoiler block:

![Screenshot 2022-09-25 233436](https://user-images.githubusercontent.com/110529913/192151983-f7da56cc-add8-4638-9224-60abeb4894c7.png)

### Tips

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

### Tips

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

## TESTED THIRD-PARTY PLUGINS

I will keep discovering to support more useful plugins, create extra usage and consistent styles in ReMoods.

The below table shows you the details of what plugins I've already tested, and will keep up to date:

|Plugin|Status|Updated|Modified|Remarks|
|:-----|:----:|:-----:|:-------|:-----|
|Spoiler|Done|25AUG2022|1. Matching theme styles<br>2. Added use `<span>` within spoiler block as a title.<br>3. Added `<ctb>` style for spoiler block.<br>4. List text color changed.<br>5. Added use `<span>` within between list items for description.<br>6. Added symbol and hover effect for spoiler inline.<br>7. Adjustments for print & export PDF.|- |
|TurnToChart|Done|20OCT2022|1. Color adjustments for Render Viewer & PDF.<br>2.Removed chart background color.<br>3.|-|
|Inline Todo|Done|25AUG2022|1. Improved alignment for Montserrat font.<br>2. Changed assignee tag style.<br>3. Improved text clarity for tags.<br>4. Added line-through effect for checked items. (hover for hiding the line)|- |
|Markdown Table Colorize|Done|25AUG2022|1. Added column marks, max support up to 52 columns.<br>2. Added row separation.<br>3. Added hover zoom effect for column marks.|- |
|Draw.io|Tested|25AUG2022|-|-|
|Enhancement|Done|22OCT2022|1.Removed the left color bar of admonition.<br>2.Changed footnote marker text to monospace font.<br>3.Changed cursor type when mouse hovering link marker.<br>4.Changed link and footnote colors.<br>5.Changed admonition color. |I'm not using this plugin, so I'll only fix bugs based on user requests. |
|Note Link System|Done|20NOV2022|1.Fix the link hash keep showing on the spoiler block title and content top.| - |
|Admonition Markdown Extension|Done|30NOV2022|1.Admonition block styles.||

[:arrow_up:Back](#table-of-contents)
## Export HTML File 
(soon...)

[:arrow_up:Back](#table-of-contents)

## Export PDF Document

ReMoods has separated the font settings into 2 standalone parts `Screen` and `Print` to provide you with a more flexible experience of customization:

- Screen: It mean everything that you can see within the Joplin app, but you won't actually see the word `screen` appearing on the settings page because it has splitting to multiple small parts such as `Markdown Editor`, `Render Viewer`, etc.
- Print: It mean everything that you will see after you convert notes to PDF. Actually two methods `Print PDF` and `Export PDF`.

For each of them, the font is separated into 3 parts:

- Base Font
- Monospace Font
- Heading Font

So, the `print` is also similar:

- Print Base Font
- Print Monospace Font
- Print Heading Font

That means you can have standalone font settings based on different parts or different usage if you want to, and I hope you will find that useful for you!


For advanced, you can also control which elements should show on the PDF through the settings page, such as hiding the Sticky Notes, hiding the Key Mention, hiding the notebook title, etc.

![Screenshot 2022-09-26 190704](https://user-images.githubusercontent.com/110529913/192261498-b95ee279-65f3-4dc3-9a1f-609023f62859.png)

[:arrow_up:Back](#table-of-contents)


