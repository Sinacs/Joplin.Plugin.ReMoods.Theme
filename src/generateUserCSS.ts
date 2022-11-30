import joplin from 'api';
import { ThemeSettings } from 'src';

export const generateUserCSS = async (settings: ThemeSettings) => {
	const fs = joplin.require('fs-extra');

  const {
    remoodsHue,
    themeMode,
    baseFont,
		monospaceFont,
		headingFont,
		baseFontSize,
		monospaceFontSize,
    darkerEditorBackground,
    h1TextTransform,
    h1FontVariant,
    emphasizeAddRemove,
    emphasizeAddRemoveBg,
    themeColorListText,
    smallerCodeBlockFontSize,

		smallerMarkdownTableFontSize,
    smallerMonospaceFontSize,
    evidentHorizontalLine,

    headingRef,
    h1Border,
    h2Border,
    h3Border,
    h4Border,
    h5Border,
    h6Border,
    h1TwillPattern,
    hrTwillPattern,
    paragraphJustify,
    dottedBlockquote,
    dottedCodeBlock,
    katexTextAlignLeft,
    mermaidEyeProtector,
    imageEyeProtector,
    codeBlockMaxHeight,
    artGalleryMaxHeight,
    addRemoveSymbol,
    inlineCodeSymbol,
    customTitleBlockSymbol,

    notebookNotelistPanelScrollbar,
    notebookTitleWrap,
    notebookTitleScrollbar,
    notebookFolderIcon,

    printBaseFont,
		printMonospaceFont,
		printHeadingFont,
		printBaseFontSize,
		printMonospaceFontSize,
    printSmallerCodeBlockFontSize,
    printNoteTitle,
    printHeadingRef,
    printH1Border,
    printTOC,
    printStickyNotes,
    printKeyMention,
    printSnKm,
    printSpoilerInlineText,
  } = settings;

  const installDir = await joplin.plugins.installationDir();
  let chromeCSS = await fs.readFile(installDir + '/chrome.css', 'utf-8');
  let noteCSS = await fs.readFile(installDir + '/note.css', 'utf-8');

  switch(remoodsHue) {
    case '0deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 0deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 0deg;');
      break;
    case '10deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 10deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 10deg;');
      break;
    case '20deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 20deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 20deg;');
      break;
    case '30deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 30deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 30deg;');
      break;
    case '40deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 40deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 40deg;');
      break;
    case '50deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 50deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 50deg;');
      break;
    case '60deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 60deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 60deg;');
      break;
    case '70deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 70deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 70deg;');
      break;
    case '80deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 80deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 80deg;');
      break;
    case '90deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 90deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 90deg;');
      break;
    case '100deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 100deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 100deg;');
      break;
    case '110deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 110deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 110deg;');
      break;
    case '120deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 120deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 120deg;');
      break;
    case '130deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 130deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 130deg;');
      break;
    case '140deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 140deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 140deg;');
      break;
    case '150deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 150deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 150deg;');
      break;
    case '160deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 160deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 160deg;');
      break;
    case '170deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 170deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 170deg;');
      break;
    case '180deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 180deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 180deg;');
      break;
    case '190deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 190deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 190deg;');
      break;
    case '200deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 200deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 200deg;');
      break;
    case '210deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 210deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 210deg;');
      break;
    case '220deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 220deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 220deg;');
      break;
    case '230deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 230deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 230deg;');
      break;
    case '240deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 240deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 240deg;');
      break;
    case '250deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 250deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 250deg;');
      break;
    case '260deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 260deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 260deg;');
      break;
    case '270deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 270deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 270deg;');
      break;
    case '280deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 280deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 280deg;');
      break;
    case '290deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 290deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 290deg;');
      break;
    case '300deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 300deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 300deg;');
      break;
    case '310deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 310deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 310deg;');
      break;
    case '320deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 320deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 320deg;');
      break;
    case '330deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 330deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 330deg;');
      break;
    case '340deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 340deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 340deg;');
      break;
    case '350deg':
      chromeCSS = chromeCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 350deg;');
      noteCSS = noteCSS.replace(/^  --usp-remoods-hue:.+?;/gms, '  --usp-remoods-hue: 350deg;');
      break;
    default:
      alert('ReMoods Theme: There seems to be a problem loading the "ReMoods Hue", please restart Joplin and try again.')
  }

  switch(themeMode) {

    case 'dayMode':

    chromeCSS = chromeCSS.replace(/^  --code-mirror-bg-color:.+?;/gms, '  --code-mirror-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
    chromeCSS = chromeCSS.replace(/^  --code-mirror-text-color:.+?;/gms, '  --code-mirror-text-color: hsl(var(--usp-remoods-hue), 0%, 0%);');
    chromeCSS = chromeCSS.replace(/^  --code-mirror-scrollbar-track-bg-color:.+?;/gms, '  --code-mirror-scrollbar-track-bg-color: hsl(var(--usp-remoods-hue), 0%, 70%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --code-mirror-scrollbar-thumb-bg-color:.+?;/gms, '  --code-mirror-scrollbar-thumb-bg-color: linear-gradient(to bottom, hsl(var(--usp-remoods-hue), 0%, 70%)  3px, hsl(var(--usp-remoods-hue), 0%, 100%)  4px, hsl(var(--usp-remoods-hue), 0%, 100%) calc(100% - 4px), hsl(var(--usp-remoods-hue), 0%, 70%) calc(100% - 3px));');
    chromeCSS = chromeCSS.replace(/^  --code-mirror-scrollbar-thumb-bd-color:.+?;/gms, '  --code-mirror-scrollbar-thumb-bd-color: hsl(var(--usp-remoods-hue), 0%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --horizontal-line-syntax-color:.+?;/gms, '  --horizontal-line-syntax-color: hsl(var(--usp-remoods-hue), 0%, 0%);');
    chromeCSS = chromeCSS.replace(/^  --horizontal-line-bg-color:.+?;/gms, '  --horizontal-line-bg-color: hsl(var(--usp-remoods-hue), 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --cursor-bd-color:.+?;/gms, '  --cursor-bd-color: 2px solid hsl(var(--usp-remoods-hue), 0%, 0%);');
    chromeCSS = chromeCSS.replace(/^  --selected-text-color:.+?;/gms, '  --selected-text-color: var(--render-viewer-text-color);');
    chromeCSS = chromeCSS.replace(/^  --selected-text-bg-color:.+?;/gms, '  --selected-text-bg-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 20%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-selected-text-bg-color:.+?;/gms, '  --code-block-selected-text-bg-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 20%, 30%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --h1-text-color:.+?;/gms, '  --h1-text-color: hsl(var(--usp-remoods-hue), 60%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --h2-text-color:.+?;/gms, '  --h2-text-color: hsl(var(--usp-remoods-hue), 0%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --h3-text-color:.+?;/gms, '  --h3-text-color: hsl(var(--usp-remoods-hue), 0%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --h4-text-color:.+?;/gms, '  --h4-text-color: hsl(var(--usp-remoods-hue), 0%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --h5-text-color:.+?;/gms, '  --h5-text-color: hsl(var(--usp-remoods-hue), 0%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --h6-text-color:.+?;/gms, '  --h6-text-color: hsl(var(--usp-remoods-hue), 0%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --blockquote-text-color:.+?;/gms, '  --blockquote-text-color: hsl(var(--usp-remoods-hue), 0%, 65%);');
    chromeCSS = chromeCSS.replace(/^  --list-token-color:.+?;/gms, '  --list-token-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: hsl(var(--usp-remoods-hue), 30%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --checkbox-color:.+?;/gms, '  --checkbox-color: hsl(var(--usp-remoods-hue), 80%, 45%);');
    chromeCSS = chromeCSS.replace(/^  --link-text-color:.+?;/gms, '  --link-text-color: hsl(var(--usp-remoods-hue), 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --special-text-color:.+?;/gms, '  --special-text-color: hsl(var(--usp-remoods-hue), 100%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --special-bg-color:.+?;/gms, '  --special-bg-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --mark-text-bd-color:.+?;/gms, '  --mark-text-bd-color: hsl(var(--usp-remoods-hue), 60%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue), 25%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
    chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 25%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
    chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue), 25%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --sub-sup-text-color:.+?;/gms, '  --sub-sup-text-color: hsl(var(--usp-remoods-hue), 50%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --inline-code-color:.+?;/gms, '  --inline-code-color: hsl(var(--usp-remoods-hue), 0%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --inline-code-bd-color:.+?;/gms, '  --inline-code-bd-color: 2px solid hsl(var(--usp-remoods-hue), 20%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --inline-code-bg-color:.+?;/gms, '  --inline-code-bg-color: hsl(var(--usp-remoods-hue), 100%, 95%);');
    chromeCSS = chromeCSS.replace(/^  --html-tag-text-color:.+?;/gms, '  --html-tag-text-color: hsl(0, 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --html-tag-text-shadow:.+?;/gms, '  --html-tag-text-shadow: hsl(0, 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --html-attribute-text-color:.+?;/gms, '  --html-attribute-text-color: hsl(145, 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --html-attribute-text-shadow:.+?;/gms, '  --html-attribute-text-shadow: hsl(145, 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --html-string-text-color:.+?;/gms, '  --html-string-text-color: hsl(300, 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --html-string-text-shadow:.+?;/gms, '  --html-string-text-shadow: hsl(300, 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-bg-color:.+?;/gms, '  --code-block-bg-color: hsl(var(--usp-remoods-hue), 100%, 99%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-bd-width:.+?;/gms, '  --code-block-bd-width: 0 3px;');
    chromeCSS = chromeCSS.replace(/^  --code-block-bd-color:.+?;/gms, '  --code-block-bd-color: hsl(var(--usp-remoods-hue), 80%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-comment-color:.+?;/gms, '  --code-block-comment-color: hsl(var(--usp-remoods-hue), 0%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-comment-shadow:.+?;/gms, '  --code-block-comment-shadow: hsl(var(--usp-remoods-hue), 0%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-number-color:.+?;/gms, '  --code-block-number-color: hsl(calc(var(--usp-remoods-hue) + 110deg), 80%, 46%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-number-shadow:.+?;/gms, '  --code-block-number-shadow: hsl(calc(var(--usp-remoods-hue) + 110deg), 80%, 16%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-string-color:.+?;/gms, '  --code-block-string-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 80%, 55%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-string-shadow:.+?;/gms, '  --code-block-string-shadow: hsl(calc(var(--usp-remoods-hue) + 180deg), 80%, 25%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-3-color:.+?;/gms, '  --code-block-variable-3-color: hsl(calc(var(--usp-remoods-hue) + 323deg), 87%, 55%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-3-shadow:.+?;/gms, '  --code-block-variable-3-shadow: hsl(calc(var(--usp-remoods-hue) + 323deg), 87%, 25%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-attribute-color:.+?;/gms, '  --code-block-attribute-color: hsl(calc(var(--usp-remoods-hue) + 260deg), 80%, 55%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-attribute-shadow:.+?;/gms, '  --code-block-attribute-shadow: hsl(calc(var(--usp-remoods-hue) + 260deg), 80%, 25%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-error-color:.+?;/gms, '  --code-block-error-color: hsl(0, 100%, 65%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-error-bd-color:.+?;/gms, '  --code-block-error-bd-color: 2px dotted hsl(0, 100%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-invalidchar-color:.+?;/gms, '  --code-block-invalidchar-color: hsl(0, 100%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-invalidchar-shadow:.+?;/gms, '  --code-block-invalidchar-shadow: hsl(0, 100%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-color:.+?;/gms, '  --code-block-variable-color: hsl(var(--usp-remoods-hue), 0%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-shadow:.+?;/gms, '  --code-block-variable-shadow: hsl(var(--usp-remoods-hue), 0%, 10%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-2-color:.+?;/gms, '  --code-block-variable-2-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-2-shadow:.+?;/gms, '  --code-block-variable-2-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-def-color:.+?;/gms, '  --code-block-def-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-def-shadow:.+?;/gms, '  --code-block-def-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-undefined-color:.+?;/gms, '  --code-block-undefined-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-undefined-shadow:.+?;/gms, '  --code-block-undefined-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-operator-color:.+?;/gms, '  --code-block-operator-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-operator-shadow:.+?;/gms, '  --code-block-operator-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-null-color:.+?;/gms, '  --code-block-null-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-null-shadow:.+?;/gms, '  --code-block-null-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-matching-bracket-color:.+?;/gms, '  --code-block-matching-bracket-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-matching-bracket-shadow:.+?;/gms, '  --code-block-matching-bracket-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-keyword-color:.+?;/gms, '  --code-block-keyword-color: hsl(var(--usp-remoods-hue), 80%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-keyword-shadow:.+?;/gms, '  --code-block-keyword-shadow: hsl(var(--usp-remoods-hue), 80%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-property-color:.+?;/gms, '  --code-block-property-color: hsl(var(--usp-remoods-hue), 40%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-property-shadow:.+?;/gms, '  --code-block-property-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-qualifier-color:.+?;/gms, '  --code-block-qualifier-color: hsl(calc(var(--usp-remoods-hue) + 260deg), 80%, 55%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-qualifier-shadow:.+?;/gms, '  --code-block-qualifier-shadow: hsl(calc(var(--usp-remoods-hue) + 260deg), 80%, 25%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-type-color:.+?;/gms, '  --code-block-type-color: var(--code-block-qualifier-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-type-shadow:.+?;/gms, '  --code-block-type-shadow: var(--code-block-qualifier-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-builtin-color:.+?;/gms, '  --code-block-builtin-color: var(--code-block-qualifier-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-builtin-shadow:.+?;/gms, '  --code-block-builtin-shadow: var(--code-block-qualifier-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-atom-color:.+?;/gms, '  --code-block-atom-color: hsl(calc(var(--usp-remoods-hue) + 148deg), 80%, 45%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-atom-shadow:.+?;/gms, '  --code-block-atom-shadow: hsl(calc(var(--usp-remoods-hue) + 148deg), 80%, 15%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-meta-color:.+?;/gms, '  --code-block-meta-color: var(--code-block-atom-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-meta-shadow:.+?;/gms, '  --code-block-meta-shadow: var(--code-block-atom-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-string-2-color:.+?;/gms, '  --code-block-string-2-color: hsl(calc(var(--usp-remoods-hue) +  90deg), 80%, 55%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-string-2-shadow:.+?;/gms, '  --code-block-string-2-shadow: hsl(calc(var(--usp-remoods-hue) +  90deg), 80%, 25%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-tag-color:.+?;/gms, '  --code-block-tag-color: hsl(calc(var(--usp-remoods-hue) + 120deg), 80%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-tag-shadow:.+?;/gms, '  --code-block-tag-shadow: hsl(calc(var(--usp-remoods-hue) + 120deg), 80%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-table-text-color:.+?;/gms, '  --mtc-table-text-color: hsl(var(--usp-remoods-hue), 0%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-table-vertical-bar-color:.+?;/gms, '  --mtc-table-vertical-bar-color: hsl(var(--usp-remoods-hue), 0%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-separate-bg-color:.+?;/gms, '  --mtc-separate-bg-color: hsl(var(--usp-remoods-hue), 0%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-separate-head-text-color:.+?;/gms, '  --mtc-separate-head-text-color: hsl(var(--usp-remoods-hue), 0%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-1:.+?;/gms, '  --mtc-column-mark-color-1: hsl(0, 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-1:.+?;/gms, '  --mtc-column-mark-shadow-1: hsl(0, 100%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-2:.+?;/gms, '  --mtc-column-mark-color-2: hsl(240, 70%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-2:.+?;/gms, '  --mtc-column-mark-shadow-2: hsl(240, 70%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-3:.+?;/gms, '  --mtc-column-mark-color-3: hsl(160, 80%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-3:.+?;/gms, '  --mtc-column-mark-shadow-3: hsl(160, 80%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-4:.+?;/gms, '  --mtc-column-mark-color-4: hsl(40, 90%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-4:.+?;/gms, '  --mtc-column-mark-shadow-4: hsl(40, 90%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-5:.+?;/gms, '  --mtc-column-mark-color-5: hsl(60, 60%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-5:.+?;/gms, '  --mtc-column-mark-shadow-5: hsl(60, 60%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-6:.+?;/gms, '  --mtc-column-mark-color-6: hsl(190, 80%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-6:.+?;/gms, '  --mtc-column-mark-shadow-6: hsl(190, 80%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-7:.+?;/gms, '  --mtc-column-mark-color-7: hsl(100, 70%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-7:.+?;/gms, '  --mtc-column-mark-shadow-7: hsl(100, 70%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-8:.+?;/gms, '  --mtc-column-mark-color-8: hsl(210, 100%, 55%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-8:.+?;/gms, '  --mtc-column-mark-shadow-8: hsl(210, 100%, 55%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-9:.+?;/gms, '  --mtc-column-mark-color-9: hsl(270, 100%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-9:.+?;/gms, '  --mtc-column-mark-shadow-9: hsl(270, 100%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-10:.+?;/gms, '  --mtc-column-mark-color-10: hsl(310, 70%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-10:.+?;/gms, '  --mtc-column-mark-shadow-10: hsl(310, 70%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --eh-footnote-ref-color:.+?;/gms, '  --eh-footnote-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 0%, 100%);');
    chromeCSS = chromeCSS.replace(/^  --g-main-bg-color-1:.+?;/gms, '  --g-main-bg-color-1: hsl(var(--usp-remoods-hue), 0%, 100%);');
    chromeCSS = chromeCSS.replace(/^  --g-panel-header-bg-color:.+?;/gms, '  --g-panel-header-bg-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --g-panel-header-text-color:.+?;/gms, '  --g-panel-header-text-color: hsl(var(--usp-remoods-hue), 0%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-panel-header-text-shadow:.+?;/gms, '  --g-panel-header-text-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --g-item-bg-color-hover:.+?;/gms, '  --g-item-bg-color-hover: hsl(var(--usp-remoods-hue), 100%, 95%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-bg-color-selected:.+?;/gms, '  --g-item-bg-color-selected: hsl(var(--usp-remoods-hue), 100%, 85%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-shadow-hover:.+?;/gms, '  --g-item-shadow-hover: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-divider-color:.+?;/gms, '  --g-item-divider-color: hsl(var(--usp-remoods-hue), 40%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-text-color:.+?;/gms, '  --g-item-text-color: hsl(var(--usp-remoods-hue), 0%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-text-color-2:.+?;/gms, '  --g-item-text-color-2: hsl(var(--usp-remoods-hue), 0%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-bg-color:.+?;/gms, '  --g-lighter-square-btn-bg-color: none;');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-bg-color-hover:.+?;/gms, '  --g-lighter-square-btn-bg-color-hover: hsl(var(--usp-remoods-hue), 100%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-bd-color:.+?;/gms, '  --g-lighter-square-btn-bd-color: transparent;');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-bd-color-hover:.+?;/gms, '  --g-lighter-square-btn-bd-color-hover: hsl(var(--usp-remoods-hue), 70%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-icon-color:.+?;/gms, '  --g-lighter-square-btn-icon-color: hsl(var(--usp-remoods-hue), 100%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-icon-color-hover:.+?;/gms, '  --g-lighter-square-btn-icon-color-hover: hsl(var(--usp-remoods-hue), 100%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-bg-color:.+?;/gms, '  --g-darker-square-btn-bg-color: none;');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-bg-color-hover:.+?;/gms, '  --g-darker-square-btn-bg-color-hover: hsl(var(--usp-remoods-hue), 100%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-bd-color:.+?;/gms, '  --g-darker-square-btn-bd-color: transparent;');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-bd-color-hover:.+?;/gms, '  --g-darker-square-btn-bd-color-hover: hsl(var(--usp-remoods-hue), 70%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-icon-color:.+?;/gms, '  --g-darker-square-btn-icon-color: hsl(var(--usp-remoods-hue), 0%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-icon-color-hover:.+?;/gms, '  --g-darker-square-btn-icon-color-hover: hsl(var(--usp-remoods-hue), 100%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-scrollbar-thumb-bg-color-1:.+?;/gms, '  --g-scrollbar-thumb-bg-color-1: hsl(var(--usp-remoods-hue), 0%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --g-scrollbar-track-bg-color-1:.+?;/gms, '  --g-scrollbar-track-bg-color-1: hsl(var(--usp-remoods-hue), 0%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --g-input-text-color-1:.+?;/gms, '  --g-input-text-color-1: hsl(var(--usp-remoods-hue), 0%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-input-bg-color-1:.+?;/gms, '  --g-input-bg-color-1: hsl(var(--usp-remoods-hue), 0%, 100%);');
    chromeCSS = chromeCSS.replace(/^  --g-input-bd-color-1:.+?;/gms, '  --g-input-bd-color-1: hsl(var(--usp-remoods-hue), 0%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --g-toolbar-bg-color:.+?;/gms, '  --g-toolbar-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
    chromeCSS = chromeCSS.replace(/^  --g-toolbar-bd-color:.+?;/gms, '  --g-toolbar-bd-color: hsl(var(--usp-remoods-hue), 0%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --g-editor-panel-divider-color:.+?;/gms, '  --g-editor-panel-divider-color: hsl(var(--usp-remoods-hue), 0%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --g-option-main-bg-color:.+?;/gms, '  --g-option-main-bg-color: hsl(var(--usp-remoods-hue), 95%, 95%);');
    chromeCSS = chromeCSS.replace(/^  --s-directory-icon-open-color:.+?;/gms, '  --s-directory-icon-open-color: hsl(var(--usp-remoods-hue), 20%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-directory-icon-open-shadow:.+?;/gms, '  --s-directory-icon-open-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --s-directory-icon-close-color:.+?;/gms, '  --s-directory-icon-close-color: hsl(var(--usp-remoods-hue), 0%, 0%);');
    chromeCSS = chromeCSS.replace(/^  --s-directory-icon-close-shadow:.+?;/gms, '  --s-directory-icon-close-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --s-note-count-label-text-color:.+?;/gms, '  --s-note-count-label-text-color: hsl(var(--usp-remoods-hue), 0%, 0%);');
    chromeCSS = chromeCSS.replace(/^  --s-note-count-label-bg-color:.+?;/gms, '  --s-note-count-label-bg-color: hsl(var(--usp-remoods-hue), 100%, 95%);');
    chromeCSS = chromeCSS.replace(/^  --s-note-count-label-bd-color:.+?;/gms, '  --s-note-count-label-bd-color: hsl(var(--usp-remoods-hue), 50%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --s-note-count-label-shadow:.+?;/gms, '  --s-note-count-label-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --s-sync-info-text-color:.+?;/gms, '  --s-sync-info-text-color: hsl(var(--usp-remoods-hue), 0%, 0%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-info-symbol-color:.+?;/gms, '  --s-sync-info-symbol-color: radial-gradient( hsl(var(--usp-remoods-hue), 80%, 60%) 25%, hsl(var(--usp-remoods-hue), 100%, 35%) 55%, hsl(var(--usp-remoods-hue), 80%, 60%) 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-bg-color:.+?;/gms, '  --s-sync-btn-bg-color: transparent;');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-bd-color:.+?;/gms, '  --s-sync-btn-bd-color: hsl(var(--usp-remoods-hue), 0%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-bg-color-hover:.+?;/gms, '  --s-sync-btn-bg-color-hover: hsl(var(--usp-remoods-hue), 100%, 95%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-bd-color-hover:.+?;/gms, '  --s-sync-btn-bd-color-hover: hsl(var(--usp-remoods-hue), 100%, 45%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-text-color::.+?;/gms, '  --s-sync-btn-text-color: hsl(var(--usp-remoods-hue), 0%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-text-color-hover:.+?;/gms, '  --s-sync-btn-text-color-hover: hsl(var(--usp-remoods-hue), 100%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-icon-text-shadow:.+?;/gms, '  --s-sync-btn-icon-text-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-icon-text-shadow-hover:.+?;/gms, '  --s-sync-btn-icon-text-shadow-hover: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-todo-text-color:.+?;/gms, '  --s-todo-text-color: hsl(var(--usp-remoods-hue), 90%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-notelist-search-btn-color:.+?;/gms, '  --s-notelist-search-btn-color: hsl(var(--usp-remoods-hue), 0%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-notelist-search-btn-color-hover:.+?;/gms, '  --s-notelist-search-btn-color-hover: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-nav-btn-bg-color:.+?;/gms, '  --s-notebook-nav-btn-bg-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-nav-btn-bd-color:.+?;/gms, '  --s-notebook-nav-btn-bd-color: hsl(var(--usp-remoods-hue), 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-nav-btn-shadow:.+?;/gms, '  --s-notebook-nav-btn-shadow: hsl(var(--usp-remoods-hue), 70%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-nav-btn-text-color:.+?;/gms, '  --s-notebook-nav-btn-text-color: hsl(var(--usp-remoods-hue), 100%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-batch-menu-btn-text-color:.+?;/gms, '  --s-batch-menu-btn-text-color: hsl(var(--usp-remoods-hue), 0%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-batch-menu-btn-bg-color:.+?;/gms, '  --s-batch-menu-btn-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
    chromeCSS = chromeCSS.replace(/^  --s-batch-menu-btn-bd-color:.+?;/gms, '  --s-batch-menu-btn-bd-color: hsl(var(--usp-remoods-hue), 60%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --s-update-time-label-bg-color:.+?;/gms, '  --s-update-time-label-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
    chromeCSS = chromeCSS.replace(/^  --s-update-time-label-text-color:.+?;/gms, '  --s-update-time-label-text-color: hsl(var(--usp-remoods-hue), 20%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-tagbar-tag-text-color:.+?;/gms, '  --s-tagbar-tag-text-color: hsl(var(--usp-remoods-hue), 40%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-tagbar-tag-text-color-hover:.+?;/gms, '  --s-tagbar-tag-text-color-hover: hsl(var(--usp-remoods-hue), 60%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --s-tagbar-tag-text-shadow-hover:.+?;/gms, '  --s-tagbar-tag-text-shadow-hover: none;');
    chromeCSS = chromeCSS.replace(/^  --s-tagbar-tag-divider-color:.+?;/gms, '  --s-tagbar-tag-divider-color: hsl(var(--usp-remoods-hue), 0%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-tagbar-hint-text-color:.+?;/gms, '  --s-tagbar-hint-text-color: hsl(var(--usp-remoods-hue), 0%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-bg-color:.+?;/gms, '  --s-modal-dialog-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-label-color:.+?;/gms, '  --s-modal-dialog-label-color: hsl(var(--usp-remoods-hue), 0%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-title-text-color:.+?;/gms, '  --s-modal-dialog-title-text-color: hsl(var(--usp-remoods-hue), 0%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-confirm-btn-text-color:.+?;/gms, '  --s-modal-dialog-confirm-btn-text-color: hsl(var(--usp-remoods-hue), 0%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-confirm-btn-bg-color:.+?;/gms, '  --s-modal-dialog-confirm-btn-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-confirm-btn-bd-color:.+?;/gms, '  --s-modal-dialog-confirm-btn-bd-color: hsl(var(--usp-remoods-hue), 40%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-creator-icon-select-btn-bg-color:.+?;/gms, '  --s-notebook-creator-icon-select-btn-bg-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-creator-icon-select-btn-bd-color:.+?;/gms, '  --s-notebook-creator-icon-select-btn-bd-color: hsl(var(--usp-remoods-hue), 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-creator-icon-select-btn-text-color:.+?;/gms, '  --s-notebook-creator-icon-select-btn-text-color: hsl(var(--usp-remoods-hue), 100%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-tag-selector-bg-color:.+?;/gms, '  --s-tag-selector-bg-color: hsl(var(--usp-remoods-hue), 100%, 95%);');
    chromeCSS = chromeCSS.replace(/^  --s-tag-selector-bd-color:.+?;/gms, '  --s-tag-selector-bd-color: hsl(var(--usp-remoods-hue), 40%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-tag-selector-input-text-color:.+?;/gms, '  --s-tag-selector-input-text-color: hsl(var(--usp-remoods-hue), 0%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-tag-selector-divider-color:.+?;/gms, '  --s-tag-selector-divider-color: hsl(var(--usp-remoods-hue), 0%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-tag-selector-text-color:.+?;/gms, '  --s-tag-selector-text-color: hsl(var(--usp-remoods-hue), 0%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-command-palette-item-bg-color:.+?;/gms, '  --s-command-palette-item-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
    chromeCSS = chromeCSS.replace(/^  --s-command-palette-item-bg-color-selected:.+?;/gms, '  --s-command-palette-item-bg-color-selected: hsl(var(--usp-remoods-hue), 100%, 85%);');
    chromeCSS = chromeCSS.replace(/^  --s-command-palette-item-bd-color:.+?;/gms, '  --s-command-palette-item-bd-color: hsl(var(--usp-remoods-hue), 0%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-command-palette-item-text-color:.+?;/gms, '  --s-command-palette-item-text-color: hsl(var(--usp-remoods-hue), 0%, 0%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-guide-text-color:.+?;/gms, '  --s-option-guide-text-color: hsl(var(--usp-remoods-hue), 40%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-guide-bg-color:.+?;/gms, '  --s-option-guide-bg-color: hsl(var(--usp-remoods-hue), 90%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-label-text-color:.+?;/gms, '  --s-option-label-text-color: hsl(var(--usp-remoods-hue), 0%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-op-input-color:.+?;/gms, '  --s-op-input-color: hsl(var(--usp-remoods-hue), 0%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-btn-bg-color:.+?;/gms, '  --s-option-btn-bg-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-btn-bd-color:.+?;/gms, '  --s-option-btn-bd-color: hsl(var(--usp-remoods-hue), 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-btn-text-color:.+?;/gms, '  --s-option-btn-text-color: hsl(var(--usp-remoods-hue), 100%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-description-text-color:.+?;/gms, '  --s-option-description-text-color: hsl(var(--usp-remoods-hue), 20%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-table-text-color:.+?;/gms, '  --s-option-table-text-color: hsl(var(--usp-remoods-hue), 20%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-plugin-card-bd-color:.+?;/gms, '  --s-plugin-card-bd-color: hsl(var(--usp-remoods-hue), 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-plugin-card-shadow:.+?;/gms, '  --s-plugin-card-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --s-plugin-card-text-color:.+?;/gms, '  --s-plugin-card-text-color: hsl(var(--usp-remoods-hue), 0%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-plugin-card-switcher-bg-color:.+?;/gms, '  --s-plugin-card-switcher-bg-color: hsl(var(--usp-remoods-hue), 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-confirm-btn-bg-color:.+?;/gms, '  --s-option-confirm-btn-bg-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-confirm-btn-bd-color:.+?;/gms, '  --s-option-confirm-btn-bd-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-confirm-btn-shadow:.+?;/gms, '  --s-option-confirm-btn-shadow: hsl(var(--usp-remoods-hue), 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-confirm-btn-text-color:.+?;/gms, '  --s-option-confirm-btn-text-color: hsl(var(--usp-remoods-hue), 20%, 20%);');
    noteCSS = noteCSS.replace(/^  --render-viewer-bg-color:.+?;/gms, '  --render-viewer-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
    noteCSS = noteCSS.replace(/^  --render-viewer-bg-color-2:.+?;/gms, '  --render-viewer-bg-color-2: hsl(var(--usp-remoods-hue), 100%, 99%);');
    noteCSS = noteCSS.replace(/^  --render-viewer-text-color:.+?;/gms, '  --render-viewer-text-color: hsl(var(--usp-remoods-hue), 0%, 0%);');
    noteCSS = noteCSS.replace(/^  --horizontal-line-bg:.+?;/gms, '  --horizontal-line-bg: none;');
    noteCSS = noteCSS.replace(/^  --horizontal-line-bgi:.+?;/gms, '  --horizontal-line-bgi: repeating-linear-gradient(114deg, hsl(var(--usp-remoods-hue), 100%, 30%), hsl(var(--usp-remoods-hue), 100%, 75%, 50%), hsl(var(--usp-remoods-hue), 100%, 30%) 3px);');
    noteCSS = noteCSS.replace(/^  --render-viewer-scrollbar-thumb-bg-color:.+?;/gms, '  --render-viewer-scrollbar-thumb-bg-color: hsl(var(--usp-remoods-hue), 0%, 70%);');
    noteCSS = noteCSS.replace(/^  --bc-scrollbar-thumb-bd-color:.+?;/gms, '  --bc-scrollbar-thumb-bd-color: transparent;');
    noteCSS = noteCSS.replace(/^  --bc-scrollbar-thumb-bg-color:.+?;/gms, '  --bc-scrollbar-thumb-bg-color: radial-gradient(hsl(var(--usp-remoods-hue), 30%, 60%) 30%, hsl(var(--usp-remoods-hue), 40%, 70%) 70%);');
    noteCSS = noteCSS.replace(/^  --bc-scrollbar-thumb-bg-color-hover:.+?;/gms, '  --bc-scrollbar-thumb-bg-color-hover: radial-gradient(hsl(var(--usp-remoods-hue), 50%, 60%) 30%, hsl(var(--usp-remoods-hue), 60%, 70%) 70%);');
    noteCSS = noteCSS.replace(/^  --heading-ref-text-color:.+?;/gms, '  --heading-ref-text-color: hsl(0, 0%, 65%);');
    noteCSS = noteCSS.replace(/^  --h1-color:.+?;/gms, '  --h1-color: hsl(var(--usp-remoods-hue), 60%, 60%);');
    noteCSS = noteCSS.replace(/^  --h1-bg-color:.+?;/gms, '  --h1-bg-color: repeating-linear-gradient( 114deg, hsl(var(--usp-remoods-hue), 60%, 60%), hsl(var(--usp-remoods-hue), 100%, 65%, 30%), hsl(var(--usp-remoods-hue), 60%, 60%)  3px);');
    noteCSS = noteCSS.replace(/^  --h1-bd-color:.+?;/gms, '  --h1-bd-color: var(--h1-bg-color);');
    noteCSS = noteCSS.replace(/^  --h2-color:.+?;/gms, '  --h2-color: hsl(var(--usp-remoods-hue), 0%, 30%);');
    noteCSS = noteCSS.replace(/^  --h2-bd-color:.+?;/gms, '  --h2-bd-color: linear-gradient(to right, hsl(var(--usp-remoods-hue), 0%, 30%) 50%, transparent);');
    noteCSS = noteCSS.replace(/^  --h3-color:.+?;/gms, '  --h3-color: var(--h2-color);');
    noteCSS = noteCSS.replace(/^  --h3-bd-color:.+?;/gms, '  --h3-bd-color: var(--h2-bd-color);');
    noteCSS = noteCSS.replace(/^  --h4-color:.+?;/gms, '  --h4-color: var(--h2-color);');
    noteCSS = noteCSS.replace(/^  --h4-bd-color:.+?;/gms, '  --h4-bd-color: var(--h2-bd-color);');
    noteCSS = noteCSS.replace(/^  --h5-color:.+?;/gms, '  --h5-color: hsl(var(--usp-remoods-hue), 0%, 60%);');
    noteCSS = noteCSS.replace(/^  --h5-bd-color:.+?;/gms, '  --h5-bd-color: linear-gradient(to right, transparent 50%, var(--render-viewer-bg-color) 100%), repeating-linear-gradient(to right, hsl(var(--usp-remoods-hue), 0%, 60%), 2px, transparent, 2px, transparent 5px);');
    noteCSS = noteCSS.replace(/^  --h6-color:.+?;/gms, '  --h6-color: var(--h5-color);');
    noteCSS = noteCSS.replace(/^  --h6-bd-color:.+?;/gms, '  --h6-bd-color: var(--h5-bd-color);');
    noteCSS = noteCSS.replace(/^  --special-text-shadow:.+?;/gms, '  --special-text-shadow: 0 0 none;');
    noteCSS = noteCSS.replace(/^  --strong-text-color:.+?;/gms, '  --strong-text-color: hsl(var(--usp-remoods-hue), 100%, 45%);');
    noteCSS = noteCSS.replace(/^  --emphasize-text-color:.+?;/gms, '  --emphasize-text-color: var(--strong-text-color);');
    noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue), 25%, 75%);');
    noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
    noteCSS = noteCSS.replace(/^  --strikethrough-symbol-color:.+?;/gms, '  --strikethrough-symbol-color: hsl(0, 0%,100%);');
    noteCSS = noteCSS.replace(/^  --strikethrough-symbol-bg-color:.+?;/gms, '  --strikethrough-symbol-bg-color: hsl(0, 70%, 55%);');
    noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 25%, 50%);');
    noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
    noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue), 25%, 75%);');
    noteCSS = noteCSS.replace(/^  --insert-symbol-color:.+?;/gms, '  --insert-symbol-color: hsl(0, 0%, 100%);');
    noteCSS = noteCSS.replace(/^  --insert-symbol-bg-color:.+?;/gms, '  --insert-symbol-bg-color: hsl(100, 60%, 45%);');
    noteCSS = noteCSS.replace(/^  --abbreviation-text-color:.+?;/gms, '  --abbreviation-text-color: hsl(var(--usp-remoods-hue), 90%, 30%);');
    noteCSS = noteCSS.replace(/^  --abbreviation-bd-color:.+?;/gms, '  --abbreviation-bd-color: hsl(var(--usp-remoods-hue), 90%, 30%);');
    noteCSS = noteCSS.replace(/^  --mark-text-color:.+?;/gms, '  --mark-text-color: hsl(var(--usp-remoods-hue), 0%, 0%);');
    noteCSS = noteCSS.replace(/^  --mark-text-bg-color:.+?;/gms, '  --mark-text-bg-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    noteCSS = noteCSS.replace(/^  --search-text-color:.+?;/gms, '  --search-text-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
    noteCSS = noteCSS.replace(/^  --search-text-bg-color:.+?;/gms, '  --search-text-bg-color: hsl(var(--usp-remoods-hue), 0%, 0%);');
    noteCSS = noteCSS.replace(/^  --search-text-bd-color:.+?;/gms, '  --search-text-bd-color: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --inline-code-color:.+?;/gms, '  --inline-code-color: hsl(var(--usp-remoods-hue), 0%, 30%);');
    noteCSS = noteCSS.replace(/^  --inline-code-bg-color:.+?;/gms, '  --inline-code-bg-color: hsl(var(--usp-remoods-hue), 100%, 95%);');
    noteCSS = noteCSS.replace(/^  --inline-code-bd-color:.+?;/gms, '  --inline-code-bd-color: 2px solid hsl(var(--usp-remoods-hue), 20%, 80%);');
    noteCSS = noteCSS.replace(/^  --inline-code-symbol-color:.+?;/gms, '  --inline-code-symbol-color: hsl(var(--usp-remoods-hue), 20%, 60%);');
    noteCSS = noteCSS.replace(/^  --katex-text-color:.+?;/gms, '  --katex-text-color: hsl(var(--usp-remoods-hue), 0%, 30%);');
    noteCSS = noteCSS.replace(/^  --list-token-color:.+?;/gms, '  --list-token-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 100%, 40%);');
    noteCSS = noteCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: hsl(var(--usp-remoods-hue), 30%, 40%);');
    noteCSS = noteCSS.replace(/^  --list-span-color:.+?;/gms, '  --list-span-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --link-text-color:.+?;/gms, '  --link-text-color: hsl(var(--usp-remoods-hue), 100%, 40%);');
    noteCSS = noteCSS.replace(/^  --link-source-icon-color:.+?;/gms, '  --link-source-icon-color: hsl(var(--usp-remoods-hue), 100%, 40%);');
    noteCSS = noteCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 100%, 40%);');
    noteCSS = noteCSS.replace(/^  --fn-title-color:.+?;/gms, '  --fn-title-color: hsl(var(--usp-remoods-hue), 0%, 65%);');
    noteCSS = noteCSS.replace(/^  --fn-title-bd-color:.+?;/gms, '  --fn-title-bd-color: 3px double hsl(var(--usp-remoods-hue), 0%, 65%);');
    noteCSS = noteCSS.replace(/^  --fn-list-text-color:.+?;/gms, '  --fn-list-text-color: hsl(var(--usp-remoods-hue), 0%, 65%);');
    noteCSS = noteCSS.replace(/^  --fn-list-token-color:.+?;/gms, '  --fn-list-token-color: hsl(var(--usp-remoods-hue), 0%, 45%);');
    noteCSS = noteCSS.replace(/^  --blockquote-bd-color:.+?;/gms, '  --blockquote-bd-color: 5px dotted hsl(var(--usp-remoods-hue), 70%, 70%, 70%);');
    noteCSS = noteCSS.replace(/^  --blockquote-text-color:.+?;/gms, '  --blockquote-text-color: hsl(var(--usp-remoods-hue), 0%, 65%);');
    noteCSS = noteCSS.replace(/^  --table-text-color:.+?;/gms, '  --table-text-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --table-header-bg-color:.+?;/gms, '  --table-header-bg-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    noteCSS = noteCSS.replace(/^  --table-header-text-shadow:.+?;/gms, '  --table-header-text-shadow: 0 0 none; ');
    noteCSS = noteCSS.replace(/^  --table-row-odd-bg-color:.+?;/gms, '  --table-row-odd-bg-color: hsl(var(--usp-remoods-hue), 100%, 96%);');
    noteCSS = noteCSS.replace(/^  --table-row-even-bg-color:.+?;/gms, '  --table-row-even-bg-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    noteCSS = noteCSS.replace(/^  --table-bd-color:.+?;/gms, '  --table-bd-color: 2px solid var(--render-viewer-bg-color);');
    noteCSS = noteCSS.replace(/^  --toc-bg-color:.+?;/gms, '  --toc-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --toc-bd-color:.+?;/gms, '  --toc-bd-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    noteCSS = noteCSS.replace(/^  --toc-box-shadow:.+?;/gms, '  --toc-box-shadow: 0 0 5px hsl(var(--usp-remoods-hue), 100%, 20%);');
    noteCSS = noteCSS.replace(/^  --toc-btn-text-color:.+?;/gms, '  --toc-btn-text-color: hsl(var(--usp-remoods-hue), 20%, 40%);');
    noteCSS = noteCSS.replace(/^  --toc-btn-bg-color:.+?;/gms, '  --toc-btn-bg-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    noteCSS = noteCSS.replace(/^  --toc-btn-bd-color:.+?;/gms, '  --toc-btn-bd-color: 2px solid hsl(var(--usp-remoods-hue), 80%, 80%);');
    noteCSS = noteCSS.replace(/^  --toc-btn-box-shadow:.+?;/gms, '  --toc-btn-box-shadow: 1px 1px 3px hsl(var(--usp-remoods-hue), 100%, 20%);');
    noteCSS = noteCSS.replace(/^  --toc-list-bd-color:.+?;/gms, '  --toc-list-bd-color: 1px solid hsl(var(--usp-remoods-hue), 30%, 30%);');
    noteCSS = noteCSS.replace(/^  --toc-link-text-color-hover:.+?;/gms, '  --toc-link-text-color-hover: hsl(var(--usp-remoods-hue), 0%, 0%);');
    noteCSS = noteCSS.replace(/^  --toc-link-bg-color-hover:.+?;/gms, '  --toc-link-bg-color-hover: hsl(var(--usp-remoods-hue), 100%, 85%);');
    noteCSS = noteCSS.replace(/^  --cb-bg-color:.+?;/gms, '  --cb-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --cb-bd-color:.+?;/gms, '  --cb-bd-color: hsl(var(--usp-remoods-hue), 100%, 45%);');
    noteCSS = noteCSS.replace(/^  --cb-shadow:.+?;/gms, '  --cb-shadow: 0 0 4px hsl(var(--usp-remoods-hue), 100%, 35%);');
    noteCSS = noteCSS.replace(/^  --cb-comment-color:.+?;/gms, '  --cb-comment-color: hsl(var(--usp-remoods-hue), 0%, 80%);');
    noteCSS = noteCSS.replace(/^  --cb-comment-shadow:.+?;/gms, '  --cb-comment-shadow: hsl(var(--usp-remoods-hue), 0%, 50%);');
    noteCSS = noteCSS.replace(/^  --cb-number-color:.+?;/gms, '  --cb-number-color: hsl(calc(var(--usp-remoods-hue) + 110deg), 80%, 46%);');
    noteCSS = noteCSS.replace(/^  --cb-number-shadow:.+?;/gms, '  --cb-number-shadow: hsl(calc(var(--usp-remoods-hue) + 110deg), 80%, 16%);');
    noteCSS = noteCSS.replace(/^  --cb-string-color:.+?;/gms, '  --cb-string-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 80%, 55%);');
    noteCSS = noteCSS.replace(/^  --cb-string-shadow:.+?;/gms, '  --cb-string-shadow: hsl(calc(var(--usp-remoods-hue) + 180deg), 80%, 25%);');
    noteCSS = noteCSS.replace(/^  --cb-params-color:.+?;/gms, '  --cb-params-color: hsl(calc(var(--usp-remoods-hue) + 300deg), 80%, 50%);');
    noteCSS = noteCSS.replace(/^  --cb-params-shadow:.+?;/gms, '  --cb-params-shadow: hsl(calc(var(--usp-remoods-hue) + 300deg), 80%, 20%);');
    noteCSS = noteCSS.replace(/^  --cb-title-color:.+?;/gms, '  --cb-title-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 80%, 65%);');
    noteCSS = noteCSS.replace(/^  --cb-title-shadow:.+?;/gms, '  --cb-title-shadow: hsl(calc(var(--usp-remoods-hue) + 180deg), 80%, 35%);');
    noteCSS = noteCSS.replace(/^  --cb-selector-id-color:.+?;/gms, '  --cb-selector-id-color: hsl(calc(var(--usp-remoods-hue) + 159deg), 80%, 55%);');
    noteCSS = noteCSS.replace(/^  --cb-selector-id-shadow:.+?;/gms, '  --cb-selector-id-shadow: hsl(calc(var(--usp-remoods-hue) + 159deg), 80%, 25%);');
    noteCSS = noteCSS.replace(/^  --cb-selector-pseudo-color:.+?;/gms, '  --cb-selector-pseudo-color: hsl(calc(var(--usp-remoods-hue) + 323deg), 87%, 55%);');
    noteCSS = noteCSS.replace(/^  --cb-selector-pseudo-shadow:.+?;/gms, '  --cb-selector-pseudo-shadow: hsl(calc(var(--usp-remoods-hue) + 323deg), 87%, 25%);');
    noteCSS = noteCSS.replace(/^  --cb-selector-attr-color:.+?;/gms, '  --cb-selector-attr-color: hsl(calc(var(--usp-remoods-hue) + 300deg), 100%, 45%);');
    noteCSS = noteCSS.replace(/^  --cb-selector-attr-shadow:.+?;/gms, '  --cb-selector-attr-shadow: hsl(calc(var(--usp-remoods-hue) + 300deg), 100%, 15%);');
    noteCSS = noteCSS.replace(/^  --cb-text-color:.+?;/gms, '  --cb-text-color: hsl(var(--usp-remoods-hue), 0%, 40%);');
    noteCSS = noteCSS.replace(/^  --cb-text-shadow:.+?;/gms, '  --cb-text-shadow: hsl(var(--usp-remoods-hue), 0%, 10%);');
    noteCSS = noteCSS.replace(/^  --cb-title-class-color:.+?;/gms, '  --cb-title-class-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-title-class-shadow:.+?;/gms, '  --cb-title-class-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-function-color:.+?;/gms, '  --cb-function-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-function-shadow:.+?;/gms, '  --cb-function-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-function-title-color:.+?;/gms, '  --cb-function-title-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-function-title-shadow:.+?;/gms, '  --cb-function-title-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-function-params-color:.+?;/gms, '  --cb-function-params-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-function-params-shadow:.+?;/gms, '  --cb-function-params-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-class-title-color:.+?;/gms, '  --cb-class-title-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-class-title-shadow:.+?;/gms, '  --cb-class-title-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-operator-color:.+?;/gms, '  --cb-operator-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-operator-shadow:.+?;/gms, '  --cb-operator-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-keyword-color:.+?;/gms, '  --cb-keyword-color: hsl(var(--usp-remoods-hue), 80%, 50%);');
    noteCSS = noteCSS.replace(/^  --cb-keyword-shadow:.+?;/gms, '  --cb-keyword-shadow: hsl(var(--usp-remoods-hue), 80%, 20%);');
    noteCSS = noteCSS.replace(/^  --cb-variable-language-color:.+?;/gms, '  --cb-variable-language-color: var(--cb-keyword-color);');
    noteCSS = noteCSS.replace(/^  --cb-variable-language-shadow:.+?;/gms, '  --cb-variable-language-shadow: var(--cb-keyword-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-doctag-color:.+?;/gms, '  --cb-doctag-color: var(--cb-keyword-color);');
    noteCSS = noteCSS.replace(/^  --cb-doctag-shadow:.+?;/gms, '  --cb-doctag-shadow: var(--cb-keyword-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-title-function-color:.+?;/gms, '  --cb-title-function-color: hsl(var(--usp-remoods-hue), 40%, 70%);');
    noteCSS = noteCSS.replace(/^  --cb-title-function-shadow:.+?;/gms, '  --cb-title-function-shadow: hsl(var(--usp-remoods-hue), 40%, 40%);');
    noteCSS = noteCSS.replace(/^  --cb-property-color:.+?;/gms, '  --cb-property-color: var(--cb-title-function-color);');
    noteCSS = noteCSS.replace(/^  --cb-property-shadow:.+?;/gms, '  --cb-property-shadow: var(--cb-title-function-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-attr-color:.+?;/gms, '  --cb-attr-color: var(--cb-title-function-color);');
    noteCSS = noteCSS.replace(/^  --cb-attr-shadow:.+?;/gms, '  --cb-attr-shadow: var(--cb-title-function-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-attribute-color:.+?;/gms, '  --cb-attribute-color: var(--cb-title-function-color);');
    noteCSS = noteCSS.replace(/^  --cb-attribute-shadow:.+?;/gms, '  --cb-attribute-shadow: var(--cb-title-function-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-title-class-inherited-color:.+?;/gms, '  --cb-title-class-inherited-color: hsl(calc(var(--usp-remoods-hue) + 260deg), 80%, 55%);');
    noteCSS = noteCSS.replace(/^  --cb-title-class-inherited-shadow:.+?;/gms, '  --cb-title-class-inherited-shadow: hsl(calc(var(--usp-remoods-hue) + 260deg), 80%, 25%);');
    noteCSS = noteCSS.replace(/^  --cb-built-in-color:.+?;/gms, '  --cb-built-in-color: var(--cb-title-class-inherited-color);');
    noteCSS = noteCSS.replace(/^  --cb-built-in-shadow:.+?;/gms, '  --cb-built-in-shadow: var(--cb-title-class-inherited-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-selector-class-color:.+?;/gms, '  --cb-selector-class-color: var(--cb-title-class-inherited-color);');
    noteCSS = noteCSS.replace(/^  --cb-selector-class-shadow:.+?;/gms, '  --cb-selector-class-shadow: var(--cb-title-class-inherited-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-html-attr-color:.+?;/gms, '  --cb-html-attr-color: var(--cb-title-class-inherited-color);');
    noteCSS = noteCSS.replace(/^  --cb-html-attr-shadow:.+?;/gms, '  --cb-html-attr-shadow: var(--cb-title-class-inherited-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-type-color:.+?;/gms, '  --cb-type-color: var(--cb-title-class-inherited-color);');
    noteCSS = noteCSS.replace(/^  --cb-type-shadow:.+?;/gms, '  --cb-type-shadow: var(--cb-title-class-inherited-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-literal-color:.+?;/gms, '  --cb-literal-color: hsl(calc(var(--usp-remoods-hue) + 148deg), 80%, 45%);');
    noteCSS = noteCSS.replace(/^  --cb-literal-shadow:.+?;/gms, '  --cb-literal-shadow: hsl(calc(var(--usp-remoods-hue) + 148deg), 80%, 15%);');
    noteCSS = noteCSS.replace(/^  --cb-meta-color:.+?;/gms, '  --cb-meta-color: var(--cb-literal-color);');
    noteCSS = noteCSS.replace(/^  --cb-meta-shadow:.+?;/gms, '  --cb-meta-shadow: var(--cb-literal-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-symbol-color:.+?;/gms, '  --cb-symbol-color: var(--cb-literal-color);');
    noteCSS = noteCSS.replace(/^  --cb-symbol-shadow:.+?;/gms, '  --cb-symbol-shadow: var(--cb-literal-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-subst-color:.+?;/gms, '  --cb-subst-color: hsl(calc(var(--usp-remoods-hue) +  90deg), 80%, 55%);');
    noteCSS = noteCSS.replace(/^  --cb-subst-shadow:.+?;/gms, '  --cb-subst-shadow: hsl(calc(var(--usp-remoods-hue) +  90deg), 80%, 25%);');
    noteCSS = noteCSS.replace(/^  --cb-variable-text-color:.+?;/gms, '  --cb-variable-text-color: var(--cb-subst-color);');
    noteCSS = noteCSS.replace(/^  --cb-variable-shadow:.+?;/gms, '  --cb-variable-shadow: var(--cb-subst-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-regexp-color:.+?;/gms, '  --cb-regexp-color: var(--cb-subst-color);');
    noteCSS = noteCSS.replace(/^  --cb-regexp-shadow:.+?;/gms, '  --cb-regexp-shadow: var(--cb-subst-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-selector-tag-color:.+?;/gms, '  --cb-selector-tag-color: hsl(calc(var(--usp-remoods-hue) + 120deg), 80%, 50%);');
    noteCSS = noteCSS.replace(/^  --cb-selector-tag-shadow:.+?;/gms, '  --cb-selector-tag-shadow: hsl(calc(var(--usp-remoods-hue) + 120deg), 80%, 20%);');
    noteCSS = noteCSS.replace(/^  --cb-tag-color:.+?;/gms, '  --cb-tag-color: var(--cb-selector-tag-color);');
    noteCSS = noteCSS.replace(/^  --cb-tag-shadow:.+?;/gms, '  --cb-tag-shadow: var(--cb-selector-tag-shadow);');
    noteCSS = noteCSS.replace(/^  --ag-bg-color:.+?;/gms, '  --ag-bg-color: hsl(var(--usp-remoods-hue), 98%, 98%);');
    noteCSS = noteCSS.replace(/^  --ag-bd-color:.+?;/gms, '  --ag-bd-color: hsl(var(--usp-remoods-hue), 100%, 45%);');
    noteCSS = noteCSS.replace(/^  --ag-drop-shadow:.+?;/gms, '  --ag-drop-shadow: 0 0 2px hsl(var(--usp-remoods-hue), 100%, 35%);');
    noteCSS = noteCSS.replace(/^  --sn-text-color:.+?;/gms, '  --sn-text-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --sn-bg-color:.+?;/gms, '  --sn-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --sn-bd-color:.+?;/gms, '  --sn-bd-color: hsl(var(--usp-remoods-hue), 100%, 45%);');
    noteCSS = noteCSS.replace(/^  --sn-drop-shadow:.+?;/gms, '  --sn-drop-shadow: 0px 0px 2px hsl(var(--usp-remoods-hue), 100%, 35%);');
    noteCSS = noteCSS.replace(/^  --sn-important-text-color:.+?;/gms, '  --sn-important-text-color: hsl(40, 50%, 70%);');
    noteCSS = noteCSS.replace(/^  --sn-important-bg-color:.+?;/gms, '  --sn-important-bg-color: hsl(0, 100%, 30%);');
    noteCSS = noteCSS.replace(/^  --sn-important-bd-color:.+?;/gms, '  --sn-important-bd-color: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --sn-important-box-shadow:.+?;/gms, '  --sn-important-box-shadow: 0 0 6px hsl(0, 100%, 10%);');
    noteCSS = noteCSS.replace(/^  --sn-tags-text-color:.+?;/gms, '  --sn-tags-text-color: hsl(0, 0%, 100%);');
    noteCSS = noteCSS.replace(/^  --sn-tags-text-shadow:.+?;/gms, '  --sn-tags-text-shadow: 1px 1px 2px hsl(var(--usp-remoods-hue), 0%, 0%);');
    noteCSS = noteCSS.replace(/^  --sn-note-tag-bg-color:.+?;/gms, '  --sn-note-tag-bg-color: hsl(206, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-tip-tag-bg-color:.+?;/gms, '  --sn-tip-tag-bg-color: hsl(56, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-question-tag-bg-color:.+?;/gms, '  --sn-question-tag-bg-color: hsl(270, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-explain-tag-bg-color:.+?;/gms, '  --sn-explain-tag-bg-color: hsl(163, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-warning-tag-bg-color:.+?;/gms, '  --sn-warning-tag-bg-color: hsl(0, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-keyword-tag-bg-color:.+?;/gms, '  --sn-keyword-tag-bg-color: hsl(324, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-comment-tag-bg-color:.+?;/gms, '  --sn-comment-tag-bg-color: hsl(100, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-important-tag-text-color:.+?;/gms, '  --sn-important-tag-text-color: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --sn-important-tag-bg-color:.+?;/gms, '  --sn-important-tag-bg-color: hsl(0, 100%, 12%);');
    noteCSS = noteCSS.replace(/^  --sn-important-tag-bd-color:.+?;/gms, '  --sn-important-tag-bd-color: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --ctb-bg-color:.+?;/gms, '  --ctb-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --ctb-drop-shadow:.+?;/gms, '  --ctb-drop-shadow: 0 0 2px hsl(var(--usp-remoods-hue), 100%, 45%);');
    noteCSS = noteCSS.replace(/^  --ctb-title-color:.+?;/gms, '  --ctb-title-color: hsl(var(--usp-remoods-hue), 80%, 45%);');
    noteCSS = noteCSS.replace(/^  --ctb-symbol-bg-color:.+?;/gms, '  --ctb-symbol-bg-color: repeating-radial-gradient(circle, hsl(var(--usp-remoods-hue), 80%, 45%), hsl(var(--usp-remoods-hue), 100%, 100%) 27%);');
    noteCSS = noteCSS.replace(/^  --kp-text-color:.+?;/gms, '  --kp-text-color: hsl(var(--usp-remoods-hue), 80%, 55%);');
    noteCSS = noteCSS.replace(/^  --kp-text-shadow:.+?;/gms, '  --kp-text-shadow: 0 0 hsl(var(--usp-remoods-hue), 80%, 25%);');
    noteCSS = noteCSS.replace(/^  --kp-bd-color:.+?;/gms, '  --kp-bd-color: hsl(var(--usp-remoods-hue), 80%, 65%);');
    noteCSS = noteCSS.replace(/^  --km-text-color:.+?;/gms, '  --km-text-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --km-bg-color:.+?;/gms, '  --km-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --hm-bd-color:.+?;/gms, '  --km-bd-color: 1px solid hsl(var(--usp-remoods-hue), 60%, 60%);');
    noteCSS = noteCSS.replace(/^  --km-special-text-color:.+?;/gms, '  --km-special-text-color: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --spoiler-block-text-color:.+?;/gms, '  --spoiler-block-text-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --spoiler-block-bg-color:.+?;/gms, '  --spoiler-block-bg-color: hsl(var(--usp-remoods-hue), 100%, 98%);');
    noteCSS = noteCSS.replace(/^  --spoiler-block-box-shadow:.+?;/gms, '  --spoiler-block-box-shadow: 0 0 4px hsl(var(--usp-remoods-hue), 100%, 40%);');
    noteCSS = noteCSS.replace(/^  --spoiler-title-color:.+?;/gms, '  --spoiler-title-color: hsl(var(--usp-remoods-hue), 30%, 40%);');
    noteCSS = noteCSS.replace(/^  --spoiler-list-text-color:.+?;/gms, '  --spoiler-list-text-color: hsl(var(--usp-remoods-hue), 100%, 20%);');
    noteCSS = noteCSS.replace(/^  --spoiler-span-title-color:.+?;/gms, '  --spoiler-span-title-color: hsl(var(--usp-remoods-hue), 30%, 30%);');
    noteCSS = noteCSS.replace(/^  --spoiler-span-title-bg-color:.+?;/gms, '  --spoiler-span-title-bg-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    noteCSS = noteCSS.replace(/^  --spoiler-list-span-color:.+?;/gms, '  --spoiler-list-span-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --spoiler-ctb-text-color:.+?;/gms, '  --spoiler-ctb-text-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --spoiler-ctb-bg-color:.+?;/gms, '  --spoiler-ctb-bg-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    noteCSS = noteCSS.replace(/^  --spoiler-ctb-title-color:.+?;/gms, '  --spoiler-ctb-title-color: hsl(var(--usp-remoods-hue), 30%, 50%);');
    noteCSS = noteCSS.replace(/^  --spoiler-inline-text-color:.+?;/gms, '  --spoiler-inline-text-color: hsl(0, 0%, 90%);');
    noteCSS = noteCSS.replace(/^  --spoiler-inline-bg-color:.+?;/gms, '  --spoiler-inline-bg-color: hsl(0, 0%, 0%);');
    noteCSS = noteCSS.replace(/^  --spoiler-inline-bd-color:.+?;/gms, '  --spoiler-inline-bd-color: 1px solid hsl(var(--usp-remoods-hue), 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --spoiler-inline-symbol-color:.+?;/gms, '  --spoiler-inline-symbol-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    noteCSS = noteCSS.replace(/^  --spoiler-inline-symbol-color-hover:.+?;/gms, '  --spoiler-inline-symbol-color-hover: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --turntochart-bg-color:.+?;/gms, '  --turntochart-bg-color: none;');
    noteCSS = noteCSS.replace(/^  --turntochart-text-color:.+?;/gms, '  --turntochart-text-color: hsl(var(--usp-remoods-hue), 0%, 40%);');
    noteCSS = noteCSS.replace(/^  --turntochart-info-bg-color:.+?;/gms, '  --turntochart-info-bg-color: hsl(var(--usp-remoods-hue), 0%, 95%);');

    chromeCSS = chromeCSS.replace(/^  --usp-base-font:.+?;/gms, '  --usp-base-font: var(--usp-custom-base-font), "mulish", "montserrat", "chiron hei hk light";');
    chromeCSS = chromeCSS.replace(/^  --usp-monospace-font:.+?;/gms, '  --usp-monospace-font: var(--usp-custom-monospace-font), "cascadia mono light", "chiron hei hk light";');
    noteCSS = noteCSS.replace(/^  --usp-base-font:.+?;/gms, '  --usp-base-font: var(--usp-custom-base-font), "mulish", "montserrat", "chiron hei hk light";');
    noteCSS = noteCSS.replace(/^  --usp-monospace-font:.+?;/gms, '  --usp-monospace-font: var(--usp-custom-monospace-font), "cascadia mono light", "chiron hei hk light";');

    if(!darkerEditorBackground) {
      chromeCSS = chromeCSS.replace(/^  --code-mirror-bg-color:.+?;/gms, '  --code-mirror-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
      chromeCSS = chromeCSS.replace(/^  --code-block-bg-color:.+?;/gms, '  --code-block-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
      noteCSS = noteCSS.replace(/^  --render-viewer-bg-color:.+?;/gms, '  --render-viewer-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
      noteCSS = noteCSS.replace(/^  --render-viewer-bg-color-2:.+?;/gms, '  --render-viewer-bg-color-2: hsl(var(--usp-remoods-hue), 0%, 100%);');
    } else {
      chromeCSS = chromeCSS.replace(/^  --code-mirror-bg-color:.+?;/gms, '  --code-mirror-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
      chromeCSS = chromeCSS.replace(/^  --code-block-bg-color:.+?;/gms, '  --code-block-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
      noteCSS = noteCSS.replace(/^  --render-viewer-bg-color:.+?;/gms, '  --render-viewer-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
      noteCSS = noteCSS.replace(/^  --render-viewer-bg-color-2:.+?;/gms, '  --render-viewer-bg-color-2: hsl(var(--usp-remoods-hue), 0%, 100%);');
    }

    if(!emphasizeAddRemove && !emphasizeAddRemoveBg) {
      chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 25%, 50%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue), 25%, 75%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue), 25%, 75%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 25%, 50%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue), 25%, 75%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue), 25%, 75%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --print-insert-text-color:.+?;/gms, '  --print-insert-text-color: hsl(var(--usp-remoods-hue), 100%, 40%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bd-color:.+?;/gms, '  --print-insert-text-bd-color: hsl(var(--usp-remoods-hue), 25%, 50%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bg-color:.+?;/gms, '  --print-insert-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-color:.+?;/gms, '  --print-strikethrough-text-color: hsl(var(--usp-remoods-hue), 25%, 50%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-bg-color:.+?;/gms, '  --print-strikethrough-text-bg-color: none;');
      
    } else if(!emphasizeAddRemove && emphasizeAddRemoveBg) {
      chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 25%, 35%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue), 25%, 35%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: hsl(var(--usp-remoods-hue), 100%, 82%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue), 25%, 55%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
      noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 25%, 35%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue), 25%, 35%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: hsl(var(--usp-remoods-hue), 100%, 82%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: hsl(var(--usp-remoods-hue), 30%, 20%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-color:.+?;/gms, '  --print-insert-text-color: hsl(var(--usp-remoods-hue), 100%, 40%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bd-color:.+?;/gms, '  --print-insert-text-bd-color: hsl(var(--usp-remoods-hue), 25%, 50%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bg-color:.+?;/gms, '  --print-insert-text-bg-color: hsl(var(--usp-remoods-hue), 40%, 95%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-color:.+?;/gms, '  --print-strikethrough-text-color: hsl(var(--usp-remoods-hue), 25%, 50%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-bg-color:.+?;/gms, '  --print-strikethrough-text-bg-color: hsl(var(--usp-remoods-hue), 25%, 85%);');
      
    } else if(emphasizeAddRemove && !emphasizeAddRemoveBg) {
      chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(100, 100%, 30%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(100, 100%, 30%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(0, 100%, 70%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(100, 100%,  30%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(100, 100%, 30%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(0, 100%, 70%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --print-insert-text-color:.+?;/gms, '  --print-insert-text-color: hsl(100,  40%, 45%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bd-color:.+?;/gms, '  --print-insert-text-bd-color: hsl(100,  70%, 35%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bg-color:.+?;/gms, '  --print-insert-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-color:.+?;/gms, '  --print-strikethrough-text-color: hsl(0, 100%, 65%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-bg-color:.+?;/gms, '  --print-strikethrough-text-bg-color: none;');
      
    } else {
      chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(100, 100%, 30%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(100, 100%, 30%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: hsl(100, 100%, 90%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(0, 100%, 70%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: hsl(0, 100%, 90%);');
      noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(100, 100%, 30%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(100, 100%, 30%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: hsl(100, 100%, 90%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(0, 100%, 70%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: hsl(0, 100%, 90%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-color:.+?;/gms, '  --print-insert-text-color: hsl(100,  40%, 45%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bd-color:.+?;/gms, '  --print-insert-text-bd-color: hsl(100, 70%, 35%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bg-color:.+?;/gms, '  --print-insert-text-bg-color: hsl(100, 35%, 95%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-color:.+?;/gms, '  --print-strikethrough-text-color: hsl(0, 100%, 65%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-bg-color:.+?;/gms, '  --print-strikethrough-text-bg-color: hsl(0, 35%, 90%);');
    }
    
    if(!themeColorListText) {
      chromeCSS = chromeCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: var(--code-mirror-text-color);');
      chromeCSS = chromeCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(var(--usp-remoods-hue), 100%, 40%);');
      chromeCSS = chromeCSS.replace(/^  --eh-footnote-ref-color:.+?;/gms, '  --eh-footnote-ref-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
      noteCSS = noteCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: var(--render-viewer-text-color);');
      noteCSS = noteCSS.replace(/^  --list-span-color:.+?;/gms, '  --list-span-color: hsl(var(--usp-remoods-hue), 30%, 40%);');
      noteCSS = noteCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(var(--usp-remoods-hue), 100%, 40%);');
    } else {
      chromeCSS = chromeCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: hsl(var(--usp-remoods-hue), 30%, 40%);');
      chromeCSS = chromeCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 100%, 40%);');
      chromeCSS = chromeCSS.replace(/^  --eh-footnote-ref-color:.+?;/gms, '  --eh-footnote-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 0%, 100%);');
      noteCSS = noteCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: hsl(var(--usp-remoods-hue), 30%, 40%);');
      noteCSS = noteCSS.replace(/^  --list-span-color:.+?;/gms, '  --list-span-color: var(--render-viewer-text-color);');
      noteCSS = noteCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 100%, 40%);');
    }

    if(!h1TwillPattern) {
      noteCSS = noteCSS.replace(/^  --usp-h1-text-fill-color:.+?;/gms, '  --usp-h1-text-fill-color: none;');
      noteCSS = noteCSS.replace(/^  --usp-h1-font-weight:.+?;/gms, '  --usp-h1-font-weight: 600;');
      noteCSS = noteCSS.replace(/^  --h1-bd-color:.+?;/gms, '  --h1-bd-color: linear-gradient(to right, hsl(var(--usp-remoods-hue), 60%, 60%) 50%, transparent);');
    } else {
      noteCSS = noteCSS.replace(/^  --usp-h1-text-fill-color:.+?;/gms, '  --usp-h1-text-fill-color: transparent;');
      noteCSS = noteCSS.replace(/^  --usp-h1-font-weight:.+?;/gms, '  --usp-h1-font-weight: 800;');
      noteCSS = noteCSS.replace(/^  --h1-bd-color:.+?;/gms, '  --h1-bd-color: var(--h1-bg-color);');
    }

    if(!hrTwillPattern) {
      noteCSS = noteCSS.replace(/^  --horizontal-line-bg:.+?;/gms, '  --horizontal-line-bg: hsl(var(--usp-remoods-hue), 100%, 45%);');
      noteCSS = noteCSS.replace(/^  --horizontal-line-bgi:.+?;/gms, '  --horizontal-line-bgi: none;');
    } else {
      noteCSS = noteCSS.replace(/^  --horizontal-line-bg:.+?;/gms, '  --horizontal-line-bg: none;');
      noteCSS = noteCSS.replace(/^  --horizontal-line-bgi:.+?;/gms, '  --horizontal-line-bgi: repeating-linear-gradient(114deg, hsl(var(--usp-remoods-hue), 100%, 30%), hsl(var(--usp-remoods-hue), 100%, 75%, 50%), hsl(var(--usp-remoods-hue), 100%, 30%) 3px);');
    }

    if(!dottedBlockquote) {
      noteCSS = noteCSS.replace(/^  --blockquote-bd-color:.+?;/gms, '  --blockquote-bd-color: 3px solid hsl(var(--usp-remoods-hue),  50%,  85%);');
      noteCSS = noteCSS.replace(/^  --print-blockquote-bd-color:.+?;/gms, '  --print-blockquote-bd-color: 2px solid hsl(var(--usp-remoods-hue),  20%,  60%);');
    } else {
      noteCSS = noteCSS.replace(/^  --blockquote-bd-color:.+?;/gms, '  --blockquote-bd-color: 5px dotted hsl(var(--usp-remoods-hue),  50%,  85%);');
      noteCSS = noteCSS.replace(/^  --print-blockquote-bd-color:.+?;/gms, '  --print-blockquote-bd-color: 4px dotted hsl(var(--usp-remoods-hue),  20%,  60%);');
    }

    if(!mermaidEyeProtector) {
      noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-filter:.+?;/gms, '  --usp-mermaid-eye-protector-filter: none;');
      noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-transition:.+?;/gms, '  --usp-mermaid-eye-protector-transition: none;');
    } else {
      noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-filter:.+?;/gms, '  --usp-mermaid-eye-protector-filter: none;');
      noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-transition:.+?;/gms, '  --usp-mermaid-eye-protector-transition: none;');
    }
  
    if(!imageEyeProtector) {
      noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-filter:.+?;/gms, '  --usp-image-eye-protector-filter: none;');
      noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-transition:.+?;/gms, '  --usp-image-eye-protector-transition: none;');
    } else {
      noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-filter:.+?;/gms, '  --usp-image-eye-protector-filter: none;');
      noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-transition:.+?;/gms, '  --usp-image-eye-protector-transition: none;');
    }

    break;

  case 'duskMode':

    chromeCSS = chromeCSS.replace(/^  --code-mirror-bg-color:.+?;/gms, '  --code-mirror-bg-color: hsl(var(--usp-remoods-hue), 8%, 27%);');
    chromeCSS = chromeCSS.replace(/^  --code-mirror-text-color:.+?;/gms, '  --code-mirror-text-color: hsl(var(--usp-remoods-hue), 0%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --code-mirror-scrollbar-track-bg-color:.+?;/gms, '  --code-mirror-scrollbar-track-bg-color: hsl(var(--usp-remoods-hue), 70%, 70%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --code-mirror-scrollbar-thumb-bg-color:.+?;/gms, '  --code-mirror-scrollbar-thumb-bg-color: linear-gradient(to bottom, hsl(var(--usp-remoods-hue), 100%, 70%) 3px, hsl(var(--usp-remoods-hue), 10%, 28%) 4px, hsl(var(--usp-remoods-hue), 10%, 28%) calc(100% - 4px), hsl(var(--usp-remoods-hue), 100%, 70%) calc(100% - 3px));');
    chromeCSS = chromeCSS.replace(/^  --code-mirror-scrollbar-thumb-bd-color:.+?;/gms, '  --code-mirror-scrollbar-thumb-bd-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --horizontal-line-syntax-color:.+?;/gms, '  --horizontal-line-syntax-color: hsl(var(--usp-remoods-hue), 0%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --horizontal-line-bg-color:.+?;/gms, '  --horizontal-line-bg-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --cursor-bd-color:.+?;/gms, '  --cursor-bd-color: 2px solid hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --selected-text-color:.+?;/gms, '  --selected-text-color: var(--render-viewer-text-color);');
    chromeCSS = chromeCSS.replace(/^  --selected-text-bg-color:.+?;/gms, '  --selected-text-bg-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 20%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --codeblock-selected-text-bg-color:.+?;/gms, '  --code-block-selected-text-bg-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 20%, 30%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --h1-text-color:.+?;/gms, '  --h1-text-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --h2-text-color:.+?;/gms, '  --h2-text-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --h3-text-color:.+?;/gms, '  --h3-text-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --h4-text-color:.+?;/gms, '  --h4-text-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --h5-text-color:.+?;/gms, '  --h5-text-color: hsl(var(--usp-remoods-hue), 30%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --h6-text-color:.+?;/gms, '  --h6-text-color: hsl(var(--usp-remoods-hue), 30%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --blockquote-text-color:.+?;/gms, '  --blockquote-text-color: hsl(var(--usp-remoods-hue), 30%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --list-token-color:.+?;/gms, '  --list-token-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 80%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: hsl(var(--usp-remoods-hue), 30%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --checkbox-color:.+?;/gms, '  --checkbox-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --link-text-color:.+?;/gms, '  --link-text-color: hsl(var(--usp-remoods-hue), 80%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 100%, 85%);');
    chromeCSS = chromeCSS.replace(/^  --special-text-color:.+?;/gms, '  --special-text-color: hsl(var(--usp-remoods-hue), 100%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --special-bg-color:.+?;/gms, '  --special-bg-color: hsl(var(--usp-remoods-hue), 30%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --mark-text-bd-color:.+?;/gms, '  --mark-text-bd-color: hsl(var(--usp-remoods-hue), 100%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue), 25%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
    chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
    chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue), 25%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --sub-sup-text-color:.+?;/gms, '  --sub-sup-text-color: hsl(var(--usp-remoods-hue), 50%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --inline-code-color:.+?;/gms, '  --inline-code-color: hsl(var(--usp-remoods-hue), 100%, 85%);');
    chromeCSS = chromeCSS.replace(/^  --inline-code-bd-color:.+?;/gms, '  --inline-code-bd-color: 2px solid hsl(var(--usp-remoods-hue), 20%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --inline-code-bg-color:.+?;/gms, '  --inline-code-bg-color: hsl(var(--usp-remoods-hue), 30%, 25%);');
    chromeCSS = chromeCSS.replace(/^  --html-tag-text-color:.+?;/gms, '  --html-tag-text-color: hsl(0, 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --html-tag-text-shadow:.+?;/gms, '  --html-tag-text-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --html-attribute-text-color:.+?;/gms, '  --html-attribute-text-color: hsl(145, 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --html-attribute-text-shadow:.+?;/gms, '  --html-attribute-text-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --html-string-text-color:.+?;/gms, '  --html-string-text-color: hsl(300, 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --html-string-text-shadow:.+?;/gms, '  --html-string-text-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-bg-color:.+?;/gms, '  --code-block-bg-color: hsl(var(--usp-remoods-hue), 8%, 17%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-bd-width:.+?;/gms, '  --code-block-bd-width: 0 3px;');
    chromeCSS = chromeCSS.replace(/^  --code-block-bd-color:.+?;/gms, '  --code-block-bd-color: hsl(var(--usp-remoods-hue), 40%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-comment-color:.+?;/gms, '  --code-block-comment-color: hsl(var(--usp-remoods-hue), 0%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-comment-shadow:.+?;/gms, '  --code-block-comment-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-number-color:.+?;/gms, '  --code-block-number-color: hsl(calc(var(--usp-remoods-hue) + 110deg), 100%, 66%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-number-shadow:.+?;/gms, '  --code-block-number-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-string-color:.+?;/gms, '  --code-block-string-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 100%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-string-shadow:.+?;/gms, '  --code-block-string-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-3-color:.+?;/gms, '  --code-block-variable-3-color: hsl(calc(var(--usp-remoods-hue) + 323deg), 100%, 85%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-3-shadow:.+?;/gms, '  --code-block-variable-3-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-attribute-color:.+?;/gms, '  --code-block-attribute-color: hsl(calc(var(--usp-remoods-hue) + 240deg), 100%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-attribute-shadow:.+?;/gms, '  --code-block-attribute-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-error-color:.+?;/gms, '  --code-block-error-color: hsl(0, 100%, 65%);');
    chromeCSS = chromeCSS.replace(/^  --code-block--error-shadow:.+?;/gms, '  --code-block-error-bd-color: 2px dotted hsl(0, 100%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-invalidchar-color:.+?;/gms, '  --code-block-invalidchar-color: hsl(0, 100%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-invalidchar-shadow:.+?;/gms, '  --code-block-invalidchar-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-color:.+?;/gms, '  --code-block-variable-color: hsl(var(--usp-remoods-hue), 0%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-shadow:.+?;/gms, '  --code-block-variable-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-2-color:.+?;/gms, '  --code-block-variable-2-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-2-shadow:.+?;/gms, '  --code-block-variable-2-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-def-color:.+?;/gms, '  --code-block-def-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-def-shadow:.+?;/gms, '  --code-block-def-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-undefined-color:.+?;/gms, '  --code-block-undefined-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-undefined-shadow:.+?;/gms, '  --code-block-undefined-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-operator-color:.+?;/gms, '  --code-block-operator-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-operator-shadow:.+?;/gms, '  --code-block-operator-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-null-color:.+?;/gms, '  --code-block-null-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-null-shadow:.+?;/gms, '  --code-block-null-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-matching-bracket-color:.+?;/gms, '  --code-block-matching-bracket-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-matching-bracket-shadow:.+?;/gms, '  --code-block-matching-bracket-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-keyword-color:.+?;/gms, '  --code-block-keyword-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-keyword-shadow:.+?;/gms, '  --code-block-keyword-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-property-color:.+?;/gms, '  --code-block-property-color: hsl(var(--usp-remoods-hue), 100%, 85%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-property-shadow:.+?;/gms, '  --code-block-property-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-qualifier-color:.+?;/gms, '  --code-block-qualifier-color: hsl(calc(var(--usp-remoods-hue) + 260deg), 100%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-qualifier-shadow:.+?;/gms, '  --code-block-qualifier-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-type-color:.+?;/gms, '  --code-block-type-color: var(--code-block-qualifier-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-type-shadow:.+?;/gms, '  --code-block-type-shadow: var(--code-block-qualifier-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-builtin-color:.+?;/gms, '  --code-block-builtin-color: var(--code-block-qualifier-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-builtin-shadow:.+?;/gms, '  --code-block-builtin-shadow: var(--code-block-qualifier-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-atom-color:.+?;/gms, '  --code-block-atom-color: hsl(calc(var(--usp-remoods-hue) + 148deg), 100%, 65%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-atom-shadow:.+?;/gms, '  --code-block-atom-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-meta-color:.+?;/gms, '  --code-block-meta-color: var(--code-block-atom-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-meta-shadow:.+?;/gms, '  --code-block-meta-shadow: var(--code-block-atom-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-string-2-color:.+?;/gms, '  --code-block-string-2-color: hsl(calc(var(--usp-remoods-hue) + 90deg), 100%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-string-2-shadow:.+?;/gms, '  --code-block-string-2-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-tag-color:.+?;/gms, '  --code-block-tag-color: hsl(calc(var(--usp-remoods-hue) + 120deg), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-tag-shadow:.+?;/gms, '  --code-block-tag-shadow: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-table-text-color:.+?;/gms, '  --mtc-table-text-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-table-vertical-bar-color:.+?;/gms, '  --mtc-table-vertical-bar-color: hsl(var(--usp-remoods-hue), 0%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-separate-bg-color:.+?;/gms, '  --mtc-separate-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%, 10%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-separate-head-text-color:.+?;/gms, '  --mtc-separate-head-text-color: hsl(var(--usp-remoods-hue), 40%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-1:.+?;/gms, '  --mtc-column-mark-color-1: hsl(0, 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-1:.+?;/gms, '  --mtc-column-mark-shadow-1: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-2:.+?;/gms, '  --mtc-column-mark-color-2: hsl(240, 70%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-2:.+?;/gms, '  --mtc-column-mark-shadow-2: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-3:.+?;/gms, '  --mtc-column-mark-color-3: hsl(160, 80%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-3:.+?;/gms, '  --mtc-column-mark-shadow-3: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-4:.+?;/gms, '  --mtc-column-mark-color-4: hsl(40, 90%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-4:.+?;/gms, '  --mtc-column-mark-shadow-4: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-5:.+?;/gms, '  --mtc-column-mark-color-5: hsl(60, 60%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-5:.+?;/gms, '  --mtc-column-mark-shadow-5: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-6:.+?;/gms, '  --mtc-column-mark-color-6: hsl(190, 80%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-6:.+?;/gms, '  --mtc-column-mark-shadow-6: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-7:.+?;/gms, '  --mtc-column-mark-color-7: hsl(100, 70%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-7:.+?;/gms, '  --mtc-column-mark-shadow-7: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-8:.+?;/gms, '  --mtc-column-mark-color-8: hsl(210,100%, 55%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-8:.+?;/gms, '  --mtc-column-mark-shadow-8: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-9:.+?;/gms, '  --mtc-column-mark-color-9: hsl(270, 100%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-9:.+?;/gms, '  --mtc-column-mark-shadow-9: 0 0 none; ');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-10:.+?;/gms, '  --mtc-column-mark-color-10: hsl(310, 70%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-10:.+?;/gms, '  --mtc-column-mark-shadow-10: 0 0 none;');
    chromeCSS = chromeCSS.replace(/^  --eh-footnote-ref-color:.+?;/gms, '  --eh-footnote-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 100%, 10%);');
    chromeCSS = chromeCSS.replace(/^  --g-main-bg-color-1:.+?;/gms, '  --g-main-bg-color-1: hsl(var(--usp-remoods-hue), 11%, 13%);');
    chromeCSS = chromeCSS.replace(/^  --g-panel-header-bg-color:.+?;/gms, '  --g-panel-header-bg-color: hsl(var(--usp-remoods-hue), 80%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --g-panel-header-text-color:.+?;/gms, '  --g-panel-header-text-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
    chromeCSS = chromeCSS.replace(/^  --g-panel-header-text-shadow:.+?;/gms, '  --g-panel-header-text-shadow: 0 0 3px hsl(var(--usp-remoods-hue), 100%, 10%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-bg-color-hover:.+?;/gms, '  --g-item-bg-color-hover: hsl(var(--usp-remoods-hue), 30%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-bg-color-selected:.+?;/gms, '  --g-item-bg-color-selected: hsl(var(--usp-remoods-hue), 40%, 35%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-shadow-hover:.+?;/gms, '  --g-item-shadow-hover: hsl(var(--usp-remoods-hue), 100%, 35%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-divider-color:.+?;/gms, '  --g-item-divider-color: hsl(var(--usp-remoods-hue), 20%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-text-color:.+?;/gms, '  --g-item-text-color: hsl(var(--usp-remoods-hue), 100%, 98%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-text-color-2:.+?;/gms, '  --g-item-text-color-2: hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-bg-color:.+?;/gms, '  --g-lighter-square-btn-bg-color: none;');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-bg-color-hover:.+?;/gms, '  --g-lighter-square-btn-bg-color-hover: hsl(var(--usp-remoods-hue), 20%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-bd-color:.+?;/gms, '  --g-lighter-square-btn-bd-color: transparent;');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-bd-color-hover:.+?;/gms, '  --g-lighter-square-btn-bd-color-hover: hsl(var(--usp-remoods-hue), 100%, 25%);');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-icon-color:.+?;/gms, '  --g-lighter-square-btn-icon-color: hsl(var(--usp-remoods-hue), 100%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-icon-color-hover:.+?;/gms, '  --g-lighter-square-btn-icon-color-hover: hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-bg-color:.+?;/gms, '  --g-darker-square-btn-bg-color: none;');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-bg-color-hover:.+?;/gms, '  --g-darker-square-btn-bg-color-hover: hsl(var(--usp-remoods-hue), 20%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-bd-color:.+?;/gms, '  --g-darker-square-btn-bd-color: transparent;');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-bd-color-hover:.+?;/gms, '  --g-darker-square-btn-bd-color-hover: hsl(var(--usp-remoods-hue), 100%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-icon-color:.+?;/gms, '  --g-darker-square-btn-icon-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-icon-color-hover:.+?;/gms, '  --g-darker-square-btn-icon-color-hover: hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --g-scrollbar-thumb-bg-color-1:.+?;/gms, '  --g-scrollbar-thumb-bg-color-1: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --g-scrollbar-track-bg-color-1:.+?;/gms, '  --g-scrollbar-track-bg-color-1: hsl(var(--usp-remoods-hue), 20%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-input-text-color-1:.+?;/gms, '  --g-input-text-color-1: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --g-input-bg-color-1:.+?;/gms, '  --g-input-bg-color-1: hsl(var(--usp-remoods-hue), 11%, 13%);');
    chromeCSS = chromeCSS.replace(/^  --g-input-bd-color-1:.+?;/gms, '  --g-input-bd-color-1: hsl(var(--usp-remoods-hue), 50%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --g-toolbar-bg-color:.+?;/gms, '  --g-toolbar-bg-color: hsl(var(--usp-remoods-hue), 11%, 13%);');
    chromeCSS = chromeCSS.replace(/^  --g-toolbar-bd-color:.+?;/gms, '  --g-toolbar-bd-color: hsl(var(--usp-remoods-hue), 70%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --g-editor-panel-divider-color:.+?;/gms, '  --g-editor-panel-divider-color:  hsl(var(--usp-remoods-hue), 30%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --g-option-main-bg-color:.+?;/gms, '  --g-option-main-bg-color: hsl(var(--usp-remoods-hue), 8%, 27%);');
    chromeCSS = chromeCSS.replace(/^  --s-directory-icon-open-color:.+?;/gms, '  --s-directory-icon-open-color: hsl(var(--usp-remoods-hue), 20%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-directory-icon-open-shadow:.+?;/gms, '  --s-directory-icon-open-shadow: hsl(var(--usp-remoods-hue), 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-directory-icon-close-color:.+?;/gms, '  --s-directory-icon-close-color: hsl(var(--usp-remoods-hue), 100%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --s-directory-icon-close-shadow:.+?;/gms, '  --s-directory-icon-close-shadow: hsl(var(--usp-remoods-hue), 100%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --s-note-count-label-text-color:.+?;/gms, '  --s-note-count-label-text-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
    chromeCSS = chromeCSS.replace(/^  --s-note-count-label-bg-color:.+?;/gms, '  --s-note-count-label-bg-color: hsl(var(--usp-remoods-hue), 40%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-note-count-label-bd-color:.+?;/gms, '  --s-note-count-label-bd-color: hsl(var(--usp-remoods-hue), 50%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-note-count-label-shadow:.+?;/gms, '  --s-note-count-label-shadow: hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-info-text-color:.+?;/gms, '  --s-sync-info-text-color: hsl(var(--usp-remoods-hue), 100%, 95%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-info-symbol-color:.+?;/gms, '  --s-sync-info-symbol-color: radial-gradient(hsl(var(--usp-remoods-hue), 100%, 80%) 25%, hsl(var(--usp-remoods-hue), 100%, 50%) 55%, hsl(var(--usp-remoods-hue), 100%, 80%) 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-bg-color:.+?;/gms, '  --s-sync-btn-bg-color: transparent;');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-bd-color:.+?;/gms, '  --s-sync-btn-bd-color: hsl(var(--usp-remoods-hue), 20%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-bg-color-hover:.+?;/gms, '  --s-sync-btn-bg-color-hover: hsl(var(--usp-remoods-hue), 30%, 10%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-bd-color-hover:.+?;/gms, '  --s-sync-btn-bd-color-hover: hsl(var(--usp-remoods-hue), 100%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-text-color:.+?;/gms, '  --s-sync-btn-text-color: hsl(var(--usp-remoods-hue), 0%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-text-color-hover:.+?;/gms, '  --s-sync-btn-text-color-hover: hsl(var(--usp-remoods-hue), 20%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-icon-text-shadow:.+?;/gms, '  --s-sync-btn-icon-text-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-icon-text-shadow-hover:.+?;/gms, '  --s-sync-btn-icon-text-shadow-hover: hsl(var(--usp-remoods-hue), 20%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-todo-text-color:.+?;/gms, '  --s-todo-text-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-notelist-search-btn-color:.+?;/gms, '  --s-notelist-search-btn-color: hsl(var(--usp-remoods-hue), 0%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-notelist-search-btn-color-hover:.+?;/gms, '  --s-notelist-search-btn-color-hover: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-nav-btn-bg-color:.+?;/gms, '  --s-notebook-nav-btn-bg-color: hsl(var(--usp-remoods-hue), 30%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-nav-btn-bd-color:.+?;/gms, '  --s-notebook-nav-btn-bd-color: hsl(var(--usp-remoods-hue), 100%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-nav-btn-shadow:.+?;/gms, '  --s-notebook-nav-btn-shadow: hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-nav-btn-text-color:.+?;/gms, '  --s-notebook-nav-btn-text-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-batch-menu-btn-text-color:.+?;/gms, '  --s-batch-menu-btn-text-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-batch-menu-btn-bg-color:.+?;/gms, '  --s-batch-menu-btn-bg-color: hsl(var(--usp-remoods-hue), 50%, 10%);');
    chromeCSS = chromeCSS.replace(/^  --s-batch-menu-btn-bd-color:.+?;/gms, '  --s-batch-menu-btn-bd-color: hsl(var(--usp-remoods-hue), 100%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-update-time-label-bg-color:.+?;/gms, '  --s-update-time-label-bg-color: hsl(var(--usp-remoods-hue), 100%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-update-time-label-text-color:.+?;/gms, '  --s-update-time-label-text-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-tagbar-tag-text-color:.+?;/gms, '  --s-tagbar-tag-text-color: hsl(var(--usp-remoods-hue),  20%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-tagbar-tag-text-color-hover:.+?;/gms, '  --s-tagbar-tag-text-color-hover: hsl(var(--usp-remoods-hue), 20%, 95%);');
    chromeCSS = chromeCSS.replace(/^  --s-tagbar-tag-text-shadow-hover:.+?;/gms, '  --s-tagbar-tag-text-shadow-hover: hsl(var(--usp-remoods-hue), 100%, 25%);');
    chromeCSS = chromeCSS.replace(/^  --s-tagbar-tag-divider-color:.+?;/gms, '  --s-tagbar-tag-divider-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-tagbar-hint-text-color:.+?;/gms, '  --s-tagbar-hint-text-color: hsl(var(--usp-remoods-hue), 40%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-bg-color:.+?;/gms, '  --s-modal-dialog-bg-color: hsl(var(--usp-remoods-hue), 11%, 13%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-label-color:.+?;/gms, '  --s-modal-dialog-label-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-title-text-color:.+?;/gms, '  --s-modal-dialog-title-text-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-confirm-btn-text-color:.+?;/gms, '  --s-modal-dialog-confirm-btn-text-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-confirm-btn-bg-color:.+?;/gms, '  --s-modal-dialog-confirm-btn-bg-color: hsl(var(--usp-remoods-hue), 40%, 15%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-confirm-btn-bd-color:.+?;/gms, '  --s-modal-dialog-confirm-btn-bd-color: hsl(var(--usp-remoods-hue), 100%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-creator-icon-select-btn-bg-color:.+?;/gms, '  --s-notebook-creator-icon-select-btn-bg-color: hsl(var(--usp-remoods-hue), 50%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-creator-icon-select-btn-bd-color:.+?;/gms, '  --s-notebook-creator-icon-select-btn-bd-color: hsl(var(--usp-remoods-hue), 100%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-creator-icon-select-btn-text-color:.+?;/gms, '  --s-notebook-creator-icon-select-btn-text-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-tag-selector-bg-color:.+?;/gms, '  --s-tag-selector-bg-color: hsl(var(--usp-remoods-hue), 50%, 10%);');
    chromeCSS = chromeCSS.replace(/^  --s-tag-selector-bd-color:.+?;/gms, '  --s-tag-selector-bd-color: hsl(var(--usp-remoods-hue), 100%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-tag-selector-input-text-color:.+?;/gms, '  --s-tag-selector-input-text-color: hsl(var(--usp-remoods-hue), 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-tag-selector-divider-color:.+?;/gms, '  --s-tag-selector-divider-color: hsl(var(--usp-remoods-hue), 100%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-tag-selector-text-color:.+?;/gms, '  --s-tag-selector-text-color: hsl(var(--usp-remoods-hue), 20%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-command-palette-item-bg-color:.+?;/gms, '  --s-command-palette-item-bg-color: hsl(var(--usp-remoods-hue), 11%, 13%);');
    chromeCSS = chromeCSS.replace(/^  --s-command-palette-item-bg-color-selected:.+?;/gms, '  --s-command-palette-item-bg-color-selected: hsl(var(--usp-remoods-hue), 30%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-command-palette-item-bd-color:.+?;/gms, '  --s-command-palette-item-bd-color: hsl(var(--usp-remoods-hue), 30%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-command-palette-item-text-color:.+?;/gms, '  --s-command-palette-item-text-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-guide-text-color:.+?;/gms, '  --s-option-guide-text-color: hsl(var(--usp-remoods-hue), 30%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-guide-bg-color:.+?;/gms, '  --s-option-guide-bg-color: hsl(var(--usp-remoods-hue), 17%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-label-text-color:.+?;/gms, '  --s-option-label-text-color: hsl(var(--usp-remoods-hue), 20%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-op-input-color:.+?;/gms, '  --s-op-input-color: hsl(var(--usp-remoods-hue), 20%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-btn-bg-color:.+?;/gms, '  --s-option-btn-bg-color: hsl(var(--usp-remoods-hue), 30%, 25%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-btn-bd-color:.+?;/gms, '  --s-option-btn-bd-color: hsl(var(--usp-remoods-hue), 40%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-btn-text-color:.+?;/gms, '  --s-option-btn-text-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-description-text-color:.+?;/gms, '  --s-option-description-text-color: hsl(var(--usp-remoods-hue), 20%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-table-text-color:.+?;/gms, '  --s-option-table-text-color: hsl(var(--usp-remoods-hue), 40%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-plugin-card-bd-color:.+?;/gms, '  --s-plugin-card-bd-color: hsl(var(--usp-remoods-hue), 30%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-plugin-card-shadow:.+?;/gms, '  --s-plugin-card-shadow: hsl(var(--usp-remoods-hue), 100%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-plugin-card-text-color:.+?;/gms, '  --s-plugin-card-text-color: hsl(var(--usp-remoods-hue), 20%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-plugin-card-switcher-bg-color:.+?;/gms, '  --s-plugin-card-switcher-bg-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-confirm-btn-bg-color:.+?;/gms, '  --s-option-confirm-btn-bg-color: hsl(var(--usp-remoods-hue), 50%, 10%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-confirm-btn-bd-color:.+?;/gms, '  --s-option-confirm-btn-bd-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-confirm-btn-shadow:.+?;/gms, '  --s-option-confirm-btn-shadow: hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-confirm-btn-text-color:.+?;/gms, '  --s-option-confirm-btn-text-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    noteCSS = noteCSS.replace(/^  --render-viewer-bg-color:.+?;/gms, '  --render-viewer-bg-color: hsl(var(--usp-remoods-hue), 8%, 27%);');
    noteCSS = noteCSS.replace(/^  --render-viewer-bg-color-2:.+?;/gms, '  --render-viewer-bg-color-2: hsl(var(--usp-remoods-hue), 8%, 17%);');
    noteCSS = noteCSS.replace(/^  --render-viewer-text-color:.+?;/gms, '  --render-viewer-text-color: hsl(var(--usp-remoods-hue), 0%, 90%);');
    noteCSS = noteCSS.replace(/^  --horizontal-line-bg:.+?;/gms, '  --horizontal-line-bg: none;');
    noteCSS = noteCSS.replace(/^  --horizontal-line-bgi:.+?;/gms, '  --horizontal-line-bgi: repeating-linear-gradient(114deg, hsl(var(--usp-remoods-hue), 100%, 80%), hsl(var(--usp-remoods-hue), 100%, 35%, 50%), hsl(var(--usp-remoods-hue), 100%, 80%) 3px);');
    noteCSS = noteCSS.replace(/^  --render-viewer-scrollbar-thumb-bg-color:.+?;/gms, '  --render-viewer-scrollbar-thumb-bg-color: hsl(var(--usp-remoods-hue), 100%, 75%);');
    noteCSS = noteCSS.replace(/^  --bc-scrollbar-thumb-bd-color:.+?;/gms, '  --bc-scrollbar-thumb-bd-color: transparent;');
    noteCSS = noteCSS.replace(/^  --bc-scrollbar-thumb-bg-color:.+?;/gms, '  --bc-scrollbar-thumb-bg-color: radial-gradient(hsl(var(--usp-remoods-hue), 30%, 60%) 30%, hsl(var(--usp-remoods-hue), 40%, 70%) 70%);');
    noteCSS = noteCSS.replace(/^  --bc-scrollbar-thumb-bg-color-hover:.+?;/gms, '  --bc-scrollbar-thumb-bg-color-hover: radial-gradient(hsl(var(--usp-remoods-hue), 50%, 60%) 30%, hsl(var(--usp-remoods-hue), 60%, 70%) 70%);');
    noteCSS = noteCSS.replace(/^  --heading-ref-text-color:.+?;/gms, '  --heading-ref-text-color: hsl(0, 0%, 65%);');
    noteCSS = noteCSS.replace(/^  --h1-color:.+?;/gms, '  --h1-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    noteCSS = noteCSS.replace(/^  --h1-bg-color:.+?;/gms, '  --h1-bg-color: repeating-linear-gradient( 114deg, hsl(var(--usp-remoods-hue), 100%, 80%), hsl(var(--usp-remoods-hue), 100%, 65%, 30%), hsl(var(--usp-remoods-hue), 100%, 80%)  3px);');
    noteCSS = noteCSS.replace(/^  --h1-bd-color:.+?;/gms, '  --h1-bd-color: var(--h1-bg-color);');
    noteCSS = noteCSS.replace(/^  --h2-color:.+?;/gms, '  --h2-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    noteCSS = noteCSS.replace(/^  --h2-bd-color:.+?;/gms, '  --h2-bd-color: linear-gradient(to right, hsl(var(--usp-remoods-hue), 100%, 80%) 50%, transparent);');
    noteCSS = noteCSS.replace(/^  --h3-color:.+?;/gms, '  --h3-color: var(--h2-color);');
    noteCSS = noteCSS.replace(/^  --h3-bd-color:.+?;/gms, '  --h3-bd-color: var(--h2-bd-color);');
    noteCSS = noteCSS.replace(/^  --h4-color:.+?;/gms, '  --h4-color: var(--h2-color);');
    noteCSS = noteCSS.replace(/^  --h4-bd-color:.+?;/gms, '  --h4-bd-color: var(--h2-bd-color);');
    noteCSS = noteCSS.replace(/^  --h5-color:.+?;/gms, '  --h5-color: hsl(var(--usp-remoods-hue), 30%, 80%);');
    noteCSS = noteCSS.replace(/^  --h5-bd-color:.+?;/gms, '  --h5-bd-color: linear-gradient(to right, transparent 50%, var(--render-viewer-bg-color) 100%), repeating-linear-gradient(to right, hsl(var(--usp-remoods-hue), 30%, 80%), 2px, transparent, 2px, transparent 5px);');
    noteCSS = noteCSS.replace(/^  --h6-color:.+?;/gms, '  --h6-color: var(--h5-color);');
    noteCSS = noteCSS.replace(/^  --h6-bd-color:.+?;/gms, '  --h6-bd-color: var(--h5-bd-color);');
    noteCSS = noteCSS.replace(/^  --special-text-shadow:.+?;/gms, '  --special-text-shadow: 0 0 none;');
    noteCSS = noteCSS.replace(/^  --strong-text-color:.+?;/gms, '  --strong-text-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    noteCSS = noteCSS.replace(/^  --emphasize-text-color:.+?;/gms, '  --emphasize-text-color: var(--strong-text-color);');
    noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue), 25%, 60%);');
    noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
    noteCSS = noteCSS.replace(/^  --strikethrough-symbol-color:.+?;/gms, '  --strikethrough-symbol-color: hsl(0, 0%,100%);');
    noteCSS = noteCSS.replace(/^  --strikethrough-symbol-bg-color:.+?;/gms, '  --strikethrough-symbol-bg-color: hsl(0, 70%, 55%);');
    noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
    noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue), 25%, 60%);');
    noteCSS = noteCSS.replace(/^  --insert-symbol-color:.+?;/gms, '  --insert-symbol-color: hsl(0, 0%, 100%);');
    noteCSS = noteCSS.replace(/^  --insert-symbol-bg-color:.+?;/gms, '  --insert-symbol-bg-color: hsl(100, 60%, 45%);');
    noteCSS = noteCSS.replace(/^  --abbreviation-text-color:.+?;/gms, '  --abbreviation-text-color: hsl(var(--usp-remoods-hue), 100%, 85%);');
    noteCSS = noteCSS.replace(/^  --abbreviation-bd-color:.+?;/gms, '  --abbreviation-bd-color: hsl(var(--usp-remoods-hue), 100%, 85%);');
    noteCSS = noteCSS.replace(/^  --mark-text-color:.+?;/gms, '  --mark-text-color: hsl(var(--usp-remoods-hue), 30%, 30%);');
    noteCSS = noteCSS.replace(/^  --mark-text-bg-color:.+?;/gms, '  --mark-text-bg-color: hsl(var(--usp-remoods-hue), 100%, 85%);');
    noteCSS = noteCSS.replace(/^  --search-text-color:.+?;/gms, '  --search-text-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
    noteCSS = noteCSS.replace(/^  --search-text-bg-color:.+?;/gms, '  --search-text-bg-color: hsl(var(--usp-remoods-hue), 0%, 0%);');
    noteCSS = noteCSS.replace(/^  --search-text-bd-color:.+?;/gms, '  --search-text-bd-color: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --inline-code-color:.+?;/gms, '  --inline-code-color: hsl(var(--usp-remoods-hue), 100%, 85%);');
    noteCSS = noteCSS.replace(/^  --inline-code-bg-color:.+?;/gms, '  --inline-code-bg-color: hsl(var(--usp-remoods-hue), 30%, 25%);');
    noteCSS = noteCSS.replace(/^  --inline-code-bd-color:.+?;/gms, '  --inline-code-bd-color: 2px solid hsl(var(--usp-remoods-hue), 20%, 40%);');
    noteCSS = noteCSS.replace(/^  --inline-code-symbol-color:.+?;/gms, '  --inline-code-symbol-color: hsl(var(--usp-remoods-hue), 40%, 60%);');
    noteCSS = noteCSS.replace(/^  --katex-text-color:.+?;/gms, '  --katex-text-color: hsl(var(--usp-remoods-hue), 100%, 85%);');
    noteCSS = noteCSS.replace(/^  --list-token-color:.+?;/gms, '  --list-token-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 80%, 80%);');
    noteCSS = noteCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: hsl(var(--usp-remoods-hue), 30%, 80%);');
    noteCSS = noteCSS.replace(/^  --list-span-color:.+?;/gms, '  --list-span-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --link-text-color:.+?;/gms, '  --link-text-color: hsl(var(--usp-remoods-hue), 100%, 85%);');
    noteCSS = noteCSS.replace(/^  --link-source-icon-color:.+?;/gms, '  --link-source-icon-color: hsl(var(--usp-remoods-hue), 100%, 85%);');
    noteCSS = noteCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 100%, 85%);');
    noteCSS = noteCSS.replace(/^  --fn-title-color:.+?;/gms, '  --fn-title-color: hsl(var(--usp-remoods-hue), 0%, 70%);');
    noteCSS = noteCSS.replace(/^  --fn-title-bd-color:.+?;/gms, '  --fn-title-bd-color: 3px double hsl(var(--usp-remoods-hue), 0%, 70%);');
    noteCSS = noteCSS.replace(/^  --fn-list-text-color:.+?;/gms, '  --fn-list-text-color: hsl(var(--usp-remoods-hue), 0%, 70%);');
    noteCSS = noteCSS.replace(/^  --fn-list-token-color:.+?;/gms, '  --fn-list-token-color: hsl(var(--usp-remoods-hue), 0%, 50%);');
    noteCSS = noteCSS.replace(/^  --blockquote-bd-color:.+?;/gms, '  --blockquote-bd-color: 5px dotted hsl(var(--usp-remoods-hue), 20%, 60%);');
    noteCSS = noteCSS.replace(/^  --blockquote-text-color:.+?;/gms, '  --blockquote-text-color: hsl(var(--usp-remoods-hue), 0%, 70%);');
    noteCSS = noteCSS.replace(/^  --table-text-color:.+?;/gms, '  --table-text-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --table-header-bg-color:.+?;/gms, '  --table-header-bg-color: hsl(var(--usp-remoods-hue), 80%, 40%);');
    noteCSS = noteCSS.replace(/^  --table-header-text-shadow:.+?;/gms, '  --table-header-text-shadow: 0 0 2px black; ');
    noteCSS = noteCSS.replace(/^  --table-row-odd-bg-color:.+?;/gms, '  --table-row-odd-bg-color: hsl(var(--usp-remoods-hue), 15%, 30%);');
    noteCSS = noteCSS.replace(/^  --table-row-even-bg-color:.+?;/gms, '  --table-row-even-bg-color: hsl(var(--usp-remoods-hue), 10%, 35%);');
    noteCSS = noteCSS.replace(/^  --table-bd-color:.+?;/gms, '  --table-bd-color: 2px solid var(--render-viewer-bg-color);');
    noteCSS = noteCSS.replace(/^  --toc-bg-color:.+?;/gms, '  --toc-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --toc-bd-color:.+?;/gms, '  --toc-bd-color: hsl(var(--usp-remoods-hue), 100%, 60%);');
    noteCSS = noteCSS.replace(/^  --toc-box-shadow:.+?;/gms, '  --toc-box-shadow: 0 0 5px hsl(var(--usp-remoods-hue), 100%, 30%);');
    noteCSS = noteCSS.replace(/^  --toc-btn-text-color:.+?;/gms, '  --toc-btn-text-color: var(--render-viewer-bg-color);');
    noteCSS = noteCSS.replace(/^  --toc-btn-bg-color:.+?;/gms, '  --toc-btn-bg-color: hsl(var(--usp-remoods-hue), 100%, 75%);');
    noteCSS = noteCSS.replace(/^  --toc-btn-bd-color:.+?;/gms, '  --toc-btn-bd-color: 2px solid hsl(var(--usp-remoods-hue), 100%, 90%);');
    noteCSS = noteCSS.replace(/^  --toc-btn-box-shadow:.+?;/gms, '  --toc-btn-box-shadow: 1px 1px 3px hsl(var(--usp-remoods-hue), 100%, 60%);');
    noteCSS = noteCSS.replace(/^  --toc-list-bd-color:.+?;/gms, '  --toc-list-bd-color: 1px solid hsl(var(--usp-remoods-hue), 30%, 30%);');
    noteCSS = noteCSS.replace(/^  --toc-link-text-color-hover:.+?;/gms, '  --toc-link-text-color-hover: hsl(var(--usp-remoods-hue), 0%, 100%);');
    noteCSS = noteCSS.replace(/^  --toc-link-bg-color-hover:.+?;/gms, '  --toc-link-bg-color-hover: hsl(var(--usp-remoods-hue), 25%, 20%);');
    noteCSS = noteCSS.replace(/^  --cb-bg-color:.+?;/gms, '  --cb-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --cb-bd-color:.+?;/gms, '  --cb-bd-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    noteCSS = noteCSS.replace(/^  --cb-shadow:.+?;/gms, '  --cb-shadow: 0 0 4px hsl(var(--usp-remoods-hue), 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --cb-comment-color:.+?;/gms, '  --cb-comment-color: hsl(var(--usp-remoods-hue), 0%, 60%);');
    noteCSS = noteCSS.replace(/^  --cb-comment-shadow:.+?;/gms, '  --cb-comment-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-number-color:.+?;/gms, '  --cb-number-color: hsl(calc(var(--usp-remoods-hue) + 110deg), 80%, 46%);');
    noteCSS = noteCSS.replace(/^  --cb-number-shadow:.+?;/gms, '  --cb-number-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-string-color:.+?;/gms, '  --cb-string-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 80%, 55%);');
    noteCSS = noteCSS.replace(/^  --cb-string-shadow:.+?;/gms, '  --cb-string-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-params-color:.+?;/gms, '  --cb-params-color: hsl(calc(var(--usp-remoods-hue) + 300deg), 80%, 50%);');
    noteCSS = noteCSS.replace(/^  --cb-params-shadow:.+?;/gms, '  --cb-params-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-title-color:.+?;/gms, '  --cb-title-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 80%, 65%);');
    noteCSS = noteCSS.replace(/^  --cb-title-shadow:.+?;/gms, '  --cb-title-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-selector-id-color:.+?;/gms, '  --cb-selector-id-color: hsl(calc(var(--usp-remoods-hue) + 159deg), 80%, 55%);');
    noteCSS = noteCSS.replace(/^  --cb-selector-id-shadow:.+?;/gms, '  --cb-selector-id-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-selector-pseudo-color:.+?;/gms, '  --cb-selector-pseudo-color: hsl(calc(var(--usp-remoods-hue) + 323deg), 87%, 55%);');
    noteCSS = noteCSS.replace(/^  --cb-selector-pseudo-shadow:.+?;/gms, '  --cb-selector-pseudo-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-selector-attr-color:.+?;/gms, '  --cb-selector-attr-color: hsl(calc(var(--usp-remoods-hue) + 300deg), 100%, 45%);');
    noteCSS = noteCSS.replace(/^  --cb-selector-attr-shadow:.+?;/gms, '  --cb-selector-attr-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-text-color:.+?;/gms, '  --cb-text-color: hsl(var(--usp-remoods-hue), 0%, 90%);');
    noteCSS = noteCSS.replace(/^  --cb-text-shadow:.+?;/gms, '  --cb-text-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-title-class-color:.+?;/gms, '  --cb-title-class-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-title-class-shadow:.+?;/gms, '  --cb-title-class-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-function-color:.+?;/gms, '  --cb-function-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-function-shadow:.+?;/gms, '  --cb-function-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-function-title-color:.+?;/gms, '  --cb-function-title-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-function-title-shadow:.+?;/gms, '  --cb-function-title-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-function-params-color:.+?;/gms, '  --cb-function-params-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-function-params-shadow:.+?;/gms, '  --cb-function-params-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-class-title-color:.+?;/gms, '  --cb-class-title-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-class-title-shadow:.+?;/gms, '  --cb-class-title-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-operator-color:.+?;/gms, '  --cb-operator-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-operator-shadow:.+?;/gms, '  --cb-operator-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-keyword-color:.+?;/gms, '  --cb-keyword-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    noteCSS = noteCSS.replace(/^  --cb-keyword-shadow:.+?;/gms, '  --cb-keyword-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-variable-language-color:.+?;/gms, '  --cb-variable-language-color: var(--cb-keyword-color);');
    noteCSS = noteCSS.replace(/^  --cb-variable-language-shadow:.+?;/gms, '  --cb-variable-language-shadow: var(--cb-keyword-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-doctag-color:.+?;/gms, '  --cb-doctag-color: var(--cb-keyword-color);');
    noteCSS = noteCSS.replace(/^  --cb-doctag-shadow:.+?;/gms, '  --cb-doctag-shadow: var(--cb-keyword-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-title-function-color:.+?;/gms, '  --cb-title-function-color: hsl(var(--usp-remoods-hue), 100%, 85%);');
    noteCSS = noteCSS.replace(/^  --cb-title-function-shadow:.+?;/gms, '  --cb-title-function-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-property-color:.+?;/gms, '  --cb-property-color: var(--cb-title-function-color);');
    noteCSS = noteCSS.replace(/^  --cb-property-shadow:.+?;/gms, '  --cb-property-shadow: var(--cb-title-function-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-attr-color:.+?;/gms, '  --cb-attr-color: var(--cb-title-function-color);');
    noteCSS = noteCSS.replace(/^  --cb-attr-shadow:.+?;/gms, '  --cb-attr-shadow: var(--cb-title-function-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-attribute-color:.+?;/gms, '  --cb-attribute-color: var(--cb-title-function-color);');
    noteCSS = noteCSS.replace(/^  --cb-attribute-shadow:.+?;/gms, '  --cb-attribute-shadow: var(--cb-title-function-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-title-class-inherited-color:.+?;/gms, '  --cb-title-class-inherited-color: hsl(calc(var(--usp-remoods-hue) + 260deg), 100%, 75%);');
    noteCSS = noteCSS.replace(/^  --cb-title-class-inherited-shadow:.+?;/gms, '  --cb-title-class-inherited-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-built-in-color:.+?;/gms, '  --cb-built-in-color: var(--cb-title-class-inherited-color);');
    noteCSS = noteCSS.replace(/^  --cb-built-in-shadow:.+?;/gms, '  --cb-built-in-shadow: var(--cb-title-class-inherited-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-selector-class-color:.+?;/gms, '  --cb-selector-class-color: var(--cb-title-class-inherited-color);');
    noteCSS = noteCSS.replace(/^  --cb-selector-class-shadow:.+?;/gms, '  --cb-selector-class-shadow: var(--cb-title-class-inherited-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-html-attr-color:.+?;/gms, '  --cb-html-attr-color: var(--cb-title-class-inherited-color);');
    noteCSS = noteCSS.replace(/^  --cb-html-attr-shadow:.+?;/gms, '  --cb-html-attr-shadow: var(--cb-title-class-inherited-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-type-color:.+?;/gms, '  --cb-type-color: var(--cb-title-class-inherited-color);');
    noteCSS = noteCSS.replace(/^  --cb-type-shadow:.+?;/gms, '  --cb-type-shadow: var(--cb-title-class-inherited-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-literal-color:.+?;/gms, '  --cb-literal-color: hsl(calc(var(--usp-remoods-hue) + 148deg), 100%, 65%);');
    noteCSS = noteCSS.replace(/^  --cb-literal-shadow:.+?;/gms, '  --cb-literal-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-meta-color:.+?;/gms, '  --cb-meta-color: var(--cb-literal-color);');
    noteCSS = noteCSS.replace(/^  --cb-meta-shadow:.+?;/gms, '  --cb-meta-shadow: var(--cb-literal-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-symbol-color:.+?;/gms, '  --cb-symbol-color: var(--cb-literal-color);');
    noteCSS = noteCSS.replace(/^  --cb-symbol-shadow:.+?;/gms, '  --cb-symbol-shadow: var(--cb-literal-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-subst-color:.+?;/gms, '  --cb-subst-color: hsl(calc(var(--usp-remoods-hue) +  90deg), 100%, 75%);');
    noteCSS = noteCSS.replace(/^  --cb-subst-shadow:.+?;/gms, '  --cb-subst-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-variable-text-color:.+?;/gms, '  --cb-variable-text-color: var(--cb-subst-color);');
    noteCSS = noteCSS.replace(/^  --cb-variable-shadow:.+?;/gms, '  --cb-variable-shadow: var(--cb-subst-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-regexp-color:.+?;/gms, '  --cb-regexp-color: var(--cb-subst-color);');
    noteCSS = noteCSS.replace(/^  --cb-regexp-shadow:.+?;/gms, '  --cb-regexp-shadow: var(--cb-subst-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-selector-tag-color:.+?;/gms, '  --cb-selector-tag-color: hsl(calc(var(--usp-remoods-hue) + 120deg), 100%, 70%);');
    noteCSS = noteCSS.replace(/^  --cb-selector-tag-shadow:.+?;/gms, '  --cb-selector-tag-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-tag-color:.+?;/gms, '  --cb-tag-color: var(--cb-selector-tag-color);');
    noteCSS = noteCSS.replace(/^  --cb-tag-shadow:.+?;/gms, '  --cb-tag-shadow: var(--cb-selector-tag-shadow);');
    noteCSS = noteCSS.replace(/^  --ag-bg-color:.+?;/gms, '  --ag-bg-color: hsl(var(--usp-remoods-hue), 15%, 15%);');
    noteCSS = noteCSS.replace(/^  --ag-bd-color:.+?;/gms, '  --ag-bd-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    noteCSS = noteCSS.replace(/^  --ag-drop-shadow:.+?;/gms, '  --ag-drop-shadow: 0 0 2px hsl(var(--usp-remoods-hue), 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --sn-text-color:.+?;/gms, '  --sn-text-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --sn-bg-color:.+?;/gms, '  --sn-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --sn-bd-color:.+?;/gms, '  --sn-bd-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    noteCSS = noteCSS.replace(/^  --sn-drop-shadow:.+?;/gms, '  --sn-drop-shadow: 0px 0px 2px hsl(var(--usp-remoods-hue), 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --sn-important-text-color:.+?;/gms, '  --sn-important-text-color: hsl(40, 50%, 70%);');
    noteCSS = noteCSS.replace(/^  --sn-important-bg-color:.+?;/gms, '  --sn-important-bg-color: hsl(0, 100%, 30%);');
    noteCSS = noteCSS.replace(/^  --sn-important-bd-color:.+?;/gms, '  --sn-important-bd-color: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --sn-important-box-shadow:.+?;/gms, '  --sn-important-box-shadow: 0 0 6px hsl(0, 100%, 10%);');
    noteCSS = noteCSS.replace(/^  --sn-tags-text-color:.+?;/gms, '  --sn-tags-text-color: hsl(0, 0%, 100%);');
    noteCSS = noteCSS.replace(/^  --sn-tags-text-shadow:.+?;/gms, '  --sn-tags-text-shadow: 1px 1px 2px hsl(var(--usp-remoods-hue), 0%, 0%);');
    noteCSS = noteCSS.replace(/^  --sn-note-tag-bg-color:.+?;/gms, '  --sn-note-tag-bg-color: hsl(206, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-tip-tag-bg-color:.+?;/gms, '  --sn-tip-tag-bg-color: hsl(56, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-question-tag-bg-color:.+?;/gms, '  --sn-question-tag-bg-color: hsl(270, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-explain-tag-bg-color:.+?;/gms, '  --sn-explain-tag-bg-color: hsl(163, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-warning-tag-bg-color:.+?;/gms, '  --sn-warning-tag-bg-color: hsl(0, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-keyword-tag-bg-color:.+?;/gms, '  --sn-keyword-tag-bg-color: hsl(324, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-comment-tag-bg-color:.+?;/gms, '  --sn-comment-tag-bg-color: hsl(100, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-important-tag-text-color:.+?;/gms, '  --sn-important-tag-text-color: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --sn-important-tag-bg-color:.+?;/gms, '  --sn-important-tag-bg-color: hsl(0, 100%, 12%);');
    noteCSS = noteCSS.replace(/^  --sn-important-tag-bd-color:.+?;/gms, '  --sn-important-tag-bd-color: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --ctb-bg-color:.+?;/gms, '  --ctb-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --ctb-drop-shadow:.+?;/gms, '  --ctb-drop-shadow: 0 0 2px hsl(var(--usp-remoods-hue), 100%, 70%);');
    noteCSS = noteCSS.replace(/^  --ctb-title-color:.+?;/gms, '  --ctb-title-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    noteCSS = noteCSS.replace(/^  --ctb-symbol-bg-color:.+?;/gms, '  --ctb-symbol-bg-color: repeating-radial-gradient(circle, hsl(var(--usp-remoods-hue), 100%, 80%), hsl(var(--usp-remoods-hue), 100%, 20%) 27%);');
    noteCSS = noteCSS.replace(/^  --kp-text-color:.+?;/gms, '  --kp-text-color: hsl(var(--usp-remoods-hue), 100%, 75%);');
    noteCSS = noteCSS.replace(/^  --kp-text-shadow:.+?;/gms, '  --kp-text-shadow: 0 0 none;');
    noteCSS = noteCSS.replace(/^  --kp-bd-color:.+?;/gms, '  --kp-bd-color: hsl(var(--usp-remoods-hue), 100%, 85%);');
    noteCSS = noteCSS.replace(/^  --km-text-color:.+?;/gms, '  --km-text-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --km-bg-color:.+?;/gms, '  --km-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --hm-bd-color:.+?;/gms, '  --km-bd-color: 1px solid hsl(var(--usp-remoods-hue), 70%, 70%);');
    noteCSS = noteCSS.replace(/^  --km-special-text-color:.+?;/gms, '  --km-special-text-color: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --spoiler-block-text-color:.+?;/gms, '  --spoiler-block-text-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --spoiler-block-bg-color:.+?;/gms, '  --spoiler-block-bg-color: hsl(var(--usp-remoods-hue), 10%, 20%);');
    noteCSS = noteCSS.replace(/^  --spoiler-block-box-shadow:.+?;/gms, '  --spoiler-block-box-shadow: 0 0 4px hsl(var(--usp-remoods-hue), 100%, 80%);');
    noteCSS = noteCSS.replace(/^  --spoiler-title-color:.+?;/gms, '  --spoiler-title-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    noteCSS = noteCSS.replace(/^  --spoiler-list-text-color:.+?;/gms, '  --spoiler-list-text-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    noteCSS = noteCSS.replace(/^  --spoiler-span-title-color:.+?;/gms, '  --spoiler-span-title-color: hsl(var(--usp-remoods-hue), 40%, 80%);');
    noteCSS = noteCSS.replace(/^  --spoiler-span-title-bg-color:.+?;/gms, '  --spoiler-span-title-bg-color: hsl(var(--usp-remoods-hue), 10%, 30%);');
    noteCSS = noteCSS.replace(/^  --spoiler-list-span-color:.+?;/gms, '  --spoiler-list-span-color: hsl(var(--usp-remoods-hue), 0%, 90%);');
    noteCSS = noteCSS.replace(/^  --spoiler-ctb-text-color:.+?;/gms, '  --spoiler-ctb-text-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --spoiler-ctb-bg-color:.+?;/gms, '  --spoiler-ctb-bg-color: hsl(var(--usp-remoods-hue), 10%, 30%);');
    noteCSS = noteCSS.replace(/^  --spoiler-ctb-title-color:.+?;/gms, '  --spoiler-ctb-title-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    noteCSS = noteCSS.replace(/^  --spoiler-inline-text-color:.+?;/gms, '  --spoiler-inline-text-color: hsl(0, 0%, 90%);');
    noteCSS = noteCSS.replace(/^  --spoiler-inline-bg-color:.+?;/gms, '  --spoiler-inline-bg-color: hsl(0, 0%, 0%);');
    noteCSS = noteCSS.replace(/^  --spoiler-inline-bd-color:.+?;/gms, '  --spoiler-inline-bd-color: 1px solid hsl(var(--usp-remoods-hue), 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --spoiler-inline-symbol-color:.+?;/gms, '  --spoiler-inline-symbol-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    noteCSS = noteCSS.replace(/^  --spoiler-inline-symbol-color-hover:.+?;/gms, '  --spoiler-inline-symbol-color-hover: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --turntochart-bg-color:.+?;/gms, '  --turntochart-bg-color: none;');
    noteCSS = noteCSS.replace(/^  --turntochart-text-color:.+?;/gms, '  --turntochart-text-color: hsl(var(--usp-remoods-hue), 0%, 80%);');
    noteCSS = noteCSS.replace(/^  --turntochart-info-bg-color:.+?;/gms, '  --turntochart-info-bg-color: hsl(var(--usp-remoods-hue), 10%, 20%);');

    chromeCSS = chromeCSS.replace(/^  --usp-base-font:.+?;/gms, '  --usp-base-font: var(--usp-custom-base-font), "mulish", "montserrat", "chiron hei hk extralight";');
    chromeCSS = chromeCSS.replace(/^  --usp-monospace-font:.+?;/gms, '  --usp-monospace-font: var(--usp-custom-monospace-font), "cascadia mono light", "chiron hei hk extralight";');
    noteCSS = noteCSS.replace(/^  --usp-base-font:.+?;/gms, '  --usp-base-font: var(--usp-custom-base-font), "mulish", "montserrat", "chiron hei hk extralight";');
    noteCSS = noteCSS.replace(/^  --usp-monospace-font:.+?;/gms, '  --usp-monospace-font: var(--usp-custom-monospace-font), "cascadia mono light", "chiron hei hk extralight";');

    if(!darkerEditorBackground) {
      chromeCSS = chromeCSS.replace(/^  --code-mirror-bg-color:.+?;/gms, '  --code-mirror-bg-color: hsl(var(--usp-remoods-hue),  8%, 27%);');
      chromeCSS = chromeCSS.replace(/^  --code-block-bg-color:.+?;/gms, '  --code-block-bg-color: hsl(var(--usp-remoods-hue),  8%, 17%);');
      noteCSS = noteCSS.replace(/^  --render-viewer-bg-color:.+?;/gms, '  --render-viewer-bg-color: hsl(var(--usp-remoods-hue),  8%, 27%);');
      noteCSS = noteCSS.replace(/^  --render-viewer-bg-color-2:.+?;/gms, '  --render-viewer-bg-color-2: hsl(var(--usp-remoods-hue),  8%, 17%);');
    } else {
      chromeCSS = chromeCSS.replace(/^  --code-mirror-bg-color:.+?;/gms, '  --code-mirror-bg-color: hsl(var(--usp-remoods-hue),  8%, 20%);');
      chromeCSS = chromeCSS.replace(/^  --code-block-bg-color:.+?;/gms, '  --code-block-bg-color: hsl(var(--usp-remoods-hue),  8%, 13%);');
      noteCSS = noteCSS.replace(/^  --render-viewer-bg-color:.+?;/gms, '  --render-viewer-bg-color: hsl(var(--usp-remoods-hue),  8%, 20%);');
      noteCSS = noteCSS.replace(/^  --render-viewer-bg-color-2:.+?;/gms, '  --render-viewer-bg-color-2: hsl(var(--usp-remoods-hue),  8%, 13%);');
    }

    if(!emphasizeAddRemove && !emphasizeAddRemoveBg) {
      chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 100%,  70%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --print-insert-text-color:.+?;/gms, '  --print-insert-text-color: hsl(var(--usp-remoods-hue), 100%,  40%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bd-color:.+?;/gms, '  --print-insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  50%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bg-color:.+?;/gms, '  --print-insert-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-color:.+?;/gms, '  --print-strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  50%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-bg-color:.+?;/gms, '  --print-strikethrough-text-bg-color: none;');
      
    } else if(!emphasizeAddRemove && emphasizeAddRemoveBg) {
      chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: hsl(var(--usp-remoods-hue),  35%,  25%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: hsl(var(--usp-remoods-hue),  30%,  20%);');
      noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 100%,  70%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: hsl(var(--usp-remoods-hue),  35%,  25%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: hsl(var(--usp-remoods-hue),  30%,  20%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-color:.+?;/gms, '  --print-insert-text-color: hsl(var(--usp-remoods-hue), 100%,  40%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bd-color:.+?;/gms, '  --print-insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  50%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bg-color:.+?;/gms, '  --print-insert-text-bg-color: hsl(var(--usp-remoods-hue), 40%,  95%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-color:.+?;/gms, '  --print-strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  50%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-bg-color:.+?;/gms, '  --print-strikethrough-text-bg-color: hsl(var(--usp-remoods-hue), 25%,  85%);');
      
    } else if(emphasizeAddRemove && !emphasizeAddRemoveBg) {
      chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(100,  50%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(100,  70%,  35%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(0, 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(100,  50%,  75%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(100,  70%,  35%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(0, 100%,  75%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --print-insert-text-color:.+?;/gms, '  --print-insert-text-color: hsl(100,  40%,  45%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bd-color:.+?;/gms, '  --print-insert-text-bd-color: hsl(100,  70%,  35%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bg-color:.+?;/gms, '  --print-insert-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-color:.+?;/gms, '  --print-strikethrough-text-color: hsl(0, 100%,  65%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-bg-color:.+?;/gms, '  --print-strikethrough-text-bg-color: none;');
      
    } else {
      chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(100,  50%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(100,  70%,  35%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: hsl(100,  70%,  15%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(0, 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: hsl(0,  30%,  20%);');
      noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(100,  50%,  75%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(100,  70%,  35%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: hsl(100,  70%,  15%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(0, 100%,  75%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: hsl(0,  30%,  20%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-color:.+?;/gms, '  --print-insert-text-color: hsl(100,  40%,  45%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bd-color:.+?;/gms, '  --print-insert-text-bd-color: hsl(100,  70%,  35%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bg-color:.+?;/gms, '  --print-insert-text-bg-color: hsl(100,  35%,  95%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-color:.+?;/gms, '  --print-strikethrough-text-color: hsl(0, 100%,  65%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-bg-color:.+?;/gms, '  --print-strikethrough-text-bg-color: hsl(0,  35%,  90%);');
    }
    
    if(!themeColorListText) {
      chromeCSS = chromeCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: var(--code-mirror-text-color);');
      chromeCSS = chromeCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(var(--usp-remoods-hue), 80%, 80%);');
      chromeCSS = chromeCSS.replace(/^  --eh-footnote-ref-color:.+?;/gms, '  --eh-footnote-ref-color: hsl(var(--usp-remoods-hue), 100%, 10%);');
      noteCSS = noteCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: var(--render-viewer-text-color);');
      noteCSS = noteCSS.replace(/^  --list-span-color:.+?;/gms, '  --list-span-color: hsl(var(--usp-remoods-hue), 30%, 80%);');
      noteCSS = noteCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(var(--usp-remoods-hue), 80%, 80%);');
    } else {
      chromeCSS = chromeCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: hsl(var(--usp-remoods-hue), 30%, 80%);');
      chromeCSS = chromeCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 80%, 80%);');
      chromeCSS = chromeCSS.replace(/^  --eh-footnote-ref-color:.+?;/gms, '  --eh-footnote-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 100%, 10%);');
      noteCSS = noteCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: hsl(var(--usp-remoods-hue), 30%, 80%);');
      noteCSS = noteCSS.replace(/^  --list-span-color:.+?;/gms, '  --list-span-color: var(--render-viewer-text-color);');
      noteCSS = noteCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 80%, 80%);');
    }

    if(!h1TwillPattern) {
      noteCSS = noteCSS.replace(/^  --usp-h1-text-fill-color:.+?;/gms, '  --usp-h1-text-fill-color: none;');
      noteCSS = noteCSS.replace(/^  --usp-h1-font-weight:.+?;/gms, '  --usp-h1-font-weight: 600;');
      noteCSS = noteCSS.replace(/^  --h1-bd-color:.+?;/gms, '  --h1-bd-color: var(--h2-bd-color);');
    } else {
      noteCSS = noteCSS.replace(/^  --usp-h1-text-fill-color:.+?;/gms, '  --usp-h1-text-fill-color: transparent;');
      noteCSS = noteCSS.replace(/^  --usp-h1-font-weight:.+?;/gms, '  --usp-h1-font-weight: 800;');
      noteCSS = noteCSS.replace(/^  --h1-bd-color:.+?;/gms, '  --h1-bd-color: var(--h1-bg-color);');
    }

    if(!hrTwillPattern) {
      noteCSS = noteCSS.replace(/^  --horizontal-line-bg:.+?;/gms, '  --horizontal-line-bg: hsl(var(--usp-remoods-hue), 60%, 60%);');
      noteCSS = noteCSS.replace(/^  --horizontal-line-bgi:.+?;/gms, '  --horizontal-line-bgi: none;');
    } else {
      noteCSS = noteCSS.replace(/^  --horizontal-line-bg:.+?;/gms, '  --horizontal-line-bg: none;');
      noteCSS = noteCSS.replace(/^  --horizontal-line-bgi:.+?;/gms, '  --horizontal-line-bgi: repeating-linear-gradient(114deg, hsl(var(--usp-remoods-hue), 100%, 80%), hsl(var(--usp-remoods-hue), 100%, 35%, 50%), hsl(var(--usp-remoods-hue), 100%, 80%) 3px);');
    }

    if(!dottedBlockquote) {
      noteCSS = noteCSS.replace(/^  --blockquote-bd-color:.+?;/gms, '  --blockquote-bd-color: 3px solid hsl(var(--usp-remoods-hue),  20%,  60%);');
      noteCSS = noteCSS.replace(/^  --print-blockquote-bd-color:.+?;/gms, '  --print-blockquote-bd-color: 2px solid hsl(var(--usp-remoods-hue),  20%,  60%);');
    } else {
      noteCSS = noteCSS.replace(/^  --blockquote-bd-color:.+?;/gms, '  --blockquote-bd-color: 5px dotted hsl(var(--usp-remoods-hue),  20%,  60%);');
      noteCSS = noteCSS.replace(/^  --print-blockquote-bd-color:.+?;/gms, '  --print-blockquote-bd-color: 4px dotted hsl(var(--usp-remoods-hue),  20%,  60%);');
    }

    if(!mermaidEyeProtector) {
      noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-filter:.+?;/gms, '  --usp-mermaid-eye-protector-filter: none;');
      noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-transition:.+?;/gms, '  --usp-mermaid-eye-protector-transition: none;');
    } else {
      noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-filter:.+?;/gms, '  --usp-mermaid-eye-protector-filter: brightness(80%);');
      noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-transition:.+?;/gms, '  --usp-mermaid-eye-protector-transition: filter 1.2s;');
    }
  
    if(!imageEyeProtector) {
      noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-filter:.+?;/gms, '  --usp-image-eye-protector-filter: none;');
      noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-transition:.+?;/gms, '  --usp-image-eye-protector-transition: none;');
    } else {
      noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-filter:.+?;/gms, '  --usp-image-eye-protector-filter: brightness(80%);');
      noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-transition:.+?;/gms, '  --usp-image-eye-protector-transition: filter 1.2s;');
    }

    break;

  case 'nightMode':
    
    chromeCSS = chromeCSS.replace(/^  --code-mirror-bg-color:.+?;/gms, '  --code-mirror-bg-color: hsl(var(--usp-remoods-hue), 11%, 13%);');
    chromeCSS = chromeCSS.replace(/^  --code-mirror-text-color:.+?;/gms, '  --code-mirror-text-color: hsl(var(--usp-remoods-hue), 0%, 77%);');
    chromeCSS = chromeCSS.replace(/^  --code-mirror-scrollbar-track-bg-color:.+?;/gms, '  --code-mirror-scrollbar-track-bg-color: hsl(var(--usp-remoods-hue), 70%, 70%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --code-mirror-scrollbar-thumb-bg-color:.+?;/gms, '  --code-mirror-scrollbar-thumb-bg-color: linear-gradient(to bottom, hsl(var(--usp-remoods-hue), 55%, 45%)  3px, hsl(var(--usp-remoods-hue), 11%, 13%) 4px, hsl(var(--usp-remoods-hue), 11%, 13%) calc(100% - 4px), hsl(var(--usp-remoods-hue), 55%, 45%) calc(100% - 3px));');
    chromeCSS = chromeCSS.replace(/^  --code-mirror-scrollbar-thumb-bd-color:.+?;/gms, '  --code-mirror-scrollbar-thumb-bd-color: hsl(var(--usp-remoods-hue), 55%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --horizontal-line-syntax-color:.+?;/gms, '  --horizontal-line-syntax-color: hsl(var(--usp-remoods-hue), 0%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --horizontal-line-bg-color:.+?;/gms, '  --horizontal-line-bg-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --cursor-bd-color:.+?;/gms, '  --cursor-bd-color: 2px solid hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --selected-text-color:.+?;/gms, '  --selected-text-color: var(--render-viewer-text-color);');
    chromeCSS = chromeCSS.replace(/^  --selected-text-bg-color:.+?;/gms, '  --selected-text-bg-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 20%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-selected-text-bg-color:.+?;/gms, '  --code-block-selected-text-bg-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 20%, 30%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --h1-text-color:.+?;/gms, '  --h1-text-color: hsl(var(--usp-remoods-hue), 40%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --h2-text-color:.+?;/gms, '  --h2-text-color: hsl(var(--usp-remoods-hue), 35%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --h3-text-color:.+?;/gms, '  --h3-text-color: hsl(var(--usp-remoods-hue), 35%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --h4-text-color:.+?;/gms, '  --h4-text-color: hsl(var(--usp-remoods-hue), 35%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --h5-text-color:.+?;/gms, '  --h5-text-color: hsl(var(--usp-remoods-hue), 10%, 65%);');
    chromeCSS = chromeCSS.replace(/^  --h6-text-color:.+?;/gms, '  --h6-text-color: hsl(var(--usp-remoods-hue), 10%, 65%);');
    chromeCSS = chromeCSS.replace(/^  --blockquote-text-color:.+?;/gms, '  --blockquote-text-color: hsl(var(--usp-remoods-hue), 0%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --list-token-color:.+?;/gms, '  --list-token-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 35%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: hsl(var(--usp-remoods-hue), 35%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --checkbox-color:.+?;/gms, '  --checkbox-color: hsl(var(--usp-remoods-hue), 100%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --link-text-color:.+?;/gms, '  --link-text-color: hsl(var(--usp-remoods-hue), 40%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 50%, 65%);');
    chromeCSS = chromeCSS.replace(/^  --special-text-color:.+?;/gms, '  --special-text-color: hsl(var(--usp-remoods-hue), 80%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --special-bg-color:.+?;/gms, '  --special-bg-color: hsl(var(--usp-remoods-hue), 15%, 28%);');
    chromeCSS = chromeCSS.replace(/^  --mark-text-bd-color:.+?;/gms, '  --mark-text-bd-color: hsl(var(--usp-remoods-hue), 70%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue), 20%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
    chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 40%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
    chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue), 25%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --sub-sup-text-color:.+?;/gms, '  --sub-sup-text-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --inline-code-color:.+?;/gms, '  --inline-code-color: hsl(var(--usp-remoods-hue), 75%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --inline-code-bd-color:.+?;/gms, '  --inline-code-bd-color: 2px solid hsl(var(--usp-remoods-hue), 30%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --inline-code-bg-color:.+?;/gms, '  --inline-code-bg-color: hsl(var(--usp-remoods-hue), 40%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --html-tag-text-color:.+?;/gms, '  --html-tag-text-color: hsl(0, 60%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --html-tag-text-shadow:.+?;/gms, '  --html-tag-text-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --html-attribute-text-color:.+?;/gms, '  --html-attribute-text-color: hsl(145, 60%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --html-attribute-text-shadow:.+?;/gms, '  --html-attribute-text-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --html-string-text-color:.+?;/gms, '  --html-string-text-color: hsl(300, 60%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --html-string-text-shadow:.+?;/gms, '  --html-string-text-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-bg-color:.+?;/gms, '  --code-block-bg-color: hsl(var(--usp-remoods-hue), 8%, 11%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-bd-width:.+?;/gms, '  --code-block-bd-width: 0 3px;');
    chromeCSS = chromeCSS.replace(/^  --code-block-bd-color:.+?;/gms, '  --code-block-bd-color: hsl(var(--usp-remoods-hue), 40%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-comment-color:.+?;/gms, '  --code-block-comment-color: hsl(var(--usp-remoods-hue), 0%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-comment-shadow:.+?;/gms, '  --code-block-comment-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-number-color:.+?;/gms, '  --code-block-number-color: hsl(calc(var(--usp-remoods-hue) + 110deg), 50%, 56%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-number-shadow:.+?;/gms, '  --code-block-number-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-string-color:.+?;/gms, '  --code-block-string-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 50%, 65%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-string-shadow:.+?;/gms, '  --code-block-string-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-3-color:.+?;/gms, '  --code-block-variable-3-color: hsl(calc(var(--usp-remoods-hue) + 323deg), 50%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-3-shadow:.+?;/gms, '  --code-block-variable-3-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-attribute-color:.+?;/gms, '  --code-block-attribute-color: hsl(calc(var(--usp-remoods-hue) + 240deg), 50%, 65%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-attribute-shadow:.+?;/gms, '  --code-block-attribute-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-error-color:.+?;/gms, '  --code-block-error-color: hsl(0, 50%, 55%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-error-bd-color:.+?;/gms, '  --code-block-error-bd-color: 2px dotted hsl(0, 50%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-invalidchar-color:.+?;/gms, '  --code-block-invalidchar-color: hsl(0, 50%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-invalidchar-shadow:.+?;/gms, '  --code-block-invalidchar-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-color:.+?;/gms, '  --code-block-variable-color: hsl(var(--usp-remoods-hue), 0%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-shadow:.+?;/gms, '  --code-block-variable-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-2-color:.+?;/gms, '  --code-block-variable-2-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-variable-2-shadow:.+?;/gms, '  --code-block-variable-2-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-def-color:.+?;/gms, '  --code-block-def-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-def-shadow:.+?;/gms, '  --code-block-def-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-undefined-color:.+?;/gms, '  --code-block-undefined-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-undefined-shadow:.+?;/gms, '  --code-block-undefined-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-operator-color:.+?;/gms, '  --code-block-operator-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-operator-shadow:.+?;/gms, '  --code-block-operator-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-null-color:.+?;/gms, '  --code-block-null-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-null-shadow:.+?;/gms, '  --code-block-null-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-matching-bracket-color:.+?;/gms, '  --code-block-matching-bracket-color: var(--code-block-variable-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-matching-bracket-shadow:.+?;/gms, '  --code-block-matching-bracket-shadow: var(--code-block-variable-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-keyword-color:.+?;/gms, '  --code-block-keyword-color: hsl(var(--usp-remoods-hue), 65%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-keyword-shadow:.+?;/gms, '  --code-block-keyword-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-property-color:.+?;/gms, '  --code-block-property-color: hsl(var(--usp-remoods-hue), 40%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-property-shadow:.+?;/gms, '  --code-block-property-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-qualifier-color:.+?;/gms, '  --code-block-qualifier-color: hsl(calc(var(--usp-remoods-hue) + 260deg), 50%, 65%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-qualifier-shadow:.+?;/gms, '  --code-block-qualifier-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-type-color:.+?;/gms, '  --code-block-type-color: var(--code-block-qualifier-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-type-shadow:.+?;/gms, '  --code-block-type-shadow: var(--code-block-qualifier-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-builtin-color:.+?;/gms, '  --code-block-builtin-color: var(--code-block-qualifier-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-builtin-shadow:.+?;/gms, '  --code-block-builtin-shadow: var(--code-block-qualifier-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-atom-color:.+?;/gms, '  --code-block-atom-color: hsl(calc(var(--usp-remoods-hue) + 148deg), 50%, 55%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-atom-shadow:.+?;/gms, '  --code-block-atom-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-meta-color:.+?;/gms, '  --code-block-meta-color: var(--code-block-atom-color);');
    chromeCSS = chromeCSS.replace(/^  --code-block-meta-shadow:.+?;/gms, '  --code-block-meta-shadow: var(--code-block-atom-shadow);');
    chromeCSS = chromeCSS.replace(/^  --code-block-string-2-color:.+?;/gms, '  --code-block-string-2-color: hsl(calc(var(--usp-remoods-hue) +  90deg), 50%, 65%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-string-2-shadow:.+?;/gms, '  --code-block-string-2-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --code-block-tag-color:.+?;/gms, '  --code-block-tag-color: hsl(calc(var(--usp-remoods-hue) + 120deg), 50%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-tag-shadow:.+?;/gms, '  --code-block-tag-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-table-text-color:.+?;/gms, '  --mtc-table-text-color: hsl(var(--usp-remoods-hue), 0%, 77%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-table-vertical-bar-color:.+?;/gms, '  --mtc-table-vertical-bar-color: hsl(var(--usp-remoods-hue), 0%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-separate-bg-color:.+?;/gms, '  --mtc-separate-bg-color: hsl(var(--usp-remoods-hue), 0%, 100%, 8%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-separate-head-text-color:.+?;/gms, '  --mtc-separate-head-text-color: hsl(var(--usp-remoods-hue), 40%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-1:.+?;/gms, '  --mtc-column-mark-color-1: hsl(0, 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-1:.+?;/gms, '  --mtc-column-mark-shadow-1: none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-2:.+?;/gms, '  --mtc-column-mark-color-2: hsl(240, 100%, 85%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-2:.+?;/gms, '  --mtc-column-mark-shadow-2: none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-3:.+?;/gms, '  --mtc-column-mark-color-3: hsl(160, 80%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-3:.+?;/gms, '  --mtc-column-mark-shadow-3: none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-4:.+?;/gms, '  --mtc-column-mark-color-4: hsl( 40, 90%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-4:.+?;/gms, '  --mtc-column-mark-shadow-4: none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-5:.+?;/gms, '  --mtc-column-mark-color-5: hsl( 60, 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-5:.+?;/gms, '  --mtc-column-mark-shadow-5: none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-6:.+?;/gms, '  --mtc-column-mark-color-6: hsl(190, 80%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-6:.+?;/gms, '  --mtc-column-mark-shadow-6: none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-7:.+?;/gms, '  --mtc-column-mark-color-7: hsl(100, 80%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-7:.+?;/gms, '  --mtc-column-mark-shadow-7: none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-8:.+?;/gms, '  --mtc-column-mark-color-8: hsl(210, 100%, 65%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-8:.+?;/gms, '  --mtc-column-mark-shadow-8: none;');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-9:.+?;/gms, '  --mtc-column-mark-color-9: hsl(270, 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-9:.+?;/gms, '  --mtc-column-mark-shadow-9: none; ');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-color-10:.+?;/gms, '  --mtc-column-mark-color-10: hsl(310, 100%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --mtc-column-mark-shadow-10:.+?;/gms, '  --mtc-column-mark-shadow-10: none;');
    chromeCSS = chromeCSS.replace(/^  --eh-footnote-ref-color:.+?;/gms, '  --eh-footnote-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 100%, 10%);');
    chromeCSS = chromeCSS.replace(/^  --g-main-bg-color-1:.+?;/gms, '  --g-main-bg-color-1: hsl(var(--usp-remoods-hue), 11%, 13%);');
    chromeCSS = chromeCSS.replace(/^  --g-panel-header-bg-color:.+?;/gms, '  --g-panel-header-bg-color: hsl(var(--usp-remoods-hue), 55%, 45%);');
    chromeCSS = chromeCSS.replace(/^  --9-panel-header-text-color:.+?;/gms, '  --g-panel-header-text-color: hsl(var(--usp-remoods-hue), 0%, 88%);');
    chromeCSS = chromeCSS.replace(/^  --g-panel-header-text-shadow:.+?;/gms, '  --g-panel-header-text-shadow: 0 0 3px hsl(var(--usp-remoods-hue), 0%, 0%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-bg-color-hover:.+?;/gms, '  --g-item-bg-color-hover: hsl(var(--usp-remoods-hue), 40%, 21%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-bg-color-selected:.+?;/gms, '  --g-item-bg-color-selected: hsl(var(--usp-remoods-hue), 55%, 45%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-shadow-hover:.+?;/gms, '  --g-item-shadow-hover: hsl(var(--usp-remoods-hue), 100%, 45%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-divider-color:.+?;/gms, '  --g-item-divider-color: hsl(var(--usp-remoods-hue), 20%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-text-color:.+?;/gms, '  --g-item-text-color: hsl(var(--usp-remoods-hue), 40%, 95%);');
    chromeCSS = chromeCSS.replace(/^  --g-item-text-color-2:.+?;/gms, '  --g-item-text-color-2: hsl(var(--usp-remoods-hue), 75%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-bg-color:.+?;/gms, '  --g-lighter-square-btn-bg-color: none;');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-bg-color-hover:.+?;/gms, '  --g-lighter-square-btn-bg-color-hover: hsl(var(--usp-remoods-hue), 20%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-bd-color:.+?;/gms, '  --g-lighter-square-btn-bd-color: transparent;');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-bd-color-hover:.+?;/gms, '  --g-lighter-square-btn-bd-color-hover: hsl(var(--usp-remoods-hue), 45%, 55%);');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-icon-color:.+?;/gms, '  --g-lighter-square-btn-icon-color: hsl(var(--usp-remoods-hue), 100%, 10%);');
    chromeCSS = chromeCSS.replace(/^  --g-lighter-square-btn-icon-color-hover:.+?;/gms, '  --g-lighter-square-btn-icon-color-hover: hsl(var(--usp-remoods-hue), 100%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-bg-color:.+?;/gms, '  --g-darker-square-btn-bg-color: none;');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-bg-color-hover:.+?;/gms, '  --g-darker-square-btn-bg-color-hover: hsl(var(--usp-remoods-hue), 20%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-bd-color:.+?;/gms, '  --g-darker-square-btn-bd-color: transparent;');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-bd-color-hover:.+?;/gms, '  --g-darker-square-btn-bd-color-hover: hsl(var(--usp-remoods-hue), 45%, 55%);');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-icon-color:.+?;/gms, '  --g-darker-square-btn-icon-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --g-darker-square-btn-icon-color-hover:.+?;/gms, '  --g-darker-square-btn-icon-color-hover: hsl(var(--usp-remoods-hue), 100%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --g-scrollbar-thumb-bg-color-1:.+?;/gms, '  --g-scrollbar-thumb-bg-color-1: hsl(var(--usp-remoods-hue), 55%, 45%);');
    chromeCSS = chromeCSS.replace(/^  --g-scrollbar-track-bg-color-1:.+?;/gms, '  --g-scrollbar-track-bg-color-1: hsl(var(--usp-remoods-hue), 20%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --g-input-text-color-1:.+?;/gms, '  --g-input-text-color-1: hsl(var(--usp-remoods-hue), 100%, 85%);');
    chromeCSS = chromeCSS.replace(/^  --g-input-bg-color-1:.+?;/gms, '  --g-input-bg-color-1: hsl(var(--usp-remoods-hue), 11%, 13%);');
    chromeCSS = chromeCSS.replace(/^  --g-input-bd-color-1:.+?;/gms, '  --g-input-bd-color-1: hsl(var(--usp-remoods-hue), 50%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --g-toolbar-bg-color:.+?;/gms, '  --g-toolbar-bg-color: hsl(var(--usp-remoods-hue), 11%, 13%);');
    chromeCSS = chromeCSS.replace(/^  --g-toolbar-bd-color:.+?;/gms, '  --g-toolbar-bd-color: hsl(var(--usp-remoods-hue), 70%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --g-editor-panel-divider-color:.+?;/gms, '  --g-editor-panel-divider-color: hsl(var(--usp-remoods-hue), 20%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --g-option-main-bg-color:.+?;/gms, '  --g-option-main-bg-color: hsl(var(--usp-remoods-hue), 8%, 11%);');
    chromeCSS = chromeCSS.replace(/^  --s-directory-icon-open-color:.+?;/gms, '  --s-directory-icon-open-color: hsl(var(--usp-remoods-hue), 20%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-directory-icon-shadow:.+?;/gms, '  --s-directory-icon-open-shadow: hsl(var(--usp-remoods-hue), 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-directory-icon-close-color:.+?;/gms, '  --s-directory-icon-close-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 100%, 65%);');
    chromeCSS = chromeCSS.replace(/^  --s-directory-icon-close-shadow:.+?;/gms, '  --s-directory-icon-close-shadow: hsl(calc(var(--usp-remoods-hue) + 180deg), 100%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --s-note-count-label-text-color:.+?;/gms, '  --s-note-count-label-text-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
    chromeCSS = chromeCSS.replace(/^  --s-note-count-label-bg-color:.+?;/gms, '  --s-note-count-label-bg-color: hsl(var(--usp-remoods-hue), 60%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-note-count-label-bd-color:.+?;/gms, '  --s-note-count-label-bd-color: hsl(var(--usp-remoods-hue), 50%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-note-count-label-shadow:.+?;/gms, '  --s-note-count-label-shadow: 0 0 1px hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-info-text-color:.+?;/gms, '  --s-sync-info-text-color: hsl(var(--usp-remoods-hue), 100%, 95%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-info-symbol-color:.+?;/gms, '  --s-sync-info-symbol-color: radial-gradient(hsl(var(--usp-remoods-hue), 100%, 80%) 25%, hsl(var(--usp-remoods-hue), 100%, 50%) 55%, hsl(var(--usp-remoods-hue), 100%, 80%) 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-bg-color:.+?;/gms, '  --s-sync-btn-bg-color: transparent;');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-bd-color:.+?;/gms, '  --s-sync-btn-bd-color: hsl(var(--usp-remoods-hue), 20%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-bg-color-hover:.+?;/gms, '  --s-sync-btn-bg-color-hover: hsl(var(--usp-remoods-hue), 30%, 10%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-bd-color-hover:.+?;/gms, '  --s-sync-btn-bd-color-hover: hsl(var(--usp-remoods-hue), 50%, 45%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-text-color:.+?;/gms, '  --s-sync-btn-text-color: hsl(var(--usp-remoods-hue), 0%, 50%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-text-color-hover:.+?;/gms, '  --s-sync-btn-text-color-hover: hsl(var(--usp-remoods-hue), 40%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-icon-text-shadow:.+?;/gms, '  --s-sync-btn-icon-text-shadow: none;');
    chromeCSS = chromeCSS.replace(/^  --s-sync-btn-icon-text-shadow-hover:.+?;/gms, '  --s-sync-btn-icon-text-shadow-hover: hsl(var(--usp-remoods-hue), 50%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-todo-text-color:.+?;/gms, '  --s-todo-text-color: hsl(var(--usp-remoods-hue), 80%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-notelist-search-btn-color:.+?;/gms, '  --s-notelist-search-btn-color: hsl(var(--usp-remoods-hue), 0%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-notelist-search-btn-color-hover:.+?;/gms, '  --s-notelist-search-btn-color-hover: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-nav-btn-bg-color:.+?;/gms, '  --s-notebook-nav-btn-bg-color: hsl(var(--usp-remoods-hue), 30%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-nav-btn-bd-color:.+?;/gms, '  --s-notebook-nav-btn-bd-color: hsl(var(--usp-remoods-hue), 100%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-nav-btn-shadow:.+?;/gms, '  --s-notebook-nav-btn-shadow: hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-nav-btn-text-color:.+?;/gms, '  --s-notebook-nav-btn-text-color: hsl(var(--usp-remoods-hue), 100%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-batch-menu-btn-text-color:.+?;/gms, '  --s-batch-menu-btn-text-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-batch-menu-btn-bg-color:.+?;/gms, '  --s-batch-menu-btn-bg-color: hsl(var(--usp-remoods-hue), 50%, 10%);');
    chromeCSS = chromeCSS.replace(/^  --s-batch-menu-btn-bd-color:.+?;/gms, '  --s-batch-menu-btn-bd-color: hsl(var(--usp-remoods-hue), 100%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-update-time-label-bg-color:.+?;/gms, '  --s-update-time-label-bg-color: hsl(var(--usp-remoods-hue), 100%, 10%);');
    chromeCSS = chromeCSS.replace(/^  --s-update-time-label-text-color:.+?;/gms, '  --s-update-time-label-text-color: hsl(var(--usp-remoods-hue), 100%, 75%);');
    chromeCSS = chromeCSS.replace(/^  --s-tagbar-tag-text-color:.+?;/gms, '  --s-tagbar-tag-text-color: hsl(var(--usp-remoods-hue), 20%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-tagbar-tag-text-color-hover:.+?;/gms, '  --s-tagbar-tag-text-color-hover: hsl(var(--usp-remoods-hue), 20%, 95%);');
    chromeCSS = chromeCSS.replace(/^  --s-tagbar-tag-text-shadow-hover:.+?;/gms, '  --s-tagbar-tag-text-shadow-hover: hsl(var(--usp-remoods-hue), 100%, 25%);');
    chromeCSS = chromeCSS.replace(/^  --s-tagbar-tag-divider-color:.+?;/gms, '  --s-tagbar-tag-divider-color: hsl(var(--usp-remoods-hue), 100%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-tagbar-hint-text-color:.+?;/gms, '  --s-tagbar-hint-text-color: hsl(var(--usp-remoods-hue), 40%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-bg-color:.+?;/gms, '  --s-modal-dialog-bg-color: hsl(var(--usp-remoods-hue), 11%, 13%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-label-color:.+?;/gms, '  --s-modal-dialog-label-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-title-text-color:.+?;/gms, '  --s-modal-dialog-title-text-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-confirm-btn-text-color:.+?;/gms, '  --s-modal-dialog-confirm-btn-text-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-confirm-btn-bg-color:.+?;/gms, '  --s-modal-dialog-confirm-btn-bg-color: hsl(var(--usp-remoods-hue), 40%, 15%);');
    chromeCSS = chromeCSS.replace(/^  --s-modal-dialog-confirm-btn-bd-color:.+?;/gms, '  --s-modal-dialog-confirm-btn-bd-color: hsl(var(--usp-remoods-hue), 100%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-creator-icon-select-btn-bg-color:.+?;/gms, '  --s-notebook-creator-icon-select-btn-bg-color: hsl(var(--usp-remoods-hue), 50%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-creator-icon-select-btn-bd-color:.+?;/gms, '  --s-notebook-creator-icon-select-btn-bd-color: hsl(var(--usp-remoods-hue), 100%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-notebook-creator-icon-select-btn-text-color:.+?;/gms, '  --s-notebook-creator-icon-select-btn-text-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-tag-selector-bg-color:.+?;/gms, '  --s-tag-selector-bg-color: hsl(var(--usp-remoods-hue), 50%, 10%);');
    chromeCSS = chromeCSS.replace(/^  --s-tag-selector-bd-color:.+?;/gms, '  --s-tag-selector-bd-color: hsl(var(--usp-remoods-hue), 100%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-tag-selector-input-text-color:.+?;/gms, '  --s-tag-selector-input-text-color: hsl(var(--usp-remoods-hue), 100%, 40%);');
    chromeCSS = chromeCSS.replace(/^  --s-tag-selector-divider-color:.+?;/gms, '  --s-tag-selector-divider-color: hsl(var(--usp-remoods-hue), 100%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-tag-selector-text-color:.+?;/gms, '  --s-tag-selector-text-color: hsl(var(--usp-remoods-hue), 20%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-command-palette-item-bg-color:.+?;/gms, '  --s-command-palette-item-bg-color: hsl(var(--usp-remoods-hue), 11%, 13%);');
    chromeCSS = chromeCSS.replace(/^  --s-command-palette-item-bg-color-selected:.+?;/gms, '  --s-command-palette-item-bg-color-selected: hsl(var(--usp-remoods-hue), 30%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-command-palette-item-bd-color:.+?;/gms, '  --s-command-palette-item-bd-color: hsl(var(--usp-remoods-hue), 30%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-command-palette-item-text-color:.+?;/gms, '  --s-command-palette-item-text-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-guide-text-color:.+?;/gms, '  --s-option-guide-text-color: hsl(var(--usp-remoods-hue), 30%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-guide-bg-color:.+?;/gms, '  --s-option-guide-bg-color: hsl(var(--usp-remoods-hue), 17%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-label-text-color:.+?;/gms, '  --s-option-label-text-color: hsl(var(--usp-remoods-hue), 20%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-op-input-color:.+?;/gms, '  --s-op-input-color: hsl(var(--usp-remoods-hue), 20%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-btn-bg-color:.+?;/gms, '  --s-option-btn-bg-color: hsl(var(--usp-remoods-hue), 30%, 25%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-btn-bd-color:.+?;/gms, '  --s-option-btn-bd-color: hsl(var(--usp-remoods-hue), 40%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-btn-text-color:.+?;/gms, '  --s-option-btn-text-color: hsl(var(--usp-remoods-hue), 60%, 90%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-description-text-color:.+?;/gms, '  --s-option-description-text-color: hsl(var(--usp-remoods-hue), 20%, 60%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-table-text-color:.+?;/gms, '  --s-option-table-text-color: hsl(var(--usp-remoods-hue), 40%, 70%);');
    chromeCSS = chromeCSS.replace(/^  --s-plugin-card-bd-color:.+?;/gms, '  --s-plugin-card-bd-color: hsl(var(--usp-remoods-hue), 30%, 30%);');
    chromeCSS = chromeCSS.replace(/^  --s-plugin-card-shadow:.+?;/gms, '  --s-plugin-card-shadow: hsl(var(--usp-remoods-hue), 100%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --s-plugin-card-text-color:.+?;/gms, '  --s-plugin-card-text-color: hsl(var(--usp-remoods-hue), 20%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-plugin-card-switcher-bg-color:.+?;/gms, '  --s-plugin-card-switcher-bg-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-confirm-btn-bg-color:.+?;/gms, '  --s-option-confirm-btn-bg-color: hsl(var(--usp-remoods-hue), 50%, 10%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-confirm-btn-bd-color:.+?;/gms, '  --s-option-confirm-btn-bd-color: hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-confirm-btn-shadow:.+?;/gms, '  --s-option-confirm-btn-shadow: hsl(var(--usp-remoods-hue), 100%, 80%);');
    chromeCSS = chromeCSS.replace(/^  --s-option-confirm-btn-text-color:.+?;/gms, '  --s-option-confirm-btn-text-color: hsl(var(--usp-remoods-hue),  60%, 90%);');
    noteCSS = noteCSS.replace(/^  --render-viewer-bg-color:.+?;/gms, '  --render-viewer-bg-color: hsl(var(--usp-remoods-hue), 11%, 13%);');
    noteCSS = noteCSS.replace(/^  --render-viewer-bg-color-2:.+?;/gms, '  --render-viewer-bg-color-2: hsl(var(--usp-remoods-hue), 8%, 11%);');
    noteCSS = noteCSS.replace(/^  --render-viewer-text-color:.+?;/gms, '  --render-viewer-text-color: hsl(var(--usp-remoods-hue), 0%, 77%);');
    noteCSS = noteCSS.replace(/^  --horizontal-line-bg:.+?;/gms, '  --horizontal-line-bg: none;');
    noteCSS = noteCSS.replace(/^  --horizontal-line-bgi:.+?;/gms, '  --horizontal-line-bgi: repeating-linear-gradient(114deg, hsl(var(--usp-remoods-hue), 100%, 80%), hsl(var(--usp-remoods-hue), 100%, 35%, 50%), hsl(var(--usp-remoods-hue), 100%, 80%)  3px);');
    noteCSS = noteCSS.replace(/^  --render-viewer-scrollbar-thumb-bg-color:.+?;/gms, '  --render-viewer-scrollbar-thumb-bg-color: hsl(var(--usp-remoods-hue), 55%, 45%);');
    noteCSS = noteCSS.replace(/^  --bc-scrollbar-thumb-bd-color:.+?;/gms, '  --bc-scrollbar-thumb-bd-color: transparent;');
    noteCSS = noteCSS.replace(/^  --bc-scrollbar-thumb-bg-color:.+?;/gms, '  --bc-scrollbar-thumb-bg-color: radial-gradient(hsl(var(--usp-remoods-hue), 30%, 50%) 30%, hsl(var(--usp-remoods-hue), 40%, 60%) 70%);');
    noteCSS = noteCSS.replace(/^  --bc-scrollbar-thumb-bg-color-hover:.+?;/gms, '  --bc-scrollbar-thumb-bg-color-hover: radial-gradient( hsl(var(--usp-remoods-hue), 50%, 50%) 30%, hsl(var(--usp-remoods-hue), 60%, 60%) 70%);');
    noteCSS = noteCSS.replace(/^  --heading-ref-text-color:.+?;/gms, '  --heading-ref-text-color: hsl(0, 0%, 65%);');
    noteCSS = noteCSS.replace(/^  --h1-color:.+?;/gms, '  --h1-color: hsl(var(--usp-remoods-hue), 40%, 80%);');
    noteCSS = noteCSS.replace(/^  --h1-bg-color:.+?;/gms, '  --h1-bg-color: repeating-linear-gradient(114deg, hsl(var(--usp-remoods-hue), 40%, 80%), hsl(var(--usp-remoods-hue), 40%, 65%, 30%), hsl(var(--usp-remoods-hue), 40%, 80%) 3px);');
    noteCSS = noteCSS.replace(/^  --h1-bd-color:.+?;/gms, '  --h1-bd-color: var(--h1-bg-color);');
    noteCSS = noteCSS.replace(/^  --h2-color:.+?;/gms, '  --h2-color: hsl(var(--usp-remoods-hue), 35%, 70%);');
    noteCSS = noteCSS.replace(/^  --h2-bd-color:.+?;/gms, '  --h2-bd-color: linear-gradient(to right, hsl(var(--usp-remoods-hue), 35%, 70%) 50%, transparent);');
    noteCSS = noteCSS.replace(/^  --h3-color:.+?;/gms, '  --h3-color: var(--h2-color);');
    noteCSS = noteCSS.replace(/^  --h3-bd-color:.+?;/gms, '  --h3-bd-color: var(--h2-bd-color);');
    noteCSS = noteCSS.replace(/^  --h4-color:.+?;/gms, '  --h4-color: var(--h2-color);');
    noteCSS = noteCSS.replace(/^  --h4-bd-color:.+?;/gms, '  --h4-bd-color: var(--h2-bd-color);');
    noteCSS = noteCSS.replace(/^  --h5-color:.+?;/gms, '  --h5-color: hsl(var(--usp-remoods-hue), 10%, 65%);');
    noteCSS = noteCSS.replace(/^  --h5-bd-color:.+?;/gms, '  --h5-bd-color: linear-gradient(to right, transparent 50%, var(--render-viewer-bg-color) 100%), repeating-linear-gradient(to right, hsl(var(--usp-remoods-hue), 10%, 65%), 2px, transparent, 2px, transparent 5px);');
    noteCSS = noteCSS.replace(/^  --h6-color:.+?;/gms, '  --h6-color: var(--h5-color);');
    noteCSS = noteCSS.replace(/^  --h6-bd-color:.+?;/gms, '  --h6-bd-color: var(--h5-bd-color);');
    noteCSS = noteCSS.replace(/^  --special-text-color:.+?;/gms, '  --special-text-shadow: 0 0 none;');
    noteCSS = noteCSS.replace(/^  --strong-text-color:.+?;/gms, '  --strong-text-color: hsl(var(--usp-remoods-hue), 80%, 80%);');
    noteCSS = noteCSS.replace(/^  --emphasize-text-color:.+?;/gms, '  --emphasize-text-color: var(--strong-text-color);');
    noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue), 20%, 60%);');
    noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
    noteCSS = noteCSS.replace(/^  --strikethrough-symbol-color:.+?;/gms, '  --strikethrough-symbol-color: hsl(0, 0%, 100%);');
    noteCSS = noteCSS.replace(/^  --strikethrough-symbol-bg-color:.+?;/gms, '  --strikethrough-symbol-bg-color: hsl(0, 70%, 55%);');
    noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 40%, 60%);');
    noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
    noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue), 20%, 60%);');
    noteCSS = noteCSS.replace(/^  --insert-symbol-color:.+?;/gms, '  --insert-symbol-color: hsl(0, 0%, 100%);');
    noteCSS = noteCSS.replace(/^  --insert-symbol-bg-color:.+?;/gms, '  --insert-symbol-bg-color: hsl(100, 60%, 45%);');
    noteCSS = noteCSS.replace(/^  --abbreviation-text-color:.+?;/gms, '  --abbreviation-text-color: hsl(var(--usp-remoods-hue), 40%, 85%);');
    noteCSS = noteCSS.replace(/^  --abbreviation-bd-color:.+?;/gms, '  --abbreviation-bd-color: hsl(var(--usp-remoods-hue), 40%, 85%);');
    noteCSS = noteCSS.replace(/^  --mark-text-color:.+?;/gms, '  --mark-text-color: hsl(var(--usp-remoods-hue), 20%, 20%);');
    noteCSS = noteCSS.replace(/^  --mark-text-bg-color:.+?;/gms, '  --mark-text-bg-color: hsl(var(--usp-remoods-hue), 70%, 70%);');
    noteCSS = noteCSS.replace(/^  --search-text-color:.+?;/gms, '  --search-text-color: hsl(var(--usp-remoods-hue), 0%, 100%);');
    noteCSS = noteCSS.replace(/^  --search-text-bg-color:.+?;/gms, '  --search-text-bg-color: hsl(var(--usp-remoods-hue), 0%, 0%);');
    noteCSS = noteCSS.replace(/^  --search-text-bd-color:.+?;/gms, '  --search-text-bd-color: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --inline-code-color:.+?;/gms, '  --inline-code-color: hsl(var(--usp-remoods-hue), 75%, 75%);');
    noteCSS = noteCSS.replace(/^  --inline-code-bg-color:.+?;/gms, '  --inline-code-bg-color: hsl(var(--usp-remoods-hue), 40%, 20%);');
    noteCSS = noteCSS.replace(/^  --inline-code-bd-color:.+?;/gms, '  --inline-code-bd-color: 2px solid hsl(var(--usp-remoods-hue), 30%, 40%);');
    noteCSS = noteCSS.replace(/^  --inline-code-symbol-color:.+?;/gms, '  --inline-code-symbol-color: hsl(var(--usp-remoods-hue), 30%, 50%);');
    noteCSS = noteCSS.replace(/^  --katex-text-color:.+?;/gms, '  --katex-text-color: hsl(var(--usp-remoods-hue), 40%, 80%);');
    noteCSS = noteCSS.replace(/^  --list-token-color:.+?;/gms, '  --list-token-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 35%, 80%);');
    noteCSS = noteCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: hsl(var(--usp-remoods-hue), 35%, 80%);');
    noteCSS = noteCSS.replace(/^  --list-span-color:.+?;/gms, '  --list-span-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --link-text-color:.+?;/gms, '  --link-text-color: hsl(var(--usp-remoods-hue), 40%, 75%);');
    noteCSS = noteCSS.replace(/^  --link-source-icon-color:.+?;/gms, '  --link-source-icon-color: hsl(var(--usp-remoods-hue), 40%, 75%);');
    noteCSS = noteCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 50%, 65%);');
    noteCSS = noteCSS.replace(/^  --fn-title-color:.+?;/gms, '  --fn-title-color: hsl(var(--usp-remoods-hue), 0%, 60%);');
    noteCSS = noteCSS.replace(/^  --fn-title-bd-color:.+?;/gms, '  --fn-title-bd-color: 3px double hsl(var(--usp-remoods-hue), 0%, 60%);');
    noteCSS = noteCSS.replace(/^  --fn-list-text-color:.+?;/gms, '  --fn-list-text-color: hsl(var(--usp-remoods-hue), 0%, 60%);');
    noteCSS = noteCSS.replace(/^  --fn-list-token-color:.+?;/gms, '  --fn-list-token-color: hsl(var(--usp-remoods-hue), 0%, 40%);');
    noteCSS = noteCSS.replace(/^  --blockquote-bd-color:.+?;/gms, '  --blockquote-bd-color: 5px dotted hsl(var(--usp-remoods-hue), 15%, 50%);');
    noteCSS = noteCSS.replace(/^  --blockquote-text-color:.+?;/gms, '  --blockquote-text-color: hsl(var(--usp-remoods-hue), 0%, 60%);');
    noteCSS = noteCSS.replace(/^  --table-text-color:.+?;/gms, '  --table-text-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --table-header-bg-color:.+?;/gms, '  --table-header-bg-color: hsl(var(--usp-remoods-hue), 70%, 30%);');
    noteCSS = noteCSS.replace(/^  --table-header-text-shadow:.+?;/gms, '  --table-header-text-shadow: 0 0 2px black; ');
    noteCSS = noteCSS.replace(/^  --table-row-odd-bg-color:.+?;/gms, '  --table-row-odd-bg-color: hsl(var(--usp-remoods-hue), 20%, 16%);');
    noteCSS = noteCSS.replace(/^  --table-row-even-bg-color:.+?;/gms, '  --table-row-even-bg-color: hsl(var(--usp-remoods-hue), 20%, 22%);');
    noteCSS = noteCSS.replace(/^  --table-bd-color:.+?;/gms, '  --table-bd-color: 2px solid var(--render-viewer-bg-color);');
    noteCSS = noteCSS.replace(/^  --toc-bg-color:.+?;/gms, '  --toc-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --toc-bd-color:.+?;/gms, '  --toc-bd-color: hsl(var(--usp-remoods-hue), 40%, 60%);');
    noteCSS = noteCSS.replace(/^  --toc-box-shadow:.+?;/gms, '  --toc-box-shadow: 0 0 10px hsl(var(--usp-remoods-hue), 40%, 30%);');
    noteCSS = noteCSS.replace(/^  --toc-btn-text-color:.+?;/gms, '  --toc-btn-text-color: var(--render-viewer-bg-color);');
    noteCSS = noteCSS.replace(/^  --toc-btn-bg-color:.+?;/gms, '  --toc-btn-bg-color: hsl(var(--usp-remoods-hue), 40%, 75%);');
    noteCSS = noteCSS.replace(/^  --toc-btn-bd-color:.+?;/gms, '  --toc-btn-bd-color: 2px solid hsl(var(--usp-remoods-hue), 40%, 90%);');
    noteCSS = noteCSS.replace(/^  --toc-btn-box-shadow:.+?;/gms, '  --toc-btn-box-shadow: 0 0 5px hsl(var(--usp-remoods-hue), 40%, 60%);');
    noteCSS = noteCSS.replace(/^  --toc-list-bd-color:.+?;/gms, '  --toc-list-bd-color: 1px solid hsl(var(--usp-remoods-hue), 25%, 25%);');
    noteCSS = noteCSS.replace(/^  --toc-link-text-color-hover:.+?;/gms, '  --toc-link-text-color-hover: hsl(var(--usp-remoods-hue), 0%, 90%);');
    noteCSS = noteCSS.replace(/^  --toc-link-bg-color-hover:.+?;/gms, '  --toc-link-bg-color-hover: hsl(var(--usp-remoods-hue), 25%, 20%);');
    noteCSS = noteCSS.replace(/^  --cb-bg-color:.+?;/gms, '  --cb-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --cb-bd-color:.+?;/gms, '  --cb-bd-color: hsl(var(--usp-remoods-hue), 40%, 60%);');
    noteCSS = noteCSS.replace(/^  --cb-shadow:.+?;/gms, '  --cb-shadow: 0 0 4px hsl(var(--usp-remoods-hue), 40%, 50%);');
    noteCSS = noteCSS.replace(/^  --cb-comment-color:.+?;/gms, '  --cb-comment-color: hsl(var(--usp-remoods-hue), 0%, 50%);');
    noteCSS = noteCSS.replace(/^  --cb-comment-shadow:.+?;/gms, '  --cb-comment-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-number-color:.+?;/gms, '  --cb-number-color: hsl(calc(var(--usp-remoods-hue) + 110deg), 50%, 56%);');
    noteCSS = noteCSS.replace(/^  --cb-number-shadow:.+?;/gms, '  --cb-number-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-string-color:.+?;/gms, '  --cb-string-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 50%, 65%);');
    noteCSS = noteCSS.replace(/^  --cb-string-shadow:.+?;/gms, '  --cb-string-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-params-color:.+?;/gms, '  --cb-params-color: hsl(calc(var(--usp-remoods-hue) + 300deg), 50%, 65%);');
    noteCSS = noteCSS.replace(/^  --cb-params-shadow:.+?;/gms, '  --cb-params-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-title-color:.+?;/gms, '  --cb-title-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 50%, 55%);');
    noteCSS = noteCSS.replace(/^  --cb-title-shadow:.+?;/gms, '  --cb-title-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-selector-id-color:.+?;/gms, '  --cb-selector-id-color: hsl(calc(var(--usp-remoods-hue) + 159deg), 50%, 65%);');
    noteCSS = noteCSS.replace(/^  --cb-selector-id-shadow:.+?;/gms, '  --cb-selector-id-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-selector-pseudo-color:.+?;/gms, '  --cb-selector-pseudo-color: hsl(calc(var(--usp-remoods-hue) + 323deg), 50%, 75%);');
    noteCSS = noteCSS.replace(/^  --cb-selector-pseudo-shadow:.+?;/gms, '  --cb-selector-pseudo-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-selector-attr-color:.+?;/gms, '  --cb-selector-attr-color: hsl(calc(var(--usp-remoods-hue) + 300deg), 70%, 75%);');
    noteCSS = noteCSS.replace(/^  --cb-selector-attr-shadow:.+?;/gms, '  --cb-selector-attr-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-text-color:.+?;/gms, '  --cb-text-color: hsl(var(--usp-remoods-hue), 0%, 80%);');
    noteCSS = noteCSS.replace(/^  --cb-text-shadow:.+?;/gms, '  --cb-text-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-title-class-color:.+?;/gms, '  --cb-title-class-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-title-class-shadow:.+?;/gms, '  --cb-title-class-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-function-color:.+?;/gms, '  --cb-function-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-function-shadow:.+?;/gms, '  --cb-function-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-function-title-color:.+?;/gms, '  --cb-function-title-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-function-title-shadow:.+?;/gms, '  --cb-function-title-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-function-params-color:.+?;/gms, '  --cb-function-params-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-function-params-shadow:.+?;/gms, '  --cb-function-params-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-class-title-color:.+?;/gms, '  --cb-class-title-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-class-title-shadow:.+?;/gms, '  --cb-class-title-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-operator-color:.+?;/gms, '  --cb-operator-color: var(--cb-text-color);');
    noteCSS = noteCSS.replace(/^  --cb-operator-shadow:.+?;/gms, '  --cb-operator-shadow: var(--cb-text-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-keyword-color:.+?;/gms, '  --cb-keyword-color: hsl(var(--usp-remoods-hue), 65%, 60%);');
    noteCSS = noteCSS.replace(/^  --cb-keyword-shadow:.+?;/gms, '  --cb-keyword-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-variable-language-color:.+?;/gms, '  --cb-variable-language-color: var(--cb-keyword-color);');
    noteCSS = noteCSS.replace(/^  --cb-variable-language-shadow:.+?;/gms, '  --cb-variable-language-shadow: var(--cb-keyword-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-doctag-color:.+?;/gms, '  --cb-doctag-color: var(--cb-keyword-color);');
    noteCSS = noteCSS.replace(/^  --cb-doctag-shadow:.+?;/gms, '  --cb-doctag-shadow: var(--cb-keyword-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-title-function-color:.+?;/gms, '  --cb-title-function-color: hsl(var(--usp-remoods-hue), 40%, 75%);');
    noteCSS = noteCSS.replace(/^  --cb-title-function-shadow:.+?;/gms, '  --cb-title-function-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-property-color:.+?;/gms, '  --cb-property-color: var(--cb-title-function-color);');
    noteCSS = noteCSS.replace(/^  --cb-property-shadow:.+?;/gms, '  --cb-property-shadow: var(--cb-title-function-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-attr-color:.+?;/gms, '  --cb-attr-color: var(--cb-title-function-color);');
    noteCSS = noteCSS.replace(/^  --cb-attr-shadow:.+?;/gms, '  --cb-attr-shadow: var(--cb-title-function-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-attribute-color:.+?;/gms, '  --cb-attribute-color: var(--cb-title-function-color);');
    noteCSS = noteCSS.replace(/^  --cb-attribute-shadow:.+?;/gms, '  --cb-attribute-shadow: var(--cb-title-function-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-title-class-inherited-color:.+?;/gms, '  --cb-title-class-inherited-color: hsl(calc(var(--usp-remoods-hue) + 260deg), 50%, 65%);');
    noteCSS = noteCSS.replace(/^  --cb-title-class-inherited-shadow:.+?;/gms, '  --cb-title-class-inherited-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-built-in-color:.+?;/gms, '  --cb-built-in-color: var(--cb-title-class-inherited-color);');
    noteCSS = noteCSS.replace(/^  --cb-built-in-shadow:.+?;/gms, '  --cb-built-in-shadow: var(--cb-title-class-inherited-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-selector-class-color:.+?;/gms, '  --cb-selector-class-color: var(--cb-title-class-inherited-color);');
    noteCSS = noteCSS.replace(/^  --cb-selector-class-shadow:.+?;/gms, '  --cb-selector-class-shadow: var(--cb-title-class-inherited-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-html-attr-color:.+?;/gms, '  --cb-html-attr-color: var(--cb-title-class-inherited-color);');
    noteCSS = noteCSS.replace(/^  --cb-html-attr-shadow:.+?;/gms, '  --cb-html-attr-shadow: var(--cb-title-class-inherited-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-type-color:.+?;/gms, '  --cb-type-color: var(--cb-title-class-inherited-color);');
    noteCSS = noteCSS.replace(/^  --cb-type-shadow:.+?;/gms, '  --cb-type-shadow: var(--cb-title-class-inherited-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-literal-color:.+?;/gms, '  --cb-literal-color: hsl(calc(var(--usp-remoods-hue) + 148deg), 50%, 55%);');
    noteCSS = noteCSS.replace(/^  --cb-literal-shadow:.+?;/gms, '  --cb-literal-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-meta-color:.+?;/gms, '  --cb-meta-color: var(--cb-literal-color);');
    noteCSS = noteCSS.replace(/^  --cb-meta-shadow:.+?;/gms, '  --cb-meta-shadow: var(--cb-literal-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-symbol-color:.+?;/gms, '  --cb-symbol-color: var(--cb-literal-color);');
    noteCSS = noteCSS.replace(/^  --cb-symbol-shadow:.+?;/gms, '  --cb-symbol-shadow: var(--cb-literal-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-subst-color:.+?;/gms, '  --cb-subst-color: hsl(calc(var(--usp-remoods-hue) +  90deg), 50%, 65%);');
    noteCSS = noteCSS.replace(/^  --cb-subst-shadow:.+?;/gms, '  --cb-subst-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-variable-text-color:.+?;/gms, '  --cb-variable-text-color: var(--cb-subst-color);');
    noteCSS = noteCSS.replace(/^  --cb-variable-text-shadow:.+?;/gms, '  --cb-variable-shadow: var(--cb-subst-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-regexp-color:.+?;/gms, '  --cb-regexp-color: var(--cb-subst-color);');
    noteCSS = noteCSS.replace(/^  --cb-regexp-shadow:.+?;/gms, '  --cb-regexp-shadow: var(--cb-subst-shadow);');
    noteCSS = noteCSS.replace(/^  --cb-selector-tag-color:.+?;/gms, '  --cb-selector-tag-color: hsl(calc(var(--usp-remoods-hue) + 120deg), 50%, 60%);');
    noteCSS = noteCSS.replace(/^  --cb-selector-tag-shadow:.+?;/gms, '  --cb-selector-tag-shadow: none;');
    noteCSS = noteCSS.replace(/^  --cb-tag-color:.+?;/gms, '  --cb-tag-color: var(--cb-selector-tag-color);');
    noteCSS = noteCSS.replace(/^  --cb-tag-shadow:.+?;/gms, '  --cb-tag-shadow: var(--cb-selector-tag-shadow);');
    noteCSS = noteCSS.replace(/^  --ag-bg-color:.+?;/gms, '  --ag-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --ag-bd-color:.+?;/gms, '  --ag-bd-color: hsl(var(--usp-remoods-hue), 40%, 60%);');
    noteCSS = noteCSS.replace(/^  --ag-drop-shadow:.+?;/gms, '  --ag-drop-shadow: 0 0 2px hsl(var(--usp-remoods-hue), 40%, 50%);');
    noteCSS = noteCSS.replace(/^  --sn-text-color:.+?;/gms, '  --sn-text-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --sn-bg-color:.+?;/gms, '  --sn-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --sn-bd-color:.+?;/gms, '  --sn-bd-color: hsl(var(--usp-remoods-hue), 40%, 60%);');
    noteCSS = noteCSS.replace(/^  --sn-drop-shadow:.+?;/gms, '  --sn-drop-shadow: 0px 0px 2px hsl(var(--usp-remoods-hue), 40%, 50%);');
    noteCSS = noteCSS.replace(/^  --sn-important-text-color:.+?;/gms, '  --sn-important-text-color: hsl(40, 50%, 70%);');
    noteCSS = noteCSS.replace(/^  --sn-important-bg-color:.+?;/gms, '  --sn-important-bg-color: hsl(0, 100%, 20%);');
    noteCSS = noteCSS.replace(/^  --sn-important-bd-color:.+?;/gms, '  --sn-important-bd-color: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --sn-important-box-shadow:.+?;/gms, '  --sn-important-box-shadow: 0 0 6px hsl(0, 100%, 10%);');
    noteCSS = noteCSS.replace(/^  --sn-tags-text-color:.+?;/gms, '  --sn-tags-text-color: hsl(0, 0%, 90%);');
    noteCSS = noteCSS.replace(/^  --sn-tags-text-shadow:.+?;/gms, '  --sn-tags-text-shadow: 1px 1px 2px hsl(var(--usp-remoods-hue), 0%, 0%);');
    noteCSS = noteCSS.replace(/^  --sn-note-tag-bg-color:.+?;/gms, '  --sn-note-tag-bg-color: hsl(206, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-tip-tag-bg-color:.+?;/gms, '  --sn-tip-tag-bg-color: hsl(56, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-question-tag-bg-color:.+?;/gms, '  --sn-question-tag-bg-color: hsl(270, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-explain-tag-bg-color:.+?;/gms, '  --sn-explain-tag-bg-color: hsl(163, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-warning-tag-bg-color:.+?;/gms, '  --sn-warning-tag-bg-color: hsl(0, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-keyword-tag-bg-color:.+?;/gms, '  --sn-keyword-tag-bg-color: hsl(324, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-comment-tag-bg-color:.+?;/gms, '  --sn-comment-tag-bg-color: hsl(100, 100%, 38%);');
    noteCSS = noteCSS.replace(/^  --sn-important-tag-text-color:.+?;/gms, '  --sn-important-tag-text-color: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --sn-important-tag-bg-color:.+?;/gms, '  --sn-important-tag-bg-color: hsl(0, 100%, 12%);');
    noteCSS = noteCSS.replace(/^  --sn-important-tag-bd-color:.+?;/gms, '  --sn-important-tag-bd-color: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --ctb-bg-color:.+?;/gms, '  --ctb-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --ctb-drop-shadow:.+?;/gms, '  --ctb-drop-shadow: 0 0 2px hsl(var(--usp-remoods-hue), 40%, 60%);');
    noteCSS = noteCSS.replace(/^  --ctb-title-color:.+?;/gms, '  --ctb-title-color: hsl(var(--usp-remoods-hue), 40%, 70%);');
    noteCSS = noteCSS.replace(/^  --ctb-symbol-bg-color:.+?;/gms, '  --ctb-symbol-bg-color: repeating-radial-gradient(circle, hsl(var(--usp-remoods-hue), 40%, 60%), hsl(var(--usp-remoods-hue), 100%, 10%) 27%);');
    noteCSS = noteCSS.replace(/^  --kp-text-color:.+?;/gms, '  --kp-text-color: hsl(var(--usp-remoods-hue), 40%, 65%);');
    noteCSS = noteCSS.replace(/^  --kp-text-shadow:.+?;/gms, '  --kp-text-shadow: 0 0 none;');
    noteCSS = noteCSS.replace(/^  --kp-bd-color:.+?;/gms, '  --kp-bd-color: hsl(var(--usp-remoods-hue), 40%, 75%);');
    noteCSS = noteCSS.replace(/^  --km-text-color:.+?;/gms, '  --km-text-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --km-bg-color:.+?;/gms, '  --km-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --km-bd-color:.+?;/gms, '  --km-bd-color: 1px solid hsl(var(--usp-remoods-hue), 40%, 40%);');
    noteCSS = noteCSS.replace(/^  --km-special-text-color:.+?;/gms, '  --km-special-text-color: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --spoiler-block-text-color:.+?;/gms, '  --spoiler-block-text-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --spoiler-block-bg-color:.+?;/gms, '  --spoiler-block-bg-color: var(--render-viewer-bg-color-2);');
    noteCSS = noteCSS.replace(/^  --spoiler-block-box-shadow:.+?;/gms, '  --spoiler-block-box-shadow: 0 0 4px hsl(var(--usp-remoods-hue), 40%, 70%);');
    noteCSS = noteCSS.replace(/^  --spoiler-title-color:.+?;/gms, '  --spoiler-title-color: hsl(var(--usp-remoods-hue), 40%, 70%);');
    noteCSS = noteCSS.replace(/^  --spoiler-list-text-color:.+?;/gms, '  --spoiler-list-text-color: hsl(var(--usp-remoods-hue), 40%, 60%);');
    noteCSS = noteCSS.replace(/^  --spoiler-span-title-color:.+?;/gms, '  --spoiler-span-title-color: hsl(var(--usp-remoods-hue), 40%, 70%);');
    noteCSS = noteCSS.replace(/^  --spoiler-span-title-bg-color:.+?;/gms, '  --spoiler-span-title-bg-color: hsl(var(--usp-remoods-hue), 10%, 20%);');
    noteCSS = noteCSS.replace(/^  --spoiler-list-span-color:.+?;/gms, '  --spoiler-list-span-color: hsl(var(--usp-remoods-hue), 0%, 77%);');
    noteCSS = noteCSS.replace(/^  --spoiler-ctb-text-color:.+?;/gms, '  --spoiler-ctb-text-color: var(--render-viewer-text-color);');
    noteCSS = noteCSS.replace(/^  --spoiler-ctb-bg-color:.+?;/gms, '  --spoiler-ctb-bg-color: hsl(var(--usp-remoods-hue), 10%, 20%);');
    noteCSS = noteCSS.replace(/^  --spoiler-ctb-title-color:.+?;/gms, '  --spoiler-ctb-title-color: hsl(var(--usp-remoods-hue), 40%, 70%);');
    noteCSS = noteCSS.replace(/^  --spoiler-inline-text-color:.+?;/gms, '  --spoiler-inline-text-color: hsl(0, 0%, 80%);');
    noteCSS = noteCSS.replace(/^  --spoiler-inline-bg-color:.+?;/gms, '  --spoiler-inline-bg-color: hsl(0, 0%, 0%);');
    noteCSS = noteCSS.replace(/^  --spoiler-inline-bd-color:.+?;/gms, '  --spoiler-inline-bd-color: 1px solid hsl(var(--usp-remoods-hue), 40%, 40%);');
    noteCSS = noteCSS.replace(/^  --spoiler-inline-symbol-color:.+?;/gms, '  --spoiler-inline-symbol-color: hsl(var(--usp-remoods-hue), 40%, 70%);');
    noteCSS = noteCSS.replace(/^  --spoiler-inline-symbol-shadow:.+?;/gms, '  --spoiler-inline-symbol-color-hover: hsl(0, 100%, 50%);');
    noteCSS = noteCSS.replace(/^  --turntochart-bg-color:.+?;/gms, '  --turntochart-bg-color: none;');
    noteCSS = noteCSS.replace(/^  --turntochart-text-color:.+?;/gms, '  --turntochart-text-color: hsl(var(--usp-remoods-hue), 0%, 77%);');
    noteCSS = noteCSS.replace(/^  --turntochart-info-bg-color:.+?;/gms, '  --turntochart-info-bg-color: hsl(var(--usp-remoods-hue), 15%, 10%);');

    chromeCSS = chromeCSS.replace(/^  --usp-base-font:.+?;/gms, '  --usp-base-font: var(--usp-custom-base-font), "mulish", "montserrat", "chiron hei hk extralight";');
    chromeCSS = chromeCSS.replace(/^  --usp-monospace-font:.+?;/gms, '  --usp-monospace-font: var(--usp-custom-monospace-font), "cascadia mono light", "chiron hei hk extralight";');
    noteCSS = noteCSS.replace(/^  --usp-base-font:.+?;/gms, '  --usp-base-font: var(--usp-custom-base-font), "mulish", "montserrat", "chiron hei hk extralight";');
    noteCSS = noteCSS.replace(/^  --usp-monospace-font:.+?;/gms, '  --usp-monospace-font: var(--usp-custom-monospace-font), "cascadia mono light", "chiron hei hk extralight";');

    if(!emphasizeAddRemove && !emphasizeAddRemoveBg) {
      chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 100%,  70%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --print-insert-text-color:.+?;/gms, '  --print-insert-text-color: hsl(var(--usp-remoods-hue), 100%,  40%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bd-color:.+?;/gms, '  --print-insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  50%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bg-color:.+?;/gms, '  --print-insert-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-color:.+?;/gms, '  --print-strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  50%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-bg-color:.+?;/gms, '  --print-strikethrough-text-bg-color: none;');
      
    } else if(!emphasizeAddRemove && emphasizeAddRemoveBg) {
      chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: hsl(var(--usp-remoods-hue),  35%,  25%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: hsl(var(--usp-remoods-hue),  30%,  20%);');
      noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(var(--usp-remoods-hue), 100%,  70%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: hsl(var(--usp-remoods-hue),  35%,  25%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: hsl(var(--usp-remoods-hue),  30%,  20%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-color:.+?;/gms, '  --print-insert-text-color: hsl(var(--usp-remoods-hue), 100%,  40%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bd-color:.+?;/gms, '  --print-insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  50%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bg-color:.+?;/gms, '  --print-insert-text-bg-color: hsl(var(--usp-remoods-hue), 40%,  95%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-color:.+?;/gms, '  --print-strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  50%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-bg-color:.+?;/gms, '  --print-strikethrough-text-bg-color: hsl(var(--usp-remoods-hue), 25%,  85%);');
      
    } else if(emphasizeAddRemove && !emphasizeAddRemoveBg) {
      chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(100,  50%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(100,  70%,  35%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(0, 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(100,  50%,  75%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(100,  70%,  35%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(0, 100%,  75%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --print-insert-text-color:.+?;/gms, '  --print-insert-text-color: hsl(100,  40%,  45%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bd-color:.+?;/gms, '  --print-insert-text-bd-color: hsl(100,  70%,  35%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bg-color:.+?;/gms, '  --print-insert-text-bg-color: none;');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-color:.+?;/gms, '  --print-strikethrough-text-color: hsl(0, 100%,  65%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-bg-color:.+?;/gms, '  --print-strikethrough-text-bg-color: none;');
      
    } else {
      chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(100,  50%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(100,  70%,  35%);');
      chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: hsl(100,  70%,  15%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(0, 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: hsl(0,  30%,  20%);');
      noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/gms, '  --insert-text-color: hsl(100,  50%,  75%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/gms, '  --insert-text-bd-color: hsl(100,  70%,  35%);');
      noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/gms, '  --insert-text-bg-color: hsl(100,  70%,  15%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/gms, '  --strikethrough-text-color: hsl(0, 100%,  75%);');
      noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/gms, '  --strikethrough-text-bg-color: hsl(0,  30%,  20%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-color:.+?;/gms, '  --print-insert-text-color: hsl(100,  40%,  45%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bd-color:.+?;/gms, '  --print-insert-text-bd-color: hsl(100,  70%,  35%);');
      noteCSS = noteCSS.replace(/^  --print-insert-text-bg-color:.+?;/gms, '  --print-insert-text-bg-color: hsl(100,  35%,  95%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-color:.+?;/gms, '  --print-strikethrough-text-color: hsl(0, 100%,  65%);');
      noteCSS = noteCSS.replace(/^  --print-strikethrough-text-bg-color:.+?;/gms, '  --print-strikethrough-text-bg-color: hsl(0,  35%,  90%);');
    }
    
    if(!themeColorListText) {
      chromeCSS = chromeCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: var(--code-mirror-text-color);');
      chromeCSS = chromeCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(var(--usp-remoods-hue), 80%, 80%);');
      chromeCSS = chromeCSS.replace(/^  --eh-footnote-ref-color:.+?;/gms, '  --eh-footnote-ref-color: hsl(var(--usp-remoods-hue), 100%, 10%);');
      noteCSS = noteCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: var(--render-viewer-text-color);');
      noteCSS = noteCSS.replace(/^  --list-span-color:.+?;/gms, '  --list-span-color: hsl(var(--usp-remoods-hue), 30%, 80%);');
      noteCSS = noteCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(var(--usp-remoods-hue), 80%, 80%);');
    } else {
      chromeCSS = chromeCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: hsl(var(--usp-remoods-hue), 30%, 80%);');
      chromeCSS = chromeCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 80%, 80%);');
      chromeCSS = chromeCSS.replace(/^  --eh-footnote-ref-color:.+?;/gms, '  --eh-footnote-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 100%, 10%);');
      noteCSS = noteCSS.replace(/^  --list-text-color:.+?;/gms, '  --list-text-color: hsl(var(--usp-remoods-hue), 30%, 80%);');
      noteCSS = noteCSS.replace(/^  --list-span-color:.+?;/gms, '  --list-span-color: var(--render-viewer-text-color);');
      noteCSS = noteCSS.replace(/^  --fn-ref-color:.+?;/gms, '  --fn-ref-color: hsl(calc(var(--usp-remoods-hue) + 180deg), 80%, 80%);');
    }

    if(!h1TwillPattern) {
      noteCSS = noteCSS.replace(/^  --usp-h1-text-fill-color:.+?;/gms, '  --usp-h1-text-fill-color: none;');
      noteCSS = noteCSS.replace(/^  --usp-h1-font-weight:.+?;/gms, '  --usp-h1-font-weight: 600;');
      noteCSS = noteCSS.replace(/^  --h1-bd-color:.+?;/gms, '  --h1-bd-color: var(--h2-bd-color);');
    } else {
      noteCSS = noteCSS.replace(/^  --usp-h1-text-fill-color:.+?;/gms, '  --usp-h1-text-fill-color: transparent;');
      noteCSS = noteCSS.replace(/^  --usp-h1-font-weight:.+?;/gms, '  --usp-h1-font-weight: 800;');
      noteCSS = noteCSS.replace(/^  --h1-bd-color:.+?;/gms, '  --h1-bd-color: var(--h1-bg-color);');
    }

    if(!hrTwillPattern) {
      noteCSS = noteCSS.replace(/^  --horizontal-line-bg:.+?;/gms, '  --horizontal-line-bg: hsl(var(--usp-remoods-hue), 40%, 50%);');
      noteCSS = noteCSS.replace(/^  --horizontal-line-bgi:.+?;/gms, '  --horizontal-line-bgi: none;');
    } else {
      noteCSS = noteCSS.replace(/^  --horizontal-line-bg:.+?;/gms, '  --horizontal-line-bg: none;');
      noteCSS = noteCSS.replace(/^  --horizontal-line-bgi:.+?;/gms, '  --horizontal-line-bgi: repeating-linear-gradient(114deg, hsl(var(--usp-remoods-hue), 100%, 80%), hsl(var(--usp-remoods-hue), 100%, 35%, 50%), hsl(var(--usp-remoods-hue), 100%, 80%)  3px);');
    }

    if(!dottedBlockquote) {
      noteCSS = noteCSS.replace(/^  --blockquote-bd-color:.+?;/gms, '  --blockquote-bd-color: 3px solid hsl(var(--usp-remoods-hue),  20%,  60%);');
      noteCSS = noteCSS.replace(/^  --print-blockquote-bd-color:.+?;/gms, '  --print-blockquote-bd-color: 2px solid hsl(var(--usp-remoods-hue),  20%,  60%);');
    } else {
      noteCSS = noteCSS.replace(/^  --blockquote-bd-color:.+?;/gms, '  --blockquote-bd-color: 5px dotted hsl(var(--usp-remoods-hue),  20%,  60%);');
      noteCSS = noteCSS.replace(/^  --print-blockquote-bd-color:.+?;/gms, '  --print-blockquote-bd-color: 4px dotted hsl(var(--usp-remoods-hue),  20%,  60%);');
    }

    if(!mermaidEyeProtector) {
      noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-filter:.+?;/gms, '  --usp-mermaid-eye-protector-filter: none;');
      noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-transition:.+?;/gms, '  --usp-mermaid-eye-protector-transition: none;');
    } else {
      noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-filter:.+?;/gms, '  --usp-mermaid-eye-protector-filter: brightness(75%);');
      noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-transition:.+?;/gms, '  --usp-mermaid-eye-protector-transition: filter 1.2s;');
    }
  
    if(!imageEyeProtector) {
      noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-filter:.+?;/gms, '  --usp-image-eye-protector-filter: none;');
      noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-transition:.+?;/gms, '  --usp-image-eye-protector-transition: none;');
    } else {
      noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-filter:.+?;/gms, '  --usp-image-eye-protector-filter: brightness(75%);');
      noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-transition:.+?;/gms, '  --usp-image-eye-protector-transition: filter 1.2s;');
    }
      
    break;

    default:
      alert('ReMoods Theme: There seems to be a problem loading the "Theme Mode", please restart Joplin and try again.')
  }

  if(baseFont !== 'none') {
    const customBaseFont = baseFont.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-custom-base-font:.+?;/gms, `  --usp-custom-base-font: ${customBaseFont};`);
    noteCSS = noteCSS.replace(/^  --usp-custom-base-font:.+?;/gms, `  --usp-custom-base-font: ${customBaseFont};`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-custom-base-font:.+?;/gms, '  --usp-custom-base-font: none;');
    noteCSS = noteCSS.replace(/^  --usp-custom-base-font:.+?;/gms, '  --usp-custom-base-font: none;');
  }

  if(monospaceFont !== 'none') {
    const customMonospaceFont = monospaceFont.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-custom-monospace-font:.+?;/gms, `  --usp-custom-monospace-font: ${customMonospaceFont};`);
    noteCSS = noteCSS.replace(/^  --usp-custom-monospace-font:.+?;/gms, `  --usp-custom-monospace-font: ${customMonospaceFont};`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-custom-monospace-font:.+?;/gms, '  --usp-custom-monospace-font: none;');
    noteCSS = noteCSS.replace(/^  --usp-custom-monospace-font:.+?;/gms, '  --usp-custom-monospace-font: none;');
  }

  if(headingFont !== 'none') {
    const customHeadingFont = headingFont.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-custom-heading-font:.+?;/gms, `  --usp-custom-heading-font: ${customHeadingFont};`);
    noteCSS = noteCSS.replace(/^  --usp-custom-heading-font:.+?;/gms, `  --usp-custom-heading-font: ${customHeadingFont};`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-custom-heading-font:.+?;/gms, '  --usp-custom-heading-font: none;');
    noteCSS = noteCSS.replace(/^  --usp-custom-heading-font:.+?;/gms, '  --usp-custom-heading-font: none;');
  }

  if(baseFontSize !== '15px') {
    const baseSize = baseFontSize.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-base-font-size:.+?;/gms, `  --usp-base-font-size: ${baseSize};`);
    noteCSS = noteCSS.replace(/^  --usp-base-font-size:.+?;/gms, `  --usp-base-font-size: ${baseSize};`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-base-font-size:.+?;/gms, '  --usp-base-font-size: 15px;');
    noteCSS = noteCSS.replace(/^  --usp-base-font-size:.+?;/gms, '  --usp-base-font-size: 15px;');
  }

  if(monospaceFontSize !== '14px') {
    const monospaceSize = monospaceFontSize.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-monospace-font-size:.+?;/gms, `  --usp-monospace-font-size: ${monospaceSize};`);
    noteCSS = noteCSS.replace(/^  --usp-monospace-font-size:.+?;/gms, `  --usp-monospace-font-size: ${monospaceSize};`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-monospace-font-size:.+?;/gms, '  --usp-monospace-font-size: 14px;');
    noteCSS = noteCSS.replace(/^  --usp-monospace-font-size:.+?;/gms, '  --usp-monospace-font-size: 14px;');
  }
  
  if(!h1TextTransform) {
    chromeCSS = chromeCSS.replace(/^  --usp-h1-text-transform:.+?;/gms, '  --usp-h1-text-transform: unset;');
    noteCSS = noteCSS.replace(/^  --usp-h1-text-transform:.+?;/gms, '  --usp-h1-text-transform: unset;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-h1-text-transform:.+?;/gms, '  --usp-h1-text-transform: capitalize;');
    noteCSS = noteCSS.replace(/^  --usp-h1-text-transform:.+?;/gms, '  --usp-h1-text-transform: capitalize;');
  }
  
  if(!h1FontVariant) {
    chromeCSS = chromeCSS.replace(/^  --usp-h1-font-variant:.+?;/gms, '  --usp-h1-font-variant: unset;');
    noteCSS = noteCSS.replace(/^  --usp-h1-font-variant:.+?;/gms, '  --usp-h1-font-variant: unset;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-h1-font-variant:.+?;/gms, '  --usp-h1-font-variant: small-caps;');
    noteCSS = noteCSS.replace(/^  --usp-h1-font-variant:.+?;/gms, '  --usp-h1-font-variant: small-caps;');
  }

  if(!smallerCodeBlockFontSize) {
    chromeCSS = chromeCSS.replace(/^  --usp-smaller-code-block-font-size:.+?;/gms, '  --usp-smaller-code-block-font-size: var(--usp-monospace-font-size);');
    noteCSS = noteCSS.replace(/^  --usp-smaller-code-block-font-size:.+?;/gms, '  --usp-smaller-code-block-font-size: var(--usp-monospace-font-size);');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-smaller-code-block-font-size:.+?;/gms, '  --usp-smaller-code-block-font-size: calc(var(--usp-monospace-font-size) - 2px);');
    noteCSS = noteCSS.replace(/^  --usp-smaller-code-block-font-size:.+?;/gms, '  --usp-smaller-code-block-font-size: calc(var(--usp-monospace-font-size) - 2px);');
  }

  if(!smallerMarkdownTableFontSize) {
    chromeCSS = chromeCSS.replace(/^  --usp-smaller-markdown-table-font-size:.+?;/gms, '  --usp-smaller-markdown-table-font-size: var(--usp-monospace-font-size);');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-smaller-markdown-table-font-size:.+?;/gms, '  --usp-smaller-markdown-table-font-size: calc(var(--usp-monospace-font-size) - 2px);');
  }

  if(!smallerMonospaceFontSize) {
    chromeCSS = chromeCSS.replace(/^  --usp-smaller-monospace-font-size:.+?;/gms, '  --usp-smaller-monospace-font-size: var(--usp-monospace-font-size);');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-smaller-monospace-font-size:.+?;/gms, '  --usp-smaller-monospace-font-size: calc(var(--usp-monospace-font-size) - 2px);');
  }
  
  if(!evidentHorizontalLine) {
    chromeCSS = chromeCSS.replace(/^  --usp-evident-horizontal-line-switcher:.+?;/gms, '  --usp-evident-horizontal-line-switcher: none;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-evident-horizontal-line-switcher:.+?;/gms, '  --usp-evident-horizontal-line-switcher: inline-block;');
  }
  
  if(!headingRef) {
    noteCSS = noteCSS.replace(/^  --usp-heading-ref-switcher:.+?;/gms, '  --usp-heading-ref-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-heading-ref-switcher:.+?;/gms, '  --usp-heading-ref-switcher: inline-block;');
  }
  
  if (!h1Border) {
    noteCSS = noteCSS.replace(/^  --usp-h1-border-switcher:.+?;/gms, '  --usp-h1-border-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h1-border-switcher:.+?;/gms, '  --usp-h1-border-switcher: block;');
  }
  
  if (!h2Border) {
    noteCSS = noteCSS.replace(/^  --usp-h2-border-switcher:.+?;/gms, '  --usp-h2-border-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h2-border-switcher:.+?;/gms, '  --usp-h2-border-switcher: block;');
  }
 
  if (!h3Border) {
    noteCSS = noteCSS.replace(/^  --usp-h3-border-switcher:.+?;/gms, '  --usp-h3-border-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h3-border-switcher:.+?;/gms, '  --usp-h3-border-switcher: block;');
  }
 
  if (!h4Border) {
    noteCSS = noteCSS.replace(/^  --usp-h4-border-switcher:.+?;/gms, '  --usp-h4-border-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h4-border-switcher:.+?;/gms, '  --usp-h4-border-switcher: block;');
  }
  
  if (!h5Border) {
    noteCSS = noteCSS.replace(/^  --usp-h5-border-switcher:.+?;/gms, '  --usp-h5-border-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h5-border-switcher:.+?;/gms, '  --usp-h5-border-switcher: block;');
  }
 
  if (!h6Border) {
    noteCSS = noteCSS.replace(/^  --usp-h6-border-switcher:.+?;/gms, '  --usp-h6-border-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h6-border-switcher:.+?;/gms, '  --usp-h6-border-switcher: block;');
  }
  
  if(!paragraphJustify) {
    noteCSS = noteCSS.replace(/^  --usp-paragraph-justify:.+?;/gms, '  --usp-paragraph-justify: unset;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-paragraph-justify:.+?;/gms, '  --usp-paragraph-justify: justify;');
  }
  
  if(!dottedCodeBlock) {
    noteCSS = noteCSS.replace(/^  --usp-code-block-bd-style:.+?;/gms, '  --usp-code-block-bd-style: solid;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-code-block-bd-style:.+?;/gms, '  --usp-code-block-bd-style: dotted;');
  }

  if(!katexTextAlignLeft) {
    noteCSS = noteCSS.replace(/^  --usp-katex-text-align:.+?;/gms, '  --usp-katex-text-align: center;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-katex-text-align:.+?;/gms, '  --usp-katex-text-align: left;');
  }

  if(!codeBlockMaxHeight) {
    noteCSS = noteCSS.replace(/^  --usp-code-block-max-height:.+?;/gms, '  --usp-code-block-max-height: unset;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-code-block-max-height:.+?;/gms, '  --usp-code-block-max-height: 56vh;');
  }

  if(!artGalleryMaxHeight) {
    noteCSS = noteCSS.replace(/^  --usp-art-gallery-max-height:.+?;/gms, '  --usp-art-gallery-max-height: unset;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-art-gallery-max-height:.+?;/gms, '  --usp-art-gallery-max-height: 56vh;');
  }

  if(!addRemoveSymbol) {
    noteCSS = noteCSS.replace(/^  --usp-special-text-add-remove-symbol-switcher:.+?;/gms, '  --usp-special-text-add-remove-symbol-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-special-text-add-remove-symbol-switcher:.+?;/gms, '  --usp-special-text-add-remove-symbol-switcher: inline-block;');
  }

  if(!inlineCodeSymbol) {
    noteCSS = noteCSS.replace(/^  --usp-inline-code-symbol-switcher:.+?;/gms, '  --usp-inline-code-symbol-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-inline-code-symbol-switcher:.+?;/gms, '  --usp-inline-code-symbol-switcher: inline-block;');
  }

  if(!customTitleBlockSymbol) {
    noteCSS = noteCSS.replace(/^  --usp-custom-title-block-symbol-switcher:.+?;/gms, '  --usp-custom-title-block-symbol-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-custom-title-block-symbol-switcher:.+?;/gms, '  --usp-custom-title-block-symbol-switcher: inline-block;');
  }

  if(!notebookNotelistPanelScrollbar) {
    chromeCSS = chromeCSS.replace(/^  --usp-np-nlp-scrollbar-width:.+?;/gms, '  --usp-np-nlp-scrollbar-width: 3px;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-np-nlp-scrollbar-width:.+?;/gms, '  --usp-np-nlp-scrollbar-width: 8px;');
  }

  if(!notebookTitleWrap) {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-title-wrap:.+?;/gms, '  --usp-notebook-title-wrap: none;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-title-wrap:.+?;/gms, '  --usp-notebook-title-wrap: normal;');
  }

  if(!notebookTitleScrollbar) {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-title-scrollbar-switcher:.+?;/gms, '  --usp-notebook-title-scrollbar-switcher: none;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-title-scrollbar-switcher:.+?;/gms, '  --usp-notebook-title-scrollbar-switcher: block;');
  }

  if(!notebookFolderIcon) {
    chromeCSS = chromeCSS.replace(/^ --usp-notebook-icon-switcher:.+?;/gms, '  --usp-notebook-icon-switcher: none;');
  } else {
    chromeCSS = chromeCSS.replace(/^ --usp-notebook-icon-switcher:.+?;/gms, '  --usp-notebook-icon-switcher: block;');
  }

  if(printBaseFont !== 'var(--usp-print-base-font)') {
    const printCustomBaseFont = printBaseFont.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-print-custom-base-font:.+?;/gms, `  --usp-print-custom-base-font: ${printCustomBaseFont};`);
    noteCSS = noteCSS.replace(/^  --usp-print-custom-base-font:.+?;/gms, `  --usp-print-custom-base-font: ${printCustomBaseFont};`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-print-custom-base-font:.+?;/gms, '  --usp-print-custom-base-font: var(--usp-print-base-font);');
    noteCSS = noteCSS.replace(/^  --usp-print-custom-base-font:.+?;/gms, '  --usp-print-custom-base-font: var(--usp-print-base-font);');
  }

  if(printMonospaceFont !== 'var(--usp-custom-monospace-font)') {
    const printCustomMonospaceFont = printMonospaceFont.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-print-custom-monospace-font:.+?;/gms, `  --usp-print-custom-monospace-font: ${printCustomMonospaceFont};`);
    noteCSS = noteCSS.replace(/^  --usp-print-custom-monospace-font:.+?;/gms, `  --usp-print-custom-monospace-font: ${printCustomMonospaceFont};`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-print-custom-monospace-font:.+?;/gms, '  --usp-print-custom-monospace-font: var(--usp-custom-monospace-font);');
    noteCSS = noteCSS.replace(/^  --usp-print-custom-monospace-font:.+?;/gms, '  --usp-print-custom-monospace-font: var(--usp-custom-monospace-font);');
  }

  if(printHeadingFont !== 'var(--usp-custom-heading-font)') {
    const printCustomHeadingFont = printHeadingFont.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-print-custom-heading-font:.+?;/gms, `  --usp-print-custom-heading-font: ${printCustomHeadingFont};`);
    noteCSS = noteCSS.replace(/^  --usp-print-custom-heading-font:.+?;/gms, `  --usp-print-custom-heading-font: ${printCustomHeadingFont};`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-print-custom-heading-font:.+?;/gms, '  --usp-print-custom-heading-font: var(--usp-custom-heading-font);');
    noteCSS = noteCSS.replace(/^  --usp-print-custom-heading-font:.+?;/gms, '  --usp-print-custom-heading-font: var(--usp-custom-heading-font);');
  }

  if(printBaseFontSize !== '13px') {
    const printBaseSize = printBaseFontSize.valueOf();
    noteCSS = noteCSS.replace(/^  --usp-print-base-font-size:.+?;/gms, `  --usp-print-base-font-size: ${printBaseSize};`);
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-base-font-size:.+?;/gms, '  --usp-print-base-font-size: 13px;');
  }

  if(printMonospaceFontSize !== '12px') {
    const printMonospaceSize = printMonospaceFontSize.valueOf();
    noteCSS = noteCSS.replace(/^  --usp-print-monospace-font-size:.+?;/gms, `  --usp-print-monospace-font-size: ${printMonospaceSize};`);
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-monospace-font-size:.+?;/gms, '  --usp-print-monospace-font-size: 12px;');
  }

  if(!printSmallerCodeBlockFontSize) {
    noteCSS = noteCSS.replace(/^  --usp-print-smaller-code-block-font-size:.+?;/gms, '  --usp-print-smaller-code-block-font-size: var(--usp-print-monospace-font-size);');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-smaller-code-block-font-size:.+?;/gms, '  --usp-print-smaller-code-block-font-size: calc(var(--usp-print-monospace-font-size) - 2px);');
  }

  if(!printNoteTitle) {
    noteCSS = noteCSS.replace(/^  --usp-print-note-title-display:.+?;/gms, '  --usp-print-note-title-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-note-title-display:.+?;/gms, '  --usp-print-note-title-display: block;');
  }

  if(!printHeadingRef) {
    noteCSS = noteCSS.replace(/^  --usp-print-heading-ref-switcher:.+?;/gms, '  --usp-print-heading-ref-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-heading-ref-switcher:.+?;/gms, '  --usp-print-heading-ref-switcher: inline-block;');
  }

  if(!printH1Border) {
    noteCSS = noteCSS.replace(/^  --usp-print-h1-bd-display:.+?;/gms, '  --usp-print-h1-bd-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-h1-bd-display:.+?;/gms, '  --usp-print-h1-bd-display: block;');
  }

  if(!printTOC) {
    noteCSS = noteCSS.replace(/^  --usp-print-toc-display:.+?;/gms, '  --usp-print-toc-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-toc-display:.+?;/gms, '  --usp-print-toc-display: block;');
  }

  if(!printStickyNotes) {
    noteCSS = noteCSS.replace(/^  --usp-print-sticky-notes-display:.+?;/gms, '  --usp-print-sticky-notes-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-sticky-notes-display:.+?;/gms, '  --usp-print-sticky-notes-display: block;');
  }

  if(!printKeyMention) {
    noteCSS = noteCSS.replace(/^  --usp-print-key-mention-display:.+?;/gms, '  --usp-print-key-mention-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-key-mention-display:.+?;/gms, '  --usp-print-key-mention-display: block;');
  }

  if(!printSnKm) {
    noteCSS = noteCSS.replace(/^  --usp-print-sn-km-display:.+?;/gms, '  --usp-print-sn-km-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-sn-km-display:.+?;/gms, '  --usp-print-sn-km-display: block;');
  }

  if(!printSpoilerInlineText) {
    noteCSS = noteCSS.replace(/^  --usp-print-spoiler-inline-text-visibility:.+?;/gms, '  --usp-print-spoiler-inline-text-visibility: hidden;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-spoiler-inline-text-visibility:.+?;/gms, '  --usp-print-spoiler-inline-text-visibility: visible;');
  }

  await fs.writeFile(installDir + '/chrome.css', chromeCSS, 'utf8');
  await fs.writeFile(installDir + '/note.css', noteCSS, 'utf8');

}