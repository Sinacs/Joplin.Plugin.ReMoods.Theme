# ReMoods Theme (BETA)
The ReMoods Theme project is inherited from the past Ohmine Dark Theme and drives it to an entirely new stage. ReMoods beautifies your Joplin screen and document appearance, taking care of your writing moods and eyes-health!

![Screenshot 2022-09-25 032654-tile](https://user-images.githubusercontent.com/110529913/192116296-82e79460-48b3-4d84-8575-a0daa459bd28.png)


## Why use ReMoods? 

When simple and clear documentation makes it easy to understand, adding a beautiful appearance would make everyone enjoy reading more. As a theme for a documentation tool, ReMoods is designed for those who work often based on sharing screens or documents with others. As a theme for personal notetaker, ReMoods is tailored for your writing moods and eyes-health.

- Use single-color tones to boost your writing moods - You can switch to assorted colors anytime! 
- Auto hiding unnecessary UI elements from your screen and bring you to focus on writing. 
- Provide over 80% consistent syntax highlighting styles for the code block of Markdown Editor and Render Viewer. 
- Extra formatting adjustments for the Exported HTML File and PDF Document to increase the reading experience. 
- Provide certain helpful HTML custom elements to increase your notetaking experience. 
- Provide third-party plugins’ CSS styles to add extra uses in ReMoods.

## Recommend Fonts 

ReMoods Theme tested over 50 free fonts from 10px to 16px, light to dark background, long hours of reading, etc. I finally picked the fonts below: 

- Base Font Winner: Montserrat
- Monospace Font Winner: Cascadia Mono Light 
- Traditional & Simplified Chinese Font Winner: Chiron Hei Hk Text Extralight 

They are all working great with ReMoods, and I was developing everything for this theme based on using these fonts. 

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

## Heading 

![Screenshot 2022-09-25 164824](https://user-images.githubusercontent.com/110529913/192136884-4a05f5e1-8e36-45c0-b880-fb8252b1ebce.png)

1. For the headings you always use with a border, you can enable the heading's border through the settings page.
2. For the headings you want to add border flexibly, you can manually be adding `---` behind the heading at any time.
3. Enable the heading reference will appear in front of the headings.
4. When using emoji within the H1 heading, you should use `<span></span>` to wrap it up.


```
### this h3 heading will not have a border  // if you didn't enable the h3 border.

### this h3 heading will have a border
--- // it will have a border when you add the `---` behind a heading.
```

## Text Styles

![Screenshot 2022-09-25 025053](https://user-images.githubusercontent.com/110529913/192114108-06e98831-c1f6-4dc4-b754-3a98bb6315dc.png)

## Floating TOC 

![Screenshot 2022-09-25 032314](https://user-images.githubusercontent.com/110529913/192115112-9432ac02-94de-4894-b0a6-3fcc8333d32f.png)

# Custom Elements 

ReMoods Theme provides a lot of custom elements to help you create a better reading experience on the Render Viewer and Export HTML File. If Joplin is your only place to taking notes, you can just use Custom Elements without thinking. Otherwise, you should notice the below:

1. Custom Elements are unique HTML Elements and CSS Styles for ReMoods Theme, so it might become plain text format when you transfer your notes to other software.
2. Even if other software is support customize CSS, you should still need to copy the related codes from ReMoods to your new software manually.

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

## Sticky Notes 

EXAMPLE: 

```
<note>
For notices, remarks, info, descriptions…
</note> 
<tip>
For tips, hints, ideas, concepts, inspirations…
</tip> 
<explain>
For explain, examples…
</explain>
<question>
For problems, considerations, questions…
</question> 
<warning>
For urgent, danger…
</warning>
<comment>
For leaving a message to someone...
</comment> 
<keyword>
For jot down professional nouns or translations which are related to the article. Or, some of the words which are prepared to use for the article in the future.
</keyword>
<important>
For write down whatever is important.
</important>
```

OUTPUT:

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

## Key Mention

EXAMPLE:

```
<km>Updated: 25/08/2022 22:50</km>

<km>Call Me: [+12345678910](tel:+12345678910)</km>

<km>Contact Me: [jesscia@example.com](mailto:jesscia@example.com)</km>

<km>*Girl In Ice* | Erica Ferencik</km>

<km>Toothbrush ~~USD 8.00~~ USD 3.00</km>

<km>Reference: [Joplin Home Page](https://www.joplin.org)</km>

```

OUTPUT:

## Third-Party Plugins Styling 

### Spoiler 

### Markdown Table Colorize 

## Print & Export 

### Exported HTML File 

### Exported PDF Document 

## Tested Plugins 

## Contribution
