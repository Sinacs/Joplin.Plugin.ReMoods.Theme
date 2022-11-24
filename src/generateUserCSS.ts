import joplin from 'api';
import { ThemeSettings } from 'src';

export const generateUserCSS = async (settings: ThemeSettings) => {
	const fs = joplin.require('fs-extra');

  const {
    remoodsHue,
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