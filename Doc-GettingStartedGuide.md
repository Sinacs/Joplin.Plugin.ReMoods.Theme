# ReMoods Theme Getting Started Guide

Hi there! If you are first time to use ReMoods Theme, this guide would guiding you to get complete experience with a few quick steps! Hope you would enjoy the time using ReMoods Theme! Let's Go!

## Table Of Contents

- 1 -> [Download And Install Recommended Fonts](#download-and-install-recommended-fonts)
- 2 -> [Install And Configure 3 Important Plugins](#install-and-configure-3-important-plugins)
- 3 -> [Modify The Joplin\'s Built-in Settings](#modify-the-joplins-built-in-settings)
- 4 -> [Set Joplin Starting Screen Background Color](#set-joplin-starting-screen-background-color)

## Download And Install Recommended Fonts

👨‍🔬: **First things first, ReMoods spend lots of time to test the best fonts for you, they've great performance on both read and write, and I developed everything based on using these fonts, so I recommended you use them:** 🤩

You can download...

1. The abridged font package from [Google Drive🎁](https://drive.google.com/drive/folders/1oQVRSix1hw5zgmJiphZIEAqMrEH5EuLQ?usp=sharing), Or
2. The full packages by clicking below fonts selection to visit the official sources:

- Base Font: 🛻[Mulish](https://fonts.google.com/specimen/Mulish?query=mulish)
- Base Font: 🛻[GenSenRounded TW](https://github.com/ButTaiwan/gensen-font/releases) (Traditional & Simplified Chinese)
- Monospace Font: 🛻[Cascadia Mono Light](https://github.com/microsoft/cascadia-code/releases) (markdown syntax, code block, list token, etc.)
- Heading Font: 🛻[Montserrat](https://fonts.google.com/specimen/Montserrat?query=montserrat) (heading only)

> To Chinese Language Users:
>
> 👨‍🔬: "Mulish" has a great visual identification experience when combine using with the Chinese font, and it supplies monospace number characters, it would make your notes neater. Moreover, the "GenSenRounded TW" font-weight will automatically switch to "light" to improve the reading experience in Night Mode.

[⬆️Back](#table-of-contents)

## Install And Configure 3 Important Plugins

**Reason to install:**

| Installing                 | Because of...                                                                                                                                          |
| :------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| ReMoods Theme              | This is a must!🤔                                                                                                                                      |
| Rich Markdown              | This plugin supplies advanced CSS classes to help ReMoods create styling and that would cause some element styles to be missing if running without it. |
| Quick HTML Tags (optional) | It provides you with a quick and easy way to create the helpful custom elements which ReMoods provides you.                                            |

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

[⬆️Back](#table-of-contents)

## Modify The Joplin's Built-in Settings

**Reason to modify:**

| Modifying                | Because of...                                                                                    |
| :----------------------- | :----------------------------------------------------------------------------------------------- |
| Joplin built-in theme    | ReMoods can't styling the private area colors of other plugins but built-in theme can.           |
| Joplin built-in Markdown | Joplin is default to disable some of the built-in markdown features that ReMoods has styles for. |

**Reference for modifying:**

| ReMoods Theme Mode | Better to run with the Joplin Built-in... |
| :----------------- | ----------------------------------------- |
| Day Mode           | Light Theme                               |
| Dusk Mode          | Dark Theme                                |
| Night Mode         | Dark Theme                                |

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

[⬆️Back](#table-of-contents)

## Set Joplin Starting Screen Background Color

🤔:**You might hate to see the starting screen background in white when using `Dusk Mode` and `Night Mode`, but this problem can't be solved by a plugin. To fix this, you should edit your `userchrome.css` manually:**

1. Navigate to `Options` > `Appearance`.
2. Scroll to the bottom and click `Show Advanced Settings`.
3. Click `Custom Stylesheet for Joplin-wide app styles` and it will open the `userchrome.css` file.
4. Copy / paste the below codes into `userchrome.css` and save the file:

```
/* Set starting screen background color */
body {
  background-color: hsl(0,0%,40%) !important;
}
```

5. Quit and restart Joplin to apply all the above updates!

🎉🎉🎉 WOW! Congratulations! You made it! 🚀🛸🪐🍺🍺🍺

[⬆️Back](#table-of-contents) | [🏠Home](https://github.com/Sinacs/Joplin.Plugin.ReMoods.Theme)
