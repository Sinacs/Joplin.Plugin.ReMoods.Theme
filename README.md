# ReMoods Theme

![ReMoods GitHub Social Preview 2](https://user-images.githubusercontent.com/110529913/195153547-0029b001-c7a2-47c6-93fa-c5cb3b6fe74e.png)

ReMoods beautifies your screen and documents and takes care of your writing moods and eye health.

## Why ReMoods?

![collage 6](https://user-images.githubusercontent.com/110529913/204046340-6045e673-049c-49f2-ae6f-66146a335a8c.png)

- 3 theme modes: day, dusk, night, to let you work comfortably under different lighting environments. 
- 36 single-tone colors to boost your writing mood.
- 5 major HTML custom elements to help format your notes.
- Consistent code block syntax highlights between the Markdown Editor and Render Viewer.
- Extra formatting adjustments for the Exported HTML File and PDF Document.
- Supports customizable theme settings.
- Supports standalone settings for exporting PDF.
- Supports styling for 3rd-party plugins to increase consistency in the overall appearance.

# Table Of Contents

**BULLETIN:**

> This section contains important information if there is any.

  - February update will focus on improving the Day Mode & Night Mode.
  - [Asking For Bits Of Help](#asking-for-bits-of-help)
  
**REMOODS THEME GETTING STARTED GUIDE:**

> Guiding you to get the complete experience of ReMoods Theme with the quick steps!

  - 1 -> [Download And Install Recommended Fonts](#download-and-install-recommended-fonts) (optional)
  - 2 -> [Install And Configure 3 Important Plugins](#install-and-configure-3-important-plugins)
  - 3 -> [Modify The Joplin's Built-in Settings](#modify-the-joplins-built-in-settings)
  - 4 -> [Set Joplin Starting Screen Background Color](#set-joplin-starting-screen-background-color)
  
**APPEARANCE & USE TIPS:**

> Information about the general appearance of ReMoods and provides you with some use tips!

  - [Theme Mode](#theme-mode) [NEW]
  - [Customizable Heading](#customizable-heading)
  - [Text Styles](#text-styles)
  - [Code Block Syntax Highlight](#code-block-syntax-highlight)
  - [Floating TOC](#floating-toc)
  - [Eye-Protector](#eye-protector)

**CUSTOM ELEMENTS & USE TIPS:**

> Details about the 5 major custom elements of ReMoods Theme. If you feel comfortable taking notes with HTML, these custom elements are the best helper for formatting your notes!

  - [Art Gallery](#art-gallery)
  - [Sticky Notes](#sticky-notes)
  - [Custom Title Block](#custom-title-block)
  - [Key Point](#key-point)
  - [Key Mention](#key-mention)
  <!-- - [Simplify ReMoods Custom Elements CSS Template](#simplify-remoods-custom-elements-css-template) -->
  
**THIRD-PARTY PLUGINS STYLING:**

> Details about the third-party plugins styling. While the styling is mainly to increase consistency in the overall appearance, some of them might have extra usage in ReMoods!

  - [Spoiler](#spoiler)
  - [Markdown Table Colorize](#markdown-table-colorize)
  - [Tested Third-Party Plugins](#tested-third-party-plugins) (Latest: 26.NOV.2022)
  
**PRINT & EXPORT:**

> Details about converting notes to PDF and HTML files!

  - [Export HTML File](#export-html-file) (soon...)
  - [Export PDF Document](#export-pdf-document) 


## Download And Install Recommended Fonts

👨‍🔬: **First things first, ReMoods paid lots of time to test the best fonts for you, they've great performance on both read and write, and I developed everything based on using these fonts, so I recommended you use them:** 🤩

You can download... 

1. The abridged package from my [Google Drive🎁](https://drive.google.com/drive/folders/1oQVRSix1hw5zgmJiphZIEAqMrEH5EuLQ?usp=sharing)
2. The full packages by clicking below fonts name to visit the official sources.

- Base Font: 🛻[Mulish](https://fonts.google.com/specimen/Mulish?query=mulish)
- Base Font: 🛻[Chiron Hei HK](https://github.com/chiron-fonts/chiron-hei-hk/releases) (Traditional & Simplified Chinese)
- Monospace Font: 🛻[Cascadia Mono Light](https://github.com/microsoft/cascadia-code/releases) (markdown syntax, code block, list token, etc.)
- Heading Font: 🛻[Montserrat](https://fonts.google.com/specimen/Montserrat?query=montserrat) (heading only)

> To Chinese Language Users:
> 
> 👨‍🔬: "Mulish" have a great visual identification experience when combine using with the Chinese font, and it supplies monospace number characters, it would make your notes neater. Moreover, the "Chiron Hei HK" font-weight will automatically switch between "light" and "extralight" based on the theme mode you use, it's for improving the reading experience under different theme modes.

[:arrow_up:Back](#table-of-contents)

## Install And Configure 3 Important Plugins

**Reason to install:**

|Installing|Because of...|
|:-|:-|
|ReMoods Theme|This is a must!🤔|
|Rich Markdown|This plugin supplies advanced CSS classes to help ReMoods create styling and that would cause some element styles to be missing if running without it.|
|Quick HTML Tags (optional)|It provides you with a quick and easy way to create the useful custom elements which ReMoods provides you.|

> Please mention that don't enable more than one theming plugin at the same time, it might cause ReMoods can't display properly.

**Let's go:**

1. Open Joplin.
2. Navigate to `Tools` > `Options` > `Plugins`.
3. Search the word `remoods`.
4. Click `Install` ReMoods Theme plugin.
5. Search the word `rich`.
6. Click `Install` Rich Markdown plugin.
7. Search the word `html`.
8. Click `Install` Quick HTML Tags plugin.
9. Quit and restart Joplin.
10. Go setting Rich Markdown plugin: 
	1. `Tools` > `Options` > `Rich Markdown`.
	2. Enable the `Add additional CSS classes for enhanced customization`.
11. Go setting Quick HTML Tags plugin:
	1. Navigate to `Options` > `Quick HTML Tags`
	2. Copy this line of text: `span;kp;ctb;km;ag;note;tip;explain;question;comment;keyword;important;`
	3. Paste it to the `HTML predefined tags`.
12. Click `Apply`.(Don't quit, keep going to next step.☕)

> 👨🏼‍💻:Here show you how the Quick HTML Tags plugin works but you don't have to do it for now:
> 
> 1. Whenever you want to use an HTML tag just press  `ctrl + h`.
> 2. Then, press the `Down` key on your keyboard to find the right tag.
> 3. Press the `Enter` key. It's handy right?😉

Ok, keep going next! 🏃🏼🏃🏼‍♀️🏃🏼‍♂️

[:arrow_up:Back](#table-of-contents)

## Modify The Joplin's Built-in Settings

**Reason to modify:**

|Modifying | Because of... |
|:-|:-|
|Joplin built-in theme | ReMoods can't styling the private area colors of other plugins but built-in theme can.|
|Joplin built-in Markdown | Joplin is default to disable some of the built-in markdown features that ReMoods has styles for.|

**Reference for modifying:**

|ReMoods Theme Mode| Better to run with the Joplin Built-in... |
|:-|-|
|Day Mode|Light Theme|
|Dusk Mode|Dark Theme|
|Night Mode|Dark Theme|

**Let's go:**

1. Navigate to `tools` > `Options` > `Markdown`.
2. Enable the following options: 
	- `Enable math expressions (wysiwyg: yes)`
	- `Enable Mermaid diagrams support (wysiwyg: yes)`
	- `Enable ==mark== syntax (wysiwyg: yes)`
	- `Enable footnotes (wysiwyg: no)`
	- `Enable table of contents extension (wysiwyg: no)`
	- `Enable ~sub~ syntax (wysiwyg: yes)`
	- `Enable ^sup^ syntax (wysiwyg: yes)`
	- `Enable abbreviation syntax (wysiwyg: no)`
	- `Enable ++insert++ syntax (wysiwyg: yes)`
3. Navigate to `Option` > `ReMoods Theme`
4. Go to `Theme Mode` and select the theme mode.
5. Navigate to `Options` > `Appearance`.
6. Go to `Theme` and select the Joplin built-in theme.
7. Click `Apply`.(👸🏼Well, Well, don't quit, you are almost done! The final Next!🚀🚀🚀)

[:arrow_up:Back](#table-of-contents)

## Set Joplin Starting Screen Background Color

🤔:**You might hate to see the starting screen background in white when using `Dusk Mode` and `Night Mode`, but this problem can't be solved by a plugin. To fix this, you should edit your `userchrome.css` manually:**

1. Navigate to `Options` > `Appearance`.
2. Scroll to the bottom and click `Show Advanced Settings`.
3. Click `Custom Stylesheet for Joplin-wide app styles` and it will open the `userchrome.css` file.
4. Copy / paste the below codes into `userchrome.css` and save the file:
```
/* Set starting screen background color */
body {
  background-color: var(--me-bg) !important;
}
```
5. Quit and restart Joplin to apply all the above updates!

🎉🎉🎉 WOW! Congratulations! You made it! 🚀🛸🪐🍺🍺🍺

[:arrow_up:Back](#table-of-contents)

# Theme Mode

### Day Mode 

Day Mode ☀️ is perfect for working under sunlight and white light environments:

![dayMode](https://user-images.githubusercontent.com/110529913/203996190-8fac31d5-b55f-41c8-aeb6-936010c4d86d.png)

It uses the brightest colors and white background to welcome every sunny day🌞.

![batch_dm](https://user-images.githubusercontent.com/110529913/205424011-ab3f2ccc-4f10-48e9-9f98-ec24f46c72f5.png)

### Dusk Mode

Dusk Mode 🌆 is perfect for working under medium light and warm light environments, but it’s also fine for all lighting environments if you feel lazy switching to other theme modes: 

![duskMode](https://user-images.githubusercontent.com/110529913/203996215-cde1bc84-eb08-4e35-9a34-b35807848f73.png)

It uses medium contrast colors and grey background to cope with uneven lighting environments, one difference to the other two is dusk mode has its own settings property to apply a darker background.

![batch_dkm](https://user-images.githubusercontent.com/110529913/205424027-bc19db19-eb23-4110-9f4d-e9e135b19fd1.png)


### Night Mode

Night Mode 🌙 is perfect for working under low light environments:

![nightMode](https://user-images.githubusercontent.com/110529913/203996199-6a29f26d-8a63-4c99-bd97-0969ebf854a7.png)

It uses low-contrast colors and minimizes unwanted glare within the notes and Joplin to protect the eyes of a hardworking night owl🦉.

![batch_nm](https://user-images.githubusercontent.com/110529913/205424032-22767db4-3c50-438c-9a7b-58f44f503274.png)

### 💡Tips

**Q: Why didn't other plugins' background change with Joplin's built-in theme?**

**A:** *It only works if those color values are the default settings. Set it back to the default value, and you will see it works.*

**Q: Can I only change the theme mode but not change the built-in theme?**

**A:** *Yes, you can, but you will find that other plugins' background colors might not match your ReMoods theme, and the selected text background color in Markdown Editor will become hard to read. (I can't edit that.)*

## Customizable Heading

![Screenshot 2022-09-25 164824](https://user-images.githubusercontent.com/110529913/192136884-4a05f5e1-8e36-45c0-b880-fb8252b1ebce.png)

### 💡Tips

1. You can set your favorite font for headings by editing the `Heading Font` in options to improve the personality style of your notes.
2. You can enable the heading's border, which you often use with a border, in options.
3. You can add `---` or `***` to the next line of the target heading manually for the heading, for which you didn't enable the border in options.
4. The heading's reference will appear right before each heading if you enable it.(Render Viewer Only)
5. If the H1 twill pattern style is enabled, it's required to use HTML `span` for wrapping the emoji to avoid the styles affecting it. (H1 only)

![Screenshot 2022-09-25 203245](https://user-images.githubusercontent.com/110529913/192143564-00ae82a5-55ac-4c87-abec-5baa9bbc1f0b.png)
![Screenshot 2022-09-25 203723](https://user-images.githubusercontent.com/110529913/192143773-76b71e07-7310-44b2-a34e-1022f4d02ff6.png)

[:arrow_up:Back](#table-of-contents)

## Text Styles

Most of the text colors would change with the theme color. Let's compare the difference after the theme color changed:

![Screenshot 2022-09-25 025053](https://user-images.githubusercontent.com/110529913/192114108-06e98831-c1f6-4dc4-b754-3a98bb6315dc.png)

![Screenshot 2022-09-26 002351](https://user-images.githubusercontent.com/110529913/192154325-b19c269b-2c6c-42ab-82d9-87751f96e7aa.png)

### 💡Tips

1. If you mostly use *Insert Text and Strikethrough Text* as the meanings of add & remove, you would feel comfortable with the red & green colors style.
2. If you mostly use *Insert Text* as underline text, it would be better to use the theme color style.
3. You can use the HTML `span` tag below a list item and add description to it, and the `span` text would be present in a different color.
4. More other text settings can discover in options.

[:arrow_up:Back](#table-of-contents)

## Code Block Syntax Highlight

Here show you the syntax highlighting styles:

![Screenshot 2022-09-26 000631](https://user-images.githubusercontent.com/110529913/192153453-4d51e804-769d-47f8-abac-0794ad4266a1.png)

It would change with the theme color too:

![Screenshot 2022-09-26 003511](https://user-images.githubusercontent.com/110529913/192154770-10349a7e-6364-4ff4-a9f7-3caa95771865.png)

[:arrow_up:Back](#table-of-contents)

## Floating TOC 

Joplin provides a great built-in Markdown TOC feature which helps you create the TOC by typing a simple command `[[toc]]` within your notes. ReMoods has restyled the TOC and made it float at the bottom right of the Render Viewer. 

![Screenshot 2022-09-25 032314](https://user-images.githubusercontent.com/110529913/192115112-9432ac02-94de-4894-b0a6-3fcc8333d32f.png)

### 💡Tips

1. The TOC button will only appear after you type the `[[toc]]` command within your notes.
2. Mouse hovers on the TOC button to open it.


[:arrow_up:Back](#table-of-contents)

## Eye-Protector

![IMG_20211114_145258_HDR1](https://user-images.githubusercontent.com/110529913/192705530-e3a3329c-2419-4f00-a9fa-fa246a5e6699.jpg)

Eye-Protector is only available for `Dusk Mode` and `Night Mode`, it will automatically reduce the brightness for all attached images and mermaid charts within your notes to avoid bright light flashing your eyes while reading.

|Theme Mode|Reduce Brightness|
|-|-|
|Day Mode|Not available|
|Dusk Mode|20% Darker|
|Night Mode|25% Darker|

### 💡Tips

1. Hovering over them will restore the original brightness slowly.
2. You can disable it by going to `Tools` > `Options` > `ReMoods Theme` and disabling the `Enable Eye-Protector effect for mermaid charts` and `Enable Eye-Protector effect for images`.

[:arrow_up:Back](#table-of-contents)

## Art Gallery 

Art Gallery provides 11 custom elements for you to split attached images into multiple columns. It would be helpful if you have many images attached to your note. 

Art Gallery has default limiting the `max-height` to 56% viewport height. Let's see how it works:

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

### 💡Tips

1. The custom element name `ag` stands for *Art Gallery*.
2. The `ag` tag must use *below the plain text* .
3. *Do not include any blank line within the body*, blank line will break the format .

> Note: If you've followed the getting started guide and using the Quick HTML Tags plugin to create tags for custom elements, you should remind that the `<ag>` is not a complete custom element name. You should always add a number behind it manually, such as `<ag4>`, `<ag8>`, etc.

[:arrow_up:Back](#table-of-contents)

## Sticky Notes 

ReMoods has 8 custom elements for creating the Sticky Notes: `note` , `tip` , `question` , `explain` , `warning` , `comment`, `keyword` , `important`. They can help you build the article structure.

Let’s see what are the Sticky Notes for:

![Screenshot 2022-09-25 193253](https://user-images.githubusercontent.com/110529913/192141288-388a53d8-e9d2-4177-9ef8-40ebb4149d01.png)

### 💡Tips

1. Add a blank line *at the top of the open tag*, otherwise it may cause a format problem.
2. Use  `<br>` for line break.
3. *Do not include any blank line within the Sticky Notes*, if you want to add a *blank line* please use  `<br><br>`.

[:arrow_up:Back](#table-of-contents)

## Custom Title Block

Custom Title Block would be suitable for emphasizing a key concept, making it more outstanding from other content.

Let's see what it looks like:

![Screenshot 2022-09-25 180612](https://user-images.githubusercontent.com/110529913/192138206-2c66c33d-5121-40bf-a5aa-2227d17c8260.png)

### 💡Tips

1. The custom element name `ctb` stands for *Custom Title Block*.
2. Type your title *near the open tag* .
3. Keep your title *within one line*.
4. Start typing your content *in the second line*.
5. Use  `<br>` for line break.

> Please mention that *"within one line"* means it's *according to your panel width*.

[:arrow_up:Back](#table-of-contents)

## Key Point

The custom element Key Point is super useful when you want to separate the content without using the Heading or Strong Text. It also can keep your mind clear from the sense of overly using the Strong Text or Heading.

3 best timing to use the Key Point:

1. To keep *multiple subtitles* stay within *one heading*.
2. To *explain a part of content* with *multiple key points* and each has *a paragraph of description*, just like using the HTML description list but becoming more flexible.
3. To avoid using Strong Text to *create a heading*. (keep your strong text only appearing within a paragraph.)

See the below:

![Screenshot 2022-09-25 181155](https://user-images.githubusercontent.com/110529913/192138395-287ca10b-4abf-4b57-99e7-eb7f89634120.png)

### 💡Tips

1. The custom element name `kp` stands for *Key Point*.
2. I recommend **only** use it at **the beginning of the line**.
3. If a Key Point **only have one paragraph of content**, it's better to type your description **near it**.
4. If there are multiple Key Points and **each of them with one paragraph of description**, it's better to type your description **right below to it**.
5. If your Key Point is a **long title**, such as a whole sentence, a question, etc. and **with multiple paragraphs of descriptions**, it's better to **add a blank line between all of them**.

[:arrow_up:Back](#table-of-contents)

## Key Mention

The custom element Key Mention is good for creating additional short information for reference. You can use it to markup the last update time of the table or paragraph or more other usage.

![Screenshot 2022-09-25 185512](https://user-images.githubusercontent.com/110529913/192140048-a6384ac9-069b-4d88-924c-9eb4a64c778a.png)

### 💡Tips

1. The custom element name `km` stands for *Key Mention*.
2. Always use `km` **right below the target element**.
3. Use the Joplin built-in function `Insert Date Time` to add time and date.
4. You can also use `km` within any Sticky Notes, and if you do that, please make sure `km` is always in the **first line** within the Sticky Notes.
5. The special text `strong`, `emphasize`, `insert`, and `strikethrough` will all present as red color when used within the `km`.
6. Mouse hovers on it to zoom bigger.

**More use cases for reference:**

```

<km>Call Me: [+12345678910](tel:+12345678910)</km>

<km>Contact Me: [jesscia@example.com](mailto:jesscia@example.com)</km>

<km>*Girl In Ice* | Erica Ferencik</km>

<km>Toothbrush ~~USD 8.00~~ USD 3.00</km>

<km>Reference: [Joplin Home Page](https://www.joplin.org)</km>

<comment>
<km>Jasper >> Layla | 20/11/2022 00:30</km> Jasper leave a comment to Layla within a note.
</comment>

```
[:arrow_up:Back](#table-of-contents)

## Spoiler 

This plugin allows you to create inline spoilers and spoiler blocks with a title and extendable body. And the below shows what Spoiler looks like in ReMoods:

Let's take a look at the spoiler block:

![Screenshot 2022-09-25 233436](https://user-images.githubusercontent.com/110529913/192151983-f7da56cc-add8-4638-9224-60abeb4894c7.png)

### 💡Tips

ReMoods has created 4 more custom styles that you can use within the Spoiler block for advanced use:

1. Spoiler Block > Span
2. Spoiler Block > List
3. Spoiler Block > List > Span
4. Spoiler Block > Custom Title Block


[:arrow_up:Back](#table-of-contents)

## Markdown Table Colorize

This plugin adds colors to the markdown table syntax, so you can quickly identify what column the content belongs to.

While an informative markdown table can be hard to read, using markdown table formatter is also not a good idea to contain that much information. Thanks to the Markdown Table Colorize plugin, ReMoods can now bring you a better style for your markdown table!

After installing the Markdown Table Colorize plugin and ReMoods, you will see the markdown table syntax looks like below:

![Screenshot 2022-09-25 234159](https://user-images.githubusercontent.com/110529913/192152301-b4e3608d-f4f7-4191-a80e-8f804b117dc9.png)

- Separating table rows into independent sections
- Use colored letters as a column mark
- Column marks support up to 52 columns
- Mouse hover on the column mark to zoom bigger

### 💡Tips

I would like to share the steps of how I create a markdown table. And these steps are perfect for this plugin style.

1. Create three lines table structure:

```
||||||
||||||
||||||
```

2. Add the format to it:

```
||||||
|-|-|-|-|-|
||||||
```

3. Add content to it:

```
|TH|TH|TH|TH|TH|
|-|-|-|-|-|
|TD|TD|TD|TD|TD|
```

4. Add new data:

```
|TH|TH|TH|TH|TH|
|-|-|-|-|-|
|TD|TD|TD|TD|TD|
||||||
```
5. Add content again:

```
|TH|TH|TH|TH|TH|
|-|-|-|-|-|
|TD|TD|TD|TD|TD|
|TD|TD|TD|TD|TD|
```

1. You might find that the typing-cursor will position to the left of the column's mark sometimes, but it's fine to start typing without a problem.
2. I'm not recommended to use any other markdown table formatting feature with this style.
3. Keep all table contents close to each other, the column marks will provide you with a better column identifying experience.

[:arrow_up:Back](#table-of-contents)

## TESTED THIRD-PARTY PLUGINS

The below table shows you the details of what plugins I've already tested, and will keep update it:

|Plugin|Status|Updated|Modified|Remarks|
|:-----|:----:|:-----:|:-------|:-----|
|Spoiler|Done|25AUG2022|1. Matching theme styles<br>2. Added use `<span>` within spoiler block as a title.<br>3. Added `<ctb>` style for spoiler block.<br>4. List text color changed.<br>5. Added use `<span>` within between list items for description.<br>6. Added symbol and hover effect for spoiler inline.<br>7. Adjustments for print & export PDF.|- |
|TurnToChart|Done|20OCT2022|1. Color adjustments for Render Viewer & PDF.<br>2.Removed chart background color.<br>3.|-|
|Inline Todo|Done|25AUG2022|1. Improved alignment for Montserrat font.<br>2. Changed assignee tag style.<br>3. Improved text clarity for tags.<br>4. Added line-through effect for checked items. (hover for hiding the line)|- |
|Markdown Table Colorize|Done|25AUG2022|1. Added column marks, max support up to 52 columns.<br>2. Added row separation.<br>3. Added hover zoom effect for column marks.|- |
|Draw.io|Tested|25AUG2022|-|-|
|Enhancement|Done|22OCT2022|1.Removed the left color bar of admonition.<br>2.Changed footnote marker text to monospace font.<br>3.Changed cursor type when mouse hovering link marker.<br>4.Changed link and footnote colors.<br>5.Changed admonition color. |I'm not using this plugin, so I'll only fix bugs based on user requests. |
|Note Link System|Done|20NOV2022|1.Fix the link hash keep showing on the spoiler block title and content top.| - |
<!-- |Admonition Markdown Extension|Done|30NOV2022|1.Admonition block styles.|| -->

[:arrow_up:Back](#table-of-contents)

## Export HTML File 
(soon...)

[:arrow_up:Back](#table-of-contents)

## Export PDF Document

ReMoods has separated the font settings into 2 standalone parts `Screen` and `Print` to provide you with a more flexible experience of customization:


The font settings for Markdown Editor, Render Viewer, Rich Text Editor, and Export HTML File:

- Base Font
- Monospace Font
- Heading Font

The font settings for Print & Export PDF:

- Print Base Font
- Print Monospace Font
- Print Heading Font

That means you can have standalone font settings for them!

For advanced, you can also control which elements should show on the PDF through the settings page, such as hiding the Sticky Notes, hiding the Key Mention, hiding the notebook title, etc. Play around the options menu advanced settings to discover more!

![Screenshot 2022-09-26 190704](https://user-images.githubusercontent.com/110529913/192261498-b95ee279-65f3-4dc3-9a1f-609023f62859.png)

[:arrow_up:Back](#table-of-contents)

## Asking For Bits Of Help

**Help Report Issues:** 

It would be helpful for improving the theme if you report me anything that make you feel uncomfortable when using ReMoods, such as colors, unclear text, bugs, etc.

- [Create an issue post on GitHub](https://github.com/Sinacs/Joplin.Plugin.ReMoods.Theme/issues/new/choose)
- [Leave me a message on Joplin forum](https://discourse.joplinapp.org/t/plugin-remoods-theme-v3/27547?u=sinacs)

**Send User Feedback:** 

Tell me whatever you feel through the time you using this theme.

- [Leave me a message on Joplin forum](https://discourse.joplinapp.org/t/plugin-remoods-theme-v3/27547?u=sinacs)
- [Send by email](mailto:sinacs.dev@gmail.com?subject=ReMoods&nbsp;Theme&nbsp;User&nbsp;Feedback!)

That means a lots to me! Thank you guys!

[:arrow_up:Back](#table-of-contents)
