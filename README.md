# ReMoods Theme 
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

ReMoods Theme tested over 50 free fonts from 10px to 16px, light to dark background, long hours reading, etc. I finally picked the fonts below: 

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

![Screenshot 2022-09-25 025311](https://user-images.githubusercontent.com/110529913/192114170-8a5c1864-c42a-4a99-9a58-ffbd7cfe5e86.png)

1. For the headings you always use with a border, you can enable the heading's border through the settings page.
2. For the headings you want to add border flexibly, you can manually adding `---` behind the heading any time.
3. Enable the heading reference will appeare in front of the headings.
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

## Custom Elements 

### Art Gallery 

EXAMPLE:

```
<ag4>
![anton-maksimov-juvnsky-7L0dMoYIgCU-unsplash.jpg](:/ed6f56f54493448280719373f679827e)
![alex-knight--4pZ_YqcSFc-unsplash.jpg](:/5a1e938c265349dfac42e355a0a4bece)
![4028206607bfa59034d79f0bc481ec51_m.jpg](:/c448bdc2f98b4eaaa66f8d986884afc4)
![6379080aa5186d039ae94775a4fc5c7a_m.jpg](:/cf7f78841054441c9a1240d8a4b8d441)
![93136ed8018aa9eb9ffd36c3841e3c38_m.jpg](:/08183c883d65414fb1dde2ae678b2164)
![8672cda04982de71d5d9ecace32304aa_m.jpg](:/20e73cb1dc634c7bafd13e9f1e0154df)
![4500a6ef6db4168c88f3b18c946b1d32.jpg](:/0b1df958f3164e909e93bc6de1fba736)
![3750d04840e4bd3da8f87fac8845b01f_m.jpg](:/c1be3864e3814bdb9eda1b0d7099e943)
![2021-09-13_23-16-53.png](:/bba9b9b957e84e3eb93a9650c088a711)
![1952(8)-800x800.jpg](:/44981445b1fb45edbfc2f8e87a769471)
![545c7b49596d0805be953e294641ccef_m.jpg](:/7502b8b96cbd4864bee882bb20e2ff62)
![340dd96f25bf2c867fd4cd9eb3d6eb54_m.jpg](:/8f394e2c7c8b4977a50d2a4aee7f8c72)
![250b00a86d666fce85e0ec077f608a46.jpg](:/0bf6facfa82a4ebe8dd2b60668c6c0be)
![121acf06069f498bf5a034c8d8f579ac_m.jpg](:/b4a3fdd307c7401e98751e7a1ddc0c36)
![96b9ef64f2bc3b1101b3617c22fa4515_m.jpg](:/a323020c2041425f840a58dee00262d6)
![94f6acd4b38559022e2634818cca91e0_m.jpg](:/28ed516111bc477399e765de37287099)
![89f39be75641ae3a2e86fb8a03311ad0_m.jpg](:/48fd6aecd6b84612aac0ca9b03a80fd9)
![5b4750681594583b8007be3d02526651_m.jpg](:/c740b77c94354dcd8f4007eb36982a43)
![3f3ff1e3d731be0060f46c2a41128b97_m.jpg](:/5937a620e0f94629bb4d57d47f66117b)
</ag4>
```
OUTPUT:

### Sticky Notes 

EXAMPLE: 

```
<note>
For notics, remarks, info, descriptions…
</note> 
<tip>
For tips, hints, ideas, concepts, inspirations…
</tip> 
<explain>
For explain, examples…
</explain>
<question>
For problems, conisderations, questions…
</question> 
<warning>
For ugrent, danger…
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

### Custom Title Block

EXAMPLE: 

```
<ctb>This is a title for the Custom Title Block
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</ctb>
```

OUTPUT:

### Key Point

EXAMPLE:

```
<kp>Key Point Sample 1</kp>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

<kp>Key Point Sample 2</kp>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

<kp>Key Point Sample 3</kp>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
```

### Key Mention

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
