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
		h1FontSize,
		h2FontSize,
		h3FontSize,
		h4FontSize,
		h5FontSize,
		h6FontSize,
		darkerEditorBackground,
		h1TextTransform,
		h1FontVariant,
		emphasizeAddRemove,
		emphasizeAddRemoveBg,
		themeColorListText,
		smallerCodeBlockText,

		smallerMarkdownTableSyntax,
		smallerMonospaceText,
		evidentHorizontalRule,

    headingRef,
		h1Border,
		h2Border,
		h3Border,
		h4Border,
		h5Border,
		h6Border,
		h1TwillPattern,
		hrTwillPattern,
		paragraphTextJustify,
		listTextJustify,
		checklistTextJustify,
		snTextJustify,
		dottedBlockquote,
		dottedCodeBlock,
		mathNotationFontSize,
		mathNotationAlignLeft,
		mermaidEyeProtector,
		imageEyeProtector,
		codeBlockMaxHeight,
		artGalleryMaxHeight,
		addRemoveSymbol,
		inlineCodeSymbol,
		customTitleBlockSymbol,

		panelsScrollbar,
		notebookTitleWrap,
		notebookTitleScrollbar,
		notebookFolderIcon,
    allNotesButton,
		syncFeature,
		tagFeature,
		noteListItemAutoScroll,

    printBaseFont,
		printMonospaceFont,
		printHeadingFont,
		printBaseFontSize,
		printMonospaceFontSize,
    printH1FontSize,
		printH2FontSize,
		printH3FontSize,
		printH4FontSize,
		printH5FontSize,
		printH6FontSize,
    printSmallerCodeBlockText,
    printNoteTitle,
    printHeadingRef,
    printH1Border,
    printTOC,
    printStickyNotes,
    printKeyMention,
    printSnKm,
    printSpoilerInlineText,
    printLinkHref,
    printAbbrDescription,

  } = settings;

  const installDir = await joplin.plugins.installationDir();
  let chromeCSS = await fs.readFile(installDir + '/chrome.css', 'utf-8');
  let noteCSS = await fs.readFile(installDir + '/note.css', 'utf-8');

  switch(remoodsHue) {

    case '0deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 0deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 0deg;');
      break;
    case '10deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 10deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 10deg;');
      break;
    case '20deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 20deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 20deg;');
      break;
    case '30deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 30deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 30deg;');
      break;
    case '40deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 40deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 40deg;');
      break;
    case '50deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 50deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 50deg;');
      break;
    case '60deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 60deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 60deg;');
      break;
    case '70deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 70deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 70deg;');
      break;
    case '80deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 80deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 80deg;');
      break;
    case '90deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 90deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 90deg;');
      break;
    case '100deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 100deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 100deg;');
      break;
    case '110deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 110deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 110deg;');
      break;
    case '120deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 120deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 120deg;');
      break;
    case '130deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 130deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 130deg;');
      break;
    case '140deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 140deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 140deg;');
      break;
    case '150deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 150deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 150deg;');
      break;
    case '160deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 160deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 160deg;');
      break;
    case '170deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 170deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 170deg;');
      break;
    case '180deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 180deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 180deg;');
      break;
    case '190deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 190deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 190deg;');
      break;
    case '200deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 200deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 200deg;');
      break;
    case '210deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 210deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 210deg;');
      break;
    case '220deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 220deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 220deg;');
      break;
    case '230deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 230deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 230deg;');
      break;
    case '240deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 240deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 240deg;');
      break;
    case '250deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 250deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 250deg;');
      break;
    case '260deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 260deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 260deg;');
      break;
    case '270deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 270deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 270deg;');
      break;
    case '280deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 280deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 280deg;');
      break;
    case '290deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 290deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 290deg;');
      break;
    case '300deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 300deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 300deg;');
      break;
    case '310deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 310deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 310deg;');
      break;
    case '320deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 320deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 320deg;');
      break;
    case '330deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 330deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 330deg;');
      break;
    case '340deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 340deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 340deg;');
      break;
    case '350deg':
      chromeCSS = chromeCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 350deg;');
      noteCSS = noteCSS.replace(/^  --usp-hue:.+?;/gms, '  --usp-hue: 350deg;');
      break;
    default:
      alert('ReMoods Theme: There seems to be a problem loading the "ReMoods Hue", please restart Joplin and try again.')

  }

  switch(themeMode) {

    case 'dayMode':

      chromeCSS = chromeCSS.replace(/^  --me-bg:.+?;/gms, '  --me-bg: hsl(var(--usp-hue),   0%, 100%);');
      chromeCSS = chromeCSS.replace(/^  --me-text:.+?;/gms, '  --me-text: hsl(var(--usp-hue),   0%,   0%);');
      chromeCSS = chromeCSS.replace(/^  --me-scrollbar-track-bg:.+?;/gms, '  --me-scrollbar-track-bg: hsl(var(--usp-hue),  20%,  70%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --me-scrollbar-thumb-bg:.+?;/gms, '  --me-scrollbar-thumb-bg: linear-gradient(to bottom, hsl(var(--usp-hue),  20%,  75%)  3px, hsl(var(--usp-hue),   0%, 100%)  4px, hsl(var(--usp-hue),   0%, 100%) calc(100% - 4px), hsl(var(--usp-hue),  20%,  75%) calc(100% - 3px));');
      chromeCSS = chromeCSS.replace(/^  --me-scrollbar-thumb-bd:.+?;/gms, '  --me-scrollbar-thumb-bd: hsl(var(--usp-hue),  20%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-hr-syntax-text:.+?;/gms, '  --me-hr-syntax-text: hsl(var(--usp-hue),   0%,   0%);');
      chromeCSS = chromeCSS.replace(/^  --me-hr-syntax-bg:.+?;/gms, '  --me-hr-syntax-bg: hsl(var(--usp-hue), 100%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-cursor-bdl:.+?;/gms, '  --me-cursor-bdl: 2px solid hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --me-selected-text:.+?;/gms, '  --me-selected-text: var(--me-text);');
      chromeCSS = chromeCSS.replace(/^  --me-selected-bg:.+?;/gms, '  --me-selected-bg: hsl(calc(var(--usp-hue) + 180deg),  20%,  95%);');
      chromeCSS = chromeCSS.replace(/^  --me-selected-bg-focused:.+?;/gms, '  --me-selected-bg-focused: hsl(calc(var(--usp-hue) + 180deg),  20%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --me-special-text:.+?;/gms, '  --me-special-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --me-special-bg:.+?;/gms, '  --me-special-bg: hsl(var(--usp-hue), 100%,  93%);');
      chromeCSS = chromeCSS.replace(/^  --me-mark-text:.+?;/gms, '  --me-mark-text: hsl(var(--usp-hue),   0%,   0%);');
      chromeCSS = chromeCSS.replace(/^  --me-mark-ts:.+?;/gms, '  --me-mark-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-mark-bg:.+?;/gms, '  --me-mark-bg: hsl(var(--usp-hue), 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-insert-text:.+?;/gms, '  --me-insert-text: hsl(var(--usp-hue),  50%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --me-insert-bg:.+?;/gms, '  --me-insert-bg: none;');
      chromeCSS = chromeCSS.replace(/^  --me-insert-bdb:.+?;/gms, '  --me-insert-bdb: hsl(var(--usp-hue),  20%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-strikethrough-text:.+?;/gms, '  --me-strikethrough-text: hsl(var(--usp-hue),  20%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-strikethrough-bg:.+?;/gms, '  --me-strikethrough-bg: none;');
      chromeCSS = chromeCSS.replace(/^  --me-sub-sup-text:.+?;/gms, '  --me-sub-sup-text: hsl(var(--usp-hue), 100%,  35%);');
      chromeCSS = chromeCSS.replace(/^  --me-inline-code-text:.+?;/gms, '  --me-inline-code-text: hsl(var(--usp-hue),  20%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --me-inline-code-bg:.+?;/gms, '  --me-inline-code-bg: hsl(var(--usp-hue),  20%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --me-link-text:.+?;/gms, '  --me-link-text: hsl(var(--usp-hue), 100%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-html-tag-text:.+?;/gms, '  --me-html-tag-text: hsl(0, 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-html-tag-ts:.+?;/gms, '  --me-html-tag-ts: hsl(0, 100%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-html-attribute-text:.+?;/gms, '  --me-html-attribute-text: hsl(145, 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-html-attribute-ts:.+?;/gms, '  --me-html-attribute-ts: hsl(145, 100%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-html-string-text:.+?;/gms, '  --me-html-string-text: hsl(300, 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-html-string-ts:.+?;/gms, '  --me-html-string-ts: hsl(300, 100%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-list-token:.+?;/gms, '  --me-list-token: hsl(calc(var(--usp-hue) + 180deg), 100%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-list-text:.+?;/gms, '  --me-list-text: hsl(var(--usp-hue),  30%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-checkbox-text:.+?;/gms, '  --me-checkbox-text: hsl(var(--usp-hue),  80%,  45%);');
      chromeCSS = chromeCSS.replace(/^  --me-footnote-ref:.+?;/gms, '  --me-footnote-ref: hsl(calc(var(--usp-hue) + 180deg), 100%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-h1-text:.+?;/gms, '  --me-h1-text: hsl(var(--usp-hue),  70%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-h2-text:.+?;/gms, '  --me-h2-text: hsl(var(--usp-hue),   0%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-h3-text:.+?;/gms, '  --me-h3-text: hsl(var(--usp-hue),   0%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-h4-text:.+?;/gms, '  --me-h4-text: hsl(var(--usp-hue),   0%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-h5-text:.+?;/gms, '  --me-h5-text: hsl(var(--usp-hue),   0%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-h6-text:.+?;/gms, '  --me-h6-text: hsl(var(--usp-hue),   0%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-blockquote-text:.+?;/gms, '  --me-blockquote-text: hsl(var(--usp-hue),   0%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-bg:.+?;/gms, '  --me-code-block-bg: hsl(var(--usp-hue), 100%,  99%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-bdw:.+?;/gms, '  --me-code-block-bdw: 0 3px;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-bdc:.+?;/gms, '  --me-code-block-bdc: hsl(var(--usp-hue),  85%,  85%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-comment-text:.+?;/gms, '  --me-code-block-comment-text: hsl(var(--usp-hue),   0%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-comment-ts:.+?;/gms, '  --me-code-block-comment-ts: hsl(var(--usp-hue),   0%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-number-text:.+?;/gms, '  --me-code-block-number-text: hsl(calc(var(--usp-hue) + 110deg),  80%,  46%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-number-ts:.+?;/gms, '  --me-code-block-number-ts: hsl(calc(var(--usp-hue) + 110deg),  80%,  16%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-string-text:.+?;/gms, '  --me-code-block-string-text: hsl(calc(var(--usp-hue) + 180deg),  80%,  55%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-string-ts:.+?;/gms, '  --me-code-block-string-ts: hsl(calc(var(--usp-hue) + 180deg),  80%,  25%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-3-text:.+?;/gms, '  --me-code-block-variable-3-text: hsl(calc(var(--usp-hue) + 323deg),  87%,  55%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-3-ts:.+?;/gms, '  --me-code-block-variable-3-ts: hsl(calc(var(--usp-hue) + 323deg),  87%,  25%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-attribute-text:.+?;/gms, '  --me-code-block-attribute-text: hsl(calc(var(--usp-hue) + 260deg),  80%,  55%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-attribute-ts:.+?;/gms, '  --me-code-block-attribute-ts: hsl(calc(var(--usp-hue) + 260deg),  80%,  25%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-error-text:.+?;/gms, '  --me-code-block-error-text: hsl(0, 100%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-error-bdb:.+?;/gms, '  --me-code-block-error-bdb: 2px dotted hsl(0, 100%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-invalidchar-text:.+?;/gms, '  --me-code-block-invalidchar-text: hsl(0, 100%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-invalidchar-ts:.+?;/gms, '  --me-code-block-invalidchar-ts: hsl(0, 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-text:.+?;/gms, '  --me-code-block-variable-text: hsl(var(--usp-hue), 0%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-ts:.+?;/gms, '  --me-code-block-variable-ts: hsl(var(--usp-hue), 0%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-2-text:.+?;/gms, '  --me-code-block-variable-2-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-2-ts:.+?;/gms, '  --me-code-block-variable-2-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-def-text:.+?;/gms, '  --me-code-block-def-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-def-ts:.+?;/gms, '  --me-code-block-def-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-undefined-text:.+?;/gms, '  --me-code-block-undefined-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-undefined-ts:.+?;/gms, '  --me-code-block-undefined-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-operator-text:.+?;/gms, '  --me-code-block-operator-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-operator-ts:.+?;/gms, '  --me-code-block-operator-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-null-text:.+?;/gms, '  --me-code-block-null-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-null-ts:.+?;/gms, '  --me-code-block-null-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-matching-bracket-text:.+?;/gms, '  --me-code-block-matching-bracket-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-matching-bracket-ts:.+?;/gms, '  --me-code-block-matching-bracket-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-keyword-text:.+?;/gms, '  --me-code-block-keyword-text: hsl(var(--usp-hue),  80%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-keyword-ts:.+?;/gms, '  --me-code-block-keyword-ts: hsl(var(--usp-hue),  80%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-property-text:.+?;/gms, '  --me-code-block-property-text: hsl(var(--usp-hue),  40%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-property-ts:.+?;/gms, '  --me-code-block-property-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-qualifier-text:.+?;/gms, '  --me-code-block-qualifier-text: hsl(calc(var(--usp-hue) + 260deg),  80%,  55%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-qualifier-ts:.+?;/gms, '  --me-code-block-qualifier-ts: hsl(calc(var(--usp-hue) + 260deg),  80%,  25%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-type-text:.+?;/gms, '  --me-code-block-type-text: var(--me-code-block-qualifier-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-type-ts:.+?;/gms, '  --me-code-block-type-ts: var(--me-code-block-qualifier-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-builtin-text:.+?;/gms, '  --me-code-block-builtin-text: var(--me-code-block-qualifier-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-builtin-ts:.+?;/gms, '  --me-code-block-builtin-ts: var(--me-code-block-qualifier-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-atom-text:.+?;/gms, '  --me-code-block-atom-text: hsl(calc(var(--usp-hue) + 148deg),  80%,  45%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-atom-ts:.+?;/gms, '  --me-code-block-atom-ts: hsl(calc(var(--usp-hue) + 148deg),  80%,  15%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-meta-text:.+?;/gms, '  --me-code-block-meta-text: var(--me-code-block-atom-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-meta-ts:.+?;/gms, '  --me-code-block-meta-ts: var(--me-code-block-atom-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-string-2-text:.+?;/gms, '  --me-code-block-string-2-text: hsl(calc(var(--usp-hue) +  90deg),  80%,  55%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-string-2-ts:.+?;/gms, '  --me-code-block-string-2-ts: hsl(calc(var(--usp-hue) +  90deg),  80%,  25%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-tag-text:.+?;/gms, '  --me-code-block-tag-text: hsl(calc(var(--usp-hue) + 120deg),  80%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-tag-ts:.+?;/gms, '  --me-code-block-tag-ts: hsl(calc(var(--usp-hue) + 120deg),  80%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-table-text:.+?;/gms, '  --me-plugin-mtc-table-text: hsl(var(--usp-hue),   0%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-table-vertical-bar:.+?;/gms, '  --me-plugin-mtc-table-vertical-bar: hsl(var(--usp-hue),   0%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-separator-bg:.+?;/gms, '  --me-plugin-mtc-separator-bg: hsl(var(--usp-hue),   0%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-separator-text:.+?;/gms, '  --me-plugin-mtc-separator-text: hsl(var(--usp-hue),   0%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-1:.+?;/gms, '  --me-plugin-mtc-column-mark-1: hsl(  0, 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-1-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-1-ts: hsl(0, 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-2:.+?;/gms, '  --me-plugin-mtc-column-mark-2: hsl(240,  70%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-2-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-2-ts: hsl(240,  70%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-3:.+?;/gms, '  --me-plugin-mtc-column-mark-3: hsl(160,  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-3-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-3-ts: hsl(160,  80%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-4:.+?;/gms, '  --me-plugin-mtc-column-mark-4: hsl( 40,  90%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-4-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-4-ts: hsl( 40,  90%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-5:.+?;/gms, '  --me-plugin-mtc-column-mark-5: hsl( 60,  60%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-5-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-5-ts: hsl( 60,  60%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-6:.+?;/gms, '  --me-plugin-mtc-column-mark-6: hsl(190,  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-6-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-6-ts: hsl(190,  80%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-7:.+?;/gms, '  --me-plugin-mtc-column-mark-7: hsl(100,  70%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-7-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-7-ts: hsl(100,  70%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-8:.+?;/gms, '  --me-plugin-mtc-column-mark-8: hsl(210, 100%,  55%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-8-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-8-ts: hsl(210, 100%,  55%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-9:.+?;/gms, '  --me-plugin-mtc-column-mark-9: hsl(270, 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-9-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-9-ts: hsl(270, 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-10:.+?;/gms, '  --me-plugin-mtc-column-mark-10: hsl(310,  70%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-10-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-10-ts: hsl(310,  70%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-eh-footnote-ref:.+?;/gms, '  --me-plugin-eh-footnote-ref: hsl(calc(var(--usp-hue) + 180deg),   0%, 100%);');
      chromeCSS = chromeCSS.replace(/^  --g-main-bg-1:.+?;/gms, '  --g-main-bg-1: hsl(var(--usp-hue),   0%, 100%);');
      chromeCSS = chromeCSS.replace(/^  --g-main-bg-2:.+?;/gms, '  --g-main-bg-2: hsl(var(--usp-hue),  95%,  95%);');
      chromeCSS = chromeCSS.replace(/^  --g-panel-header-bgc:.+?;/gms, '  --g-panel-header-bgc: hsl(var(--usp-hue), 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --g-panel-header-text:.+?;/gms, '  --g-panel-header-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-panel-header-ts:.+?;/gms, '  --g-panel-header-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --g-item-bgc-hover:.+?;/gms, '  --g-item-bgc-hover: hsl(var(--usp-hue), 100%,  96%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-bgc-selected:.+?;/gms, '  --g-item-bgc-selected: hsl(var(--usp-hue), 100%,  85%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-ds-hover:.+?;/gms, '  --g-item-ds-hover: 2px hsl(var(--usp-hue),  60%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-divider:.+?;/gms, '  --g-item-divider: hsl(var(--usp-hue),  20%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-text-1:.+?;/gms, '  --g-item-text-1: hsl(var(--usp-hue),   0%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-ts-selected:.+?;/gms, '  --g-item-ts-selected: none;');
      chromeCSS = chromeCSS.replace(/^  --g-item-text-2:.+?;/gms, '  --g-item-text-2: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bg-1:.+?;/gms, '  --g-square-btn-bg-1: none;');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bg-1-hover:.+?;/gms, '  --g-square-btn-bg-1-hover: hsl(var(--usp-hue), 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bd-1:.+?;/gms, '  --g-square-btn-bd-1: transparent;');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bd-1-hover:.+?;/gms, '  --g-square-btn-bd-1-hover: hsl(var(--usp-hue),  70%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-icon-1:.+?;/gms, '  --g-square-btn-icon-1: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-icon-1-hover:.+?;/gms, '  --g-square-btn-icon-1-hover: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bg-2:.+?;/gms, '  --g-square-btn-bg-2: none;');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bg-2-hover:.+?;/gms, '  --g-square-btn-bg-2-hover: hsl(var(--usp-hue), 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bd-2:.+?;/gms, '  --g-square-btn-bd-2: transparent;');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bd-2-hover:.+?;/gms, '  --g-square-btn-bd-2-hover: hsl(var(--usp-hue),  70%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-icon-2:.+?;/gms, '  --g-square-btn-icon-2: hsl(var(--usp-hue),   0%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-icon-2-hover:.+?;/gms, '  --g-square-btn-icon-2-hover: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-scrollbar-thumb-bg:.+?;/gms, '  --g-scrollbar-thumb-bg: hsl(var(--usp-hue),  20%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --g-scrollbar-track-bg:.+?;/gms, '  --g-scrollbar-track-bg: hsl(var(--usp-hue),  20%,  70%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --g-input-text:.+?;/gms, '  --g-input-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-input-bg:.+?;/gms, '  --g-input-bg: hsl(var(--usp-hue),   0%, 100%);');
      chromeCSS = chromeCSS.replace(/^  --g-input-bd:.+?;/gms, '  --g-input-bd: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-toolbar-bg:.+?;/gms, '  --g-toolbar-bg: hsl(var(--usp-hue),   0%, 100%);');
      chromeCSS = chromeCSS.replace(/^  --g-toolbar-bd:.+?;/gms, '  --g-toolbar-bd: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-ep-divider:.+?;/gms, '  --g-ep-divider: hsl(var(--usp-hue),   0%,  93%);');
      chromeCSS = chromeCSS.replace(/^  --s-panel-divider:.+?;/gms, '  --s-panel-divider: hsl(var(--usp-hue),  50%,  98%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-directory-icon-open:.+?;/gms, '  --s-np-directory-icon-open: hsl(var(--usp-hue),  20%,  85%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-directory-icon-open-ds:.+?;/gms, '  --s-np-directory-icon-open-ds: none;');
      chromeCSS = chromeCSS.replace(/^  --s-np-directory-icon-close:.+?;/gms, '  --s-np-directory-icon-close: hsl(var(--usp-hue),   0%,   0%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-directory-icon-close-ds:.+?;/gms, '  --s-np-directory-icon-close-ds: none;');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-0:.+?;/gms, '  --s-np-notebook-folder-icon-0: hsl(var(--usp-hue), 80%, 60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-1:.+?;/gms, '  --s-np-notebook-folder-icon-1: hsl(calc(var(--usp-hue) + 50deg),  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-2:.+?;/gms, '  --s-np-notebook-folder-icon-2: hsl(calc(var(--usp-hue) + 100deg),  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-3:.+?;/gms, '  --s-np-notebook-folder-icon-3: hsl(calc(var(--usp-hue) + 150deg),  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-4:.+?;/gms, '  --s-np-notebook-folder-icon-4: hsl(calc(var(--usp-hue) + 200deg),  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-5:.+?;/gms, '  --s-np-notebook-folder-icon-5: hsl(calc(var(--usp-hue) + 250deg),  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-6:.+?;/gms, '  --s-np-notebook-folder-icon-6: hsl(calc(var(--usp-hue) + 300deg),  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-7:.+?;/gms, '  --s-np-notebook-folder-icon-7: hsl(calc(var(--usp-hue) + 350deg),  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-8:.+?;/gms, '  --s-np-notebook-folder-icon-8: hsl(calc(var(--usp-hue) + 40deg),  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-9:.+?;/gms, '  --s-np-notebook-folder-icon-9: hsl(calc(var(--usp-hue) + 90deg),  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-10:.+?;/gms, '  --s-np-notebook-folder-icon-10: hsl(calc(var(--usp-hue) + 140deg),  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-11:.+?;/gms, '  --s-np-notebook-folder-icon-11: hsl(calc(var(--usp-hue) + 190deg),  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-12:.+?;/gms, '  --s-np-notebook-folder-icon-12: hsl(calc(var(--usp-hue) + 240deg),  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-13:.+?;/gms, '  --s-np-notebook-folder-icon-13: hsl(calc(var(--usp-hue) + 290deg),  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-14:.+?;/gms, '  --s-np-notebook-folder-icon-14: hsl(calc(var(--usp-hue) + 340deg),  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-15:.+?;/gms, '  --s-np-notebook-folder-icon-15: hsl(calc(var(--usp-hue) + 30deg),  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-note-count-label-text:.+?;/gms, '  --s-np-note-count-label-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-note-count-label-bgc:.+?;/gms, '  --s-np-note-count-label-bgc: hsl(var(--usp-hue), 100%,  96%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-note-count-label-bd:.+?;/gms, '  --s-np-note-count-label-bd: hsl(var(--usp-hue),  70%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-note-count-label-ds:.+?;/gms, '  --s-np-note-count-label-ds: none;');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-info-text:.+?;/gms, '  --s-np-sync-info-text: hsl(var(--usp-hue),   0%,   0%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-info-symbol:.+?;/gms, '  --s-np-sync-info-symbol: radial-gradient( hsl(var(--usp-hue),  80%,  60%) 25%, hsl(var(--usp-hue), 100%,  35%) 55%, hsl(var(--usp-hue),  80%,  60%)  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-bg:.+?;/gms, '  --s-np-sync-btn-bg: transparent;');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-bd:.+?;/gms, '  --s-np-sync-btn-bd: hsl(var(--usp-hue),   0%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-bg-hover:.+?;/gms, '  --s-np-sync-btn-bg-hover: hsl(var(--usp-hue), 100%,  95%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-bdc-hover:.+?;/gms, '  --s-np-sync-btn-bdc-hover: hsl(var(--usp-hue), 100%,  45%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-text::.+?;/gms, '  --s-np-sync-btn-text: hsl(var(--usp-hue),   0%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-text-hover:.+?;/gms, '  --s-np-sync-btn-text-hover: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-icon-ts:.+?;/gms, '  --s-np-sync-btn-icon-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-icon-ts-hover:.+?;/gms, '  --s-np-sync-btn-icon-ts-hover: 3px hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-nlp-todo-text:.+?;/gms, '  --s-nlp-todo-text: hsl(var(--usp-hue), 100%,  35%);');
      chromeCSS = chromeCSS.replace(/^  --s-nlp-search-btn:.+?;/gms, '  --s-nlp-search-btn: hsl(var(--usp-hue),   0%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-toolbar-ds:.+?;/gms, '  --s-ep-toolbar-ds: 1px hsl(var(--usp-hue), 100%,  25%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-notebook-nav-btn-bg:.+?;/gms, '  --s-ep-notebook-nav-btn-bg: hsl(var(--usp-hue), 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-notebook-nav-btn-bd:.+?;/gms, '  --s-ep-notebook-nav-btn-bd: hsl(var(--usp-hue),  60%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-notebook-nav-btn-bs:.+?;/gms, '  --s-ep-notebook-nav-btn-bs: 2px hsl(var(--usp-hue),  65%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-notebook-nav-btn-text:.+?;/gms, '  --s-ep-notebook-nav-btn-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-batch-menu-btn-text:.+?;/gms, '  --s-ep-batch-menu-btn-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-batch-menu-btn-bg:.+?;/gms, '  --s-ep-batch-menu-btn-bg: hsl(var(--usp-hue), 100%,  97%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-batch-menu-btn-bd:.+?;/gms, '  --s-ep-batch-menu-btn-bd: hsl(var(--usp-hue),  70%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-update-time-label-bg:.+?;/gms, '  --s-ep-update-time-label-bg: hsl(var(--usp-hue),   0%, 100%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-update-time-label-text:.+?;/gms, '  --s-ep-update-time-label-text: hsl(var(--usp-hue), 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-tagbar-tag-text:.+?;/gms, '  --s-ep-tagbar-tag-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-tagbar-tag-text-hover:.+?;/gms, '  --s-ep-tagbar-tag-text-hover: hsl(var(--usp-hue), 100%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-tagbar-tag-ts-hover:.+?;/gms, '  --s-ep-tagbar-tag-ts-hover: none;');
      chromeCSS = chromeCSS.replace(/^  --s-ep-tagbar-tag-divider:.+?;/gms, '  --s-ep-tagbar-tag-divider: hsl(var(--usp-hue),  20%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-tagbar-hint-text:.+?;/gms, '  --s-ep-tagbar-hint-text: hsl(var(--usp-hue),   0%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-footer-popup-msg-text:.+?;/gms, '  --s-ep-footer-popup-msg-text: hsl(0,  60%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-footer-popup-msg-bg:.+?;/gms, '  --s-ep-footer-popup-msg-bg: hsl(0, 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-footer-popup-msg-link:.+?;/gms, '  --s-ep-footer-popup-msg-link: hsl(200,  70%,  55%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-bg:.+?;/gms, '  --s-md-bg: hsl(var(--usp-hue),   0%, 100%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-label-text:.+?;/gms, '  --s-md-label-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-title-text:.+?;/gms, '  --s-md-title-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-confirm-btn-text:.+?;/gms, '  --s-md-confirm-btn-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-confirm-btn-bg:.+?;/gms, '  --s-md-confirm-btn-bg: hsl(var(--usp-hue), 100%,  95%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-confirm-btn-bd:.+?;/gms, '  --s-md-confirm-btn-bd: hsl(var(--usp-hue),  60%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-notebook-creator-icon-select-btn-bg:.+?;/gms, '  --s-md-notebook-creator-icon-select-btn-bg: hsl(var(--usp-hue), 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-notebook-creator-icon-select-btn-bd:.+?;/gms, '  --s-md-notebook-creator-icon-select-btn-bd: hsl(var(--usp-hue),  75%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-notebook-creator-icon-select-btn-text:.+?;/gms, '  --s-md-notebook-creator-icon-select-btn-text: hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-tag-selector-bg:.+?;/gms, '  --s-md-tag-selector-bg: hsl(var(--usp-hue), 100%,  97%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-tag-selector-bd:.+?;/gms, '  --s-md-tag-selector-bd: hsl(var(--usp-hue),  20%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-tag-selector-input-text:.+?;/gms, '  --s-md-tag-selector-input-text: hsl(var(--usp-hue), 100%,  35%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-tag-selector-divider:.+?;/gms, '  --s-md-tag-selector-divider: hsl(var(--usp-hue),  20%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-tag-selector-text:.+?;/gms, '  --s-md-tag-selector-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-command-palette-item-bg:.+?;/gms, '  --s-md-command-palette-item-bg: hsl(var(--usp-hue),   0%, 100%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-command-palette-item-bg-selected:.+?;/gms, '  --s-md-command-palette-item-bg-selected: hsl(var(--usp-hue), 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-command-palette-item-bdb:.+?;/gms, '  --s-md-command-palette-item-bdb: hsl(var(--usp-hue),  20%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-command-palette-item-text:.+?;/gms, '  --s-md-command-palette-item-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-menu-subtitle-bg:.+?;/gms, '  --s-op-menu-subtitle-bg: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-guide-text:.+?;/gms, '  --s-op-guide-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-guide-bg:.+?;/gms, '  --s-op-guide-bg: hsl(var(--usp-hue), 100%,  85%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-label-text:.+?;/gms, '  --s-op-label-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-input-text:.+?;/gms, '  --s-op-input-text: hsl(var(--usp-hue), 100%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-btn-bg:.+?;/gms, '  --s-op-btn-bg: hsl(var(--usp-hue), 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-btn-bd:.+?;/gms, '  --s-op-btn-bd: hsl(var(--usp-hue),  75%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-btn-text:.+?;/gms, '  --s-op-btn-text: hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-description-text:.+?;/gms, '  --s-op-description-text: hsl(var(--usp-hue),  20%,  55%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-table-text:.+?;/gms, '  --s-op-table-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-table-kbd-bdc:.+?;/gms, '  --s-op-table-kbd-bdc: var(--g-main-bg-2);');
      chromeCSS = chromeCSS.replace(/^  --s-op-plugin-card-bd:.+?;/gms, '  --s-op-plugin-card-bd: hsl(var(--usp-hue),  75%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-plugin-card-bs:.+?;/gms, '  --s-op-plugin-card-bs: 3px hsl(var(--usp-hue),  75%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-plugin-card-text:.+?;/gms, '  --s-op-plugin-card-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-plugin-card-switcher-bg:.+?;/gms, '  --s-op-plugin-card-switcher-bg: hsl(var(--usp-hue),  85%,  85%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-confirm-btn-bg:.+?;/gms, '  --s-op-confirm-btn-bg: hsl(var(--usp-hue), 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-confirm-btn-bd:.+?;/gms, '  --s-op-confirm-btn-bd: hsl(var(--usp-hue),  60%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-confirm-btn-bs:.+?;/gms, '  --s-op-confirm-btn-bs: 3px hsl(var(--usp-hue),  75%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-confirm-btn-text:.+?;/gms, '  --s-op-confirm-btn-text: hsl(var(--usp-hue), 100%,  20%);');
      
      noteCSS = noteCSS.replace(/^  --sc-bg-1:.+?;/gms, '  --sc-bg-1: hsl(var(--usp-hue),   0%, 100%);');
      noteCSS = noteCSS.replace(/^  --sc-bg-2:.+?;/gms, '  --sc-bg-2: hsl(var(--usp-hue), 100%,  99%);');
      noteCSS = noteCSS.replace(/^  --sc-text:.+?;/gms, '  --sc-text: hsl(var(--usp-hue),   0%,   0%);');
      noteCSS = noteCSS.replace(/^  --sc-scrollbar-thumb-bg:.+?;/gms, '  --sc-scrollbar-thumb-bg: hsl(var(--usp-hue),  20%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-hr-bgc:.+?;/gms, '  --sc-hr-bgc: none;');
      noteCSS = noteCSS.replace(/^  --sc-hr-bgi:.+?;/gms, '  --sc-hr-bgi: repeating-linear-gradient(114deg, hsl(var(--usp-hue), 100%,  40%), hsl(var(--usp-hue), 100%,  75%,  50%), hsl(var(--usp-hue), 100%,  40%)  3px);');
      noteCSS = noteCSS.replace(/^  --sc-block-content-scrollbar-thumb-bd:.+?;/gms, '  --sc-block-content-scrollbar-thumb-bd: transparent;');
      noteCSS = noteCSS.replace(/^  --sc-block-content-scrollbar-thumb-bg:.+?;/gms, '  --sc-block-content-scrollbar-thumb-bg: radial-gradient(hsl(var(--usp-hue),  80%,  80%)  30%, hsl(var(--usp-hue),  90%,  75%)  70%);');
      noteCSS = noteCSS.replace(/^  --sc-block-content-scrollbar-thumb-bg-hover:.+?;/gms, '  --sc-block-content-scrollbar-thumb-bg-hover: radial-gradient(hsl(var(--usp-hue),  88%,  88%)  30%, hsl(var(--usp-hue),  98%,  83%)  70%);');
      noteCSS = noteCSS.replace(/^  --sc-special-text-ts:.+?;/gms, '  --sc-special-text-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-strong-text:.+?;/gms, '  --sc-strong-text: hsl(var(--usp-hue), 100%,  45%);');
      noteCSS = noteCSS.replace(/^  --sc-emphasize-text:.+?;/gms, '  --sc-emphasize-text: var(--sc-strong-text);');
      noteCSS = noteCSS.replace(/^  --sc-insert-text:.+?;/gms, '  --sc-insert-text: hsl(var(--usp-hue),  50%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-insert-bg:.+?;/gms, '  --sc-insert-bg: none;');
      noteCSS = noteCSS.replace(/^  --sc-insert-bdb:.+?;/gms, '  --sc-insert-bdb: hsl(var(--usp-hue),  20%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-insert-symbol:.+?;/gms, '  --sc-insert-symbol: hsl(0,   0%, 100%);');
      noteCSS = noteCSS.replace(/^  --sc-insert-symbol-bg:.+?;/gms, '  --sc-insert-symbol-bg: hsl(100,  60%,  45%);');
      noteCSS = noteCSS.replace(/^  --sc-strikethrough-text:.+?;/gms, '  --sc-strikethrough-text: hsl(var(--usp-hue),  25%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-strikethrough-bg:.+?;/gms, '  --sc-strikethrough-bg: none;');
      noteCSS = noteCSS.replace(/^  --sc-strikethrough-symbol:.+?;/gms, '  --sc-strikethrough-symbol: hsl(0,   0%, 100%);');
      noteCSS = noteCSS.replace(/^  --sc-strikethrough-symbol-bg:.+?;/gms, '  --sc-strikethrough-symbol-bg: hsl(0,  70%,  55%);');
      noteCSS = noteCSS.replace(/^  --sc-abbreviation-text:.+?;/gms, '  --sc-abbreviation-text: hsl(var(--usp-hue),  90%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-abbreviation-td:.+?;/gms, '  --sc-abbreviation-td: hsl(var(--usp-hue),  90%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-mark-text:.+?;/gms, '  --sc-mark-text: hsl(var(--usp-hue),   0%,   0%);');
      noteCSS = noteCSS.replace(/^  --sc-mark-ts:.+?;/gms, '  --sc-mark-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-mark-bg:.+?;/gms, '  --sc-mark-bg: hsl(var(--usp-hue), 100%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-search-text:.+?;/gms, '  --sc-search-text: hsl(var(--usp-hue),   0%, 100%);');
      noteCSS = noteCSS.replace(/^  --sc-search-bg:.+?;/gms, '  --sc-search-bg: hsl(var(--usp-hue),   0%,   0%);');
      noteCSS = noteCSS.replace(/^  --sc-search-bd:.+?;/gms, '  --sc-search-bd: hsl(  0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-inline-code-text:.+?;/gms, '  --sc-inline-code-text: hsl(var(--usp-hue),  20%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-inline-code-bg:.+?;/gms, '  --sc-inline-code-bg: hsl(var(--usp-hue),  20%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-inline-code-symbol:.+?;/gms, '  --sc-inline-code-symbol: hsl(var(--usp-hue),  20%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-link-text:.+?;/gms, '  --sc-link-text: hsl(var(--usp-hue), 100%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-link-source-icon:.+?;/gms, '  --sc-link-source-icon: hsl(var(--usp-hue), 100%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-list-token:.+?;/gms, '  --sc-list-token: hsl(calc(var(--usp-hue) + 180deg), 100%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-list-text:.+?;/gms, '  --sc-list-text: hsl(var(--usp-hue),  30%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-list-span:.+?;/gms, '  --sc-list-span: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-footnote-ref:.+?;/gms, '  --sc-footnote-ref: hsl(calc(var(--usp-hue) + 180deg), 100%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-footnote-title:.+?;/gms, '  --sc-footnote-title: hsl(var(--usp-hue),   0%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-footnote-title-bdt:.+?;/gms, '  --sc-footnote-title-bdt: 3px double hsl(var(--usp-hue),   0%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-footnote-list-text:.+?;/gms, '  --sc-footnote-list-text: hsl(var(--usp-hue),   0%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-footnote-list-token:.+?;/gms, '  --sc-footnote-list-token: hsl(var(--usp-hue),   0%,  45%);');
      noteCSS = noteCSS.replace(/^  --sc-heading-ref:.+?;/gms, '  --sc-heading-ref: hsl(0,   0%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-h1-text:.+?;/gms, '  --sc-h1-text: hsl(var(--usp-hue),  70%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-h1-bg:.+?;/gms, '  --sc-h1-bg: repeating-linear-gradient( 114deg, hsl(var(--usp-hue),  60%,  60%), hsl(var(--usp-hue), 100%,  65%,  30%), hsl(var(--usp-hue),  60%,  60%)  3px);');
      noteCSS = noteCSS.replace(/^  --sc-h1-bgi:.+?;/gms, '  --sc-h1-bgi: var(--sc-h1-bg);');
      noteCSS = noteCSS.replace(/^  --sc-h2-text:.+?;/gms, '  --sc-h2-text: hsl(var(--usp-hue),   0%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-h2-bgi:.+?;/gms, '  --sc-h2-bgi: linear-gradient(to right, hsl(var(--usp-hue),   0%,  40%)  50%, transparent);');
      noteCSS = noteCSS.replace(/^  --sc-h3-text:.+?;/gms, '  --sc-h3-text: var(--sc-h2-text);');
      noteCSS = noteCSS.replace(/^  --sc-h3-bgi:.+?;/gms, '  --sc-h3-bgi: var(--sc-h2-bgi);');
      noteCSS = noteCSS.replace(/^  --sc-h4-text:.+?;/gms, '  --sc-h4-text: var(--sc-h2-text);');
      noteCSS = noteCSS.replace(/^  --sc-h4-bgi:.+?;/gms, '  --sc-h4-bgi: var(--sc-h2-bgi);');
      noteCSS = noteCSS.replace(/^  --sc-h5-text:.+?;/gms, '  --sc-h5-text: hsl(var(--usp-hue), 0%, 60%);');
      noteCSS = noteCSS.replace(/^  --sc-h5-bgi:.+?;/gms, '  --sc-h5-bgi: linear-gradient(to right, transparent 50%, var(--sc-bg-1) 100%), repeating-linear-gradient(to right, hsl(var(--usp-hue),   0%,  60%), 2px, transparent, 2px, transparent 5px);');
      noteCSS = noteCSS.replace(/^  --sc-h6-text:.+?;/gms, '  --sc-h6-text: var(--sc-h5-text);');
      noteCSS = noteCSS.replace(/^  --sc-h6-bgi:.+?;/gms, '  --sc-h6-bgi: var(--sc-h5-bgi);');
      noteCSS = noteCSS.replace(/^  --sc-math-notation-text:.+?;/gms, '  --sc-math-notation-text: hsl(var(--usp-hue),   0%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-blockquote-bdl:.+?;/gms, '  --sc-blockquote-bdl: 5px dotted hsl(var(--usp-hue),  70%,  70%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-blockquote-text:.+?;/gms, '  --sc-blockquote-text: hsl(var(--usp-hue),   0%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-table-text:.+?;/gms, '  --sc-table-text: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-table-bd:.+?;/gms, '  --sc-table-bd: 2px solid var(--sc-bg-1);');
      noteCSS = noteCSS.replace(/^  --sc-table-header-bg:.+?;/gms, '  --sc-table-header-bg: hsl(var(--usp-hue), 100%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-table-header-ts:.+?;/gms, '  --sc-table-header-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-table-row-odd-bg:.+?;/gms, '  --sc-table-row-odd-bg: hsl(var(--usp-hue), 100%,  96%);');
      noteCSS = noteCSS.replace(/^  --sc-table-row-even-bg:.+?;/gms, '  --sc-table-row-even-bg: hsl(var(--usp-hue), 100%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-bg:.+?;/gms, '  --sc-toc-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-toc-bdc:.+?;/gms, '  --sc-toc-bdc: hsl(var(--usp-hue), 100%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-bs:.+?;/gms, '  --sc-toc-bs: 5px hsl(var(--usp-hue), 100%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-btn-text:.+?;/gms, '  --sc-toc-btn-text: hsl(var(--usp-hue),  20%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-btn-bg:.+?;/gms, '  --sc-toc-btn-bg: hsl(var(--usp-hue), 100%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-btn-bd:.+?;/gms, '  --sc-toc-btn-bd: 2px solid hsl(var(--usp-hue),  80%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-btn-bs:.+?;/gms, '  --sc-toc-btn-bs: 3px hsl(var(--usp-hue), 100%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-list-bdl:.+?;/gms, '  --sc-toc-list-bdl: 1px solid hsl(var(--usp-hue),  30%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-link-text-hover:.+?;/gms, '  --sc-toc-link-text-hover: hsl(var(--usp-hue),   0%,   0%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-link-bg-hover:.+?;/gms, '  --sc-toc-link-bg-hover: hsl(var(--usp-hue), 100%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-bg:.+?;/gms, '  --sc-code-block-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-bdc:.+?;/gms, '  --sc-code-block-bdc: hsl(var(--usp-hue), 100%,  45%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-bs:.+?;/gms, '  --sc-code-block-bs: 4px hsl(var(--usp-hue), 100%,  35%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-comment-text:.+?;/gms, '  --sc-code-block-comment-text: hsl(var(--usp-hue),   0%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-comment-ts:.+?;/gms, '  --sc-code-block-comment-ts: hsl(var(--usp-hue),   0%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-number-text:.+?;/gms, '  --sc-code-block-number-text: hsl(calc(var(--usp-hue) + 110deg),  80%,  46%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-number-ts:.+?;/gms, '  --sc-code-block-number-ts: hsl(calc(var(--usp-hue) + 110deg),  80%,  16%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-string-text:.+?;/gms, '  --sc-code-block-string-text: hsl(calc(var(--usp-hue) + 180deg),  80%,  55%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-string-ts:.+?;/gms, '  --sc-code-block-string-ts: hsl(calc(var(--usp-hue) + 180deg),  80%,  25%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-params-text:.+?;/gms, '  --sc-code-block-params-text: hsl(calc(var(--usp-hue) + 300deg),  80%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-params-ts:.+?;/gms, '  --sc-code-block-params-ts: hsl(calc(var(--usp-hue) + 300deg),  80%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-text:.+?;/gms, '  --sc-code-block-title-text: hsl(calc(var(--usp-hue) + 180deg),  80%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-ts:.+?;/gms, '  --sc-code-block-title-ts: hsl(calc(var(--usp-hue) + 180deg),  80%,  35%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-id-text:.+?;/gms, '  --sc-code-block-selector-id-text: hsl(calc(var(--usp-hue) + 159deg),  80%,  55%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-id-ts:.+?;/gms, '  --sc-code-block-selector-id-ts: hsl(calc(var(--usp-hue) + 159deg),  80%,  25%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-pseudo-text:.+?;/gms, '  --sc-code-block-selector-pseudo-text: hsl(calc(var(--usp-hue) + 323deg),  87%,  55%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-pseudo-ts:.+?;/gms, '  --sc-code-block-selector-pseudo-ts: hsl(calc(var(--usp-hue) + 323deg),  87%,  25%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-attr-text:.+?;/gms, '  --sc-code-block-selector-attr-text: hsl(calc(var(--usp-hue) + 300deg), 100%,  45%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-attr-ts:.+?;/gms, '  --sc-code-block-selector-attr-ts: hsl(calc(var(--usp-hue) + 300deg), 100%,  15%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-text:.+?;/gms, '  --sc-code-block-text: hsl(var(--usp-hue),   0%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-ts:.+?;/gms, '  --sc-code-block-ts: hsl(var(--usp-hue),   0%,  10%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-class-text:.+?;/gms, '  --sc-code-block-title-class-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-class-ts:.+?;/gms, '  --sc-code-block-title-class-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-text:.+?;/gms, '  --sc-code-block-function-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-ts:.+?;/gms, '  --sc-code-block-function-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-title-text:.+?;/gms, '  --sc-code-block-function-title-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-title-ts:.+?;/gms, '  --sc-code-block-function-title-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-params-text:.+?;/gms, '  --sc-code-block-function-params-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-params-ts:.+?;/gms, '  --sc-code-block-function-params-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-class-title-text:.+?;/gms, '  --sc-code-block-class-title-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-class-title-ts:.+?;/gms, '  --sc-code-block-class-title-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-operator-text:.+?;/gms, '  --sc-code-block-operator-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-operator-ts:.+?;/gms, '  --sc-code-block-operator-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-keyword-text:.+?;/gms, '  --sc-code-block-keyword-text: hsl(var(--usp-hue),  80%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-keyword-ts:.+?;/gms, '  --sc-code-block-keyword-ts: hsl(var(--usp-hue),  80%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-variable-language-text:.+?;/gms, '  --sc-code-block-variable-language-text: var(--sc-code-block-keyword-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-variable-language-ts:.+?;/gms, '  --sc-code-block-variable-language-ts: var(--sc-code-block-keyword-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-doctag-text:.+?;/gms, '  --sc-code-block-doctag-text: var(--sc-code-block-keyword-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-doctag-ts:.+?;/gms, '  --sc-code-block-doctag-ts: var(--sc-code-block-keyword-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-function-text:.+?;/gms, '  --sc-code-block-title-function-text: hsl(var(--usp-hue),  40%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-function-ts:.+?;/gms, '  --sc-code-block-title-function-ts: hsl(var(--usp-hue),  40%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-property-text:.+?;/gms, '  --sc-code-block-property-text: var(--sc-code-block-title-function-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-property-ts:.+?;/gms, '  --sc-code-block-property-ts: var(--sc-code-block-title-function-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-attr-text:.+?;/gms, '  --sc-code-block-attr-text: var(--sc-code-block-title-function-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-attr-ts:.+?;/gms, '  --sc-code-block-attr-ts: var(--sc-code-block-title-function-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-attribute-text:.+?;/gms, '  --sc-code-block-attribute-text: var(--sc-code-block-title-function-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-attribute-ts:.+?;/gms, '  --sc-code-block-attribute-ts: var(--sc-code-block-title-function-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-class-inherited-text:.+?;/gms, '  --sc-code-block-title-class-inherited-text: hsl(calc(var(--usp-hue) + 260deg),  80%,  55%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-class-inherited-ts:.+?;/gms, '  --sc-code-block-title-class-inherited-ts: hsl(calc(var(--usp-hue) + 260deg),  80%,  25%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-built-in-text:.+?;/gms, '  --sc-code-block-built-in-text: var(--sc-code-block-title-class-inherited-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-built-in-ts:.+?;/gms, '  --sc-code-block-built-in-ts: var(--sc-code-block-title-class-inherited-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-class-text:.+?;/gms, '  --sc-code-block-selector-class-text: var(--sc-code-block-title-class-inherited-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-class-ts:.+?;/gms, '  --sc-code-block-selector-class-ts: var(--sc-code-block-title-class-inherited-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-html-attr-text:.+?;/gms, '  --sc-code-block-html-attr-text: var(--sc-code-block-title-class-inherited-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-html-attr-ts:.+?;/gms, '  --sc-code-block-html-attr-ts: var(--sc-code-block-title-class-inherited-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-type-text:.+?;/gms, '  --sc-code-block-type-text: var(--sc-code-block-title-class-inherited-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-type-ts:.+?;/gms, '  --sc-code-block-type-ts: var(--sc-code-block-title-class-inherited-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-literal-text:.+?;/gms, '  --sc-code-block-literal-text: hsl(calc(var(--usp-hue) + 148deg),  80%,  45%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-literal-ts:.+?;/gms, '  --sc-code-block-literal-ts: hsl(calc(var(--usp-hue) + 148deg),  80%,  15%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-meta-text:.+?;/gms, '  --sc-code-block-meta-text: var(--sc-code-block-literal-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-meta-ts:.+?;/gms, '  --sc-code-block-meta-ts: var(--sc-code-block-literal-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-symbol-text:.+?;/gms, '  --sc-code-block-symbol-text: var(--sc-code-block-literal-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-symbol-ts:.+?;/gms, '  --sc-code-block-symbol-ts: var(--sc-code-block-literal-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-subst-text:.+?;/gms, '  --sc-code-block-subst-text: hsl(calc(var(--usp-hue) +  90deg),  80%,  55%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-subst-ts:.+?;/gms, '  --sc-code-block-subst-ts: hsl(calc(var(--usp-hue) +  90deg),  80%,  25%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-variable-text:.+?;/gms, '  --sc-code-block-variable-text: var(--sc-code-block-subst-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-variable-ts:.+?;/gms, '  --sc-code-block-variable-ts: var(--sc-code-block-subst-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-regexp-text:.+?;/gms, '  --sc-code-block-regexp-text: var(--sc-code-block-subst-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-regexp-ts:.+?;/gms, '  --sc-code-block-regexp-ts: var(--sc-code-block-subst-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-tag-text:.+?;/gms, '  --sc-code-block-selector-tag-text: hsl(calc(var(--usp-hue) + 120deg),  80%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-tag-ts:.+?;/gms, '  --sc-code-block-selector-tag-ts: hsl(calc(var(--usp-hue) + 120deg),  80%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-tag-text:.+?;/gms, '  --sc-code-block-tag-text: var(--sc-code-block-selector-tag-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-tag-ts:.+?;/gms, '  --sc-code-block-tag-ts: var(--sc-code-block-selector-tag-ts);');
      noteCSS = noteCSS.replace(/^  --sc-art-gallery-bg:.+?;/gms, '  --sc-art-gallery-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-art-gallery-bdc:.+?;/gms, '  --sc-art-gallery-bdc: hsl(var(--usp-hue),  85%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-art-gallery-ds:.+?;/gms, '  --sc-art-gallery-ds: 2px hsl(var(--usp-hue), 100%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-text:.+?;/gms, '  --sc-sticky-notes-text: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-bg:.+?;/gms, '  --sc-sticky-notes-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-bdc:.+?;/gms, '  --sc-sticky-notes-bdc: hsl(var(--usp-hue), 100%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-ds:.+?;/gms, '  --sc-sticky-notes-ds: 2px hsl(var(--usp-hue), 100%,  35%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-text:.+?;/gms, '  --sc-sticky-notes-important-text: hsl(40,  50%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-bg:.+?;/gms, '  --sc-sticky-notes-important-bg: hsl(0, 100%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-bd:.+?;/gms, '  --sc-sticky-notes-important-bd: hsl(0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-bs:.+?;/gms, '  --sc-sticky-notes-important-bs: 6px hsl(0, 100%,  10%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-tags-text:.+?;/gms, '  --sc-sticky-notes-tags-text: hsl(0,   0%, 100%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-tags-ts:.+?;/gms, '  --sc-sticky-notes-tags-ts: 2px hsl(var(--usp-hue),   0%,   0%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-note-tag-bg:.+?;/gms, '  --sc-sticky-notes-note-tag-bg: hsl(206, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-tip-tag-bg:.+?;/gms, '  --sc-sticky-notes-tip-tag-bg: hsl(56, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-question-tag-bg:.+?;/gms, '  --sc-sticky-notes-question-tag-bg: hsl(270, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-explain-tag-bg:.+?;/gms, '  --sc-sticky-notes-explain-tag-bg: hsl(163, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-warning-tag-bg:.+?;/gms, '  --sc-sticky-notes-warning-tag-bg: hsl(0, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-keyword-tag-bg:.+?;/gms, '  --sc-sticky-notes-keyword-tag-bg: hsl(324, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-comment-tag-bg:.+?;/gms, '  --sc-sticky-notes-comment-tag-bg: hsl(100, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-tag-text:.+?;/gms, '  --sc-sticky-notes-important-tag-text: hsl(0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-tag-bg:.+?;/gms, '  --sc-sticky-notes-important-tag-bg: hsl(0, 100%,  12%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-tag-bdc:.+?;/gms, '  --sc-sticky-notes-important-tag-bdc: hsl(0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-custom-title-block-bg:.+?;/gms, '  --sc-custom-title-block-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-custom-title-block-ds:.+?;/gms, '  --sc-custom-title-block-ds: 2px hsl(var(--usp-hue), 100%,  35%);');
      noteCSS = noteCSS.replace(/^  --sc-custom-title-block-title:.+?;/gms, '  --sc-custom-title-block-title: hsl(var(--usp-hue),  80%,  45%);');
      noteCSS = noteCSS.replace(/^  --sc-custom-title-block-symbol-bg:.+?;/gms, '  --sc-custom-title-block-symbol-bg: repeating-radial-gradient(circle, hsl(var(--usp-hue),  80%,  45%), hsl(var(--usp-hue), 100%, 100%) 27%);');
      noteCSS = noteCSS.replace(/^  --sc-key-point-text:.+?;/gms, '  --sc-key-point-text: hsl(var(--usp-hue),  80%,  55%);');
      noteCSS = noteCSS.replace(/^  --sc-key-point-ts:.+?;/gms, '  --sc-key-point-ts: hsl(var(--usp-hue),  80%,  25%);');
      noteCSS = noteCSS.replace(/^  --sc-key-point-bdc:.+?;/gms, '  --sc-key-point-bdc: hsl(var(--usp-hue),  80%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-key-mention-text:.+?;/gms, '  --sc-key-mention-text: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-key-mention-bg:.+?;/gms, '  --sc-key-mention-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-key-mention-bd:.+?;/gms, '  --sc-key-mention-bd: 1px solid hsl(var(--usp-hue), 100%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-key-mention-special-text:.+?;/gms, '  --sc-key-mention-special-text: hsl(0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-text:.+?;/gms, '  --sc-plugin-spoiler-text: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-bg:.+?;/gms, '  --sc-plugin-spoiler-bg: hsl(var(--usp-hue), 100%,  98%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-bs:.+?;/gms, '  --sc-plugin-spoiler-bs: 4px hsl(var(--usp-hue), 100%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-title:.+?;/gms, '  --sc-plugin-spoiler-title: hsl(var(--usp-hue),  30%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-list-text:.+?;/gms, '  --sc-plugin-spoiler-list-text: hsl(var(--usp-hue), 100%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-span-title:.+?;/gms, '  --sc-plugin-spoiler-span-title: hsl(var(--usp-hue),  30%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-span-title-bg:.+?;/gms, '  --sc-plugin-spoiler-span-title-bg: hsl(var(--usp-hue), 100%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-list-span:.+?;/gms, '  --sc-plugin-spoiler-list-span: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-custom-title-block-text:.+?;/gms, '  --sc-plugin-spoiler-custom-title-block-text: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-custom-title-block-bg:.+?;/gms, '  --sc-plugin-spoiler-custom-title-block-bg: hsl(var(--usp-hue), 100%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-custom-title-block-title:.+?;/gms, '  --sc-plugin-spoiler-custom-title-block-title: hsl(var(--usp-hue),  30%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-inline-text:.+?;/gms, '  --sc-plugin-spoiler-inline-text: hsl(0,   0%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-inline-bg:.+?;/gms, '  --sc-plugin-spoiler-inline-bg: hsl(0,   0%, 100%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-inline-bd:.+?;/gms, '  --sc-plugin-spoiler-inline-bd: 1px solid hsl(var(--usp-hue), 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-inline-symbol:.+?;/gms, '  --sc-plugin-spoiler-inline-symbol: hsl(var(--usp-hue), 100%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-inline-symbol-hover:.+?;/gms, '  --sc-plugin-spoiler-inline-symbol-hover: hsl(0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-turntochart-bg:.+?;/gms, '  --sc-plugin-turntochart-bg: none;');
      noteCSS = noteCSS.replace(/^  --sc-plugin-turntochart-text:.+?;/gms, '  --sc-plugin-turntochart-text: hsl(var(--usp-hue),   0%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-turntochart-info-bg:.+?;/gms, '  --sc-plugin-turntochart-info-bg: hsl(var(--usp-hue),   0%,  95%);');

      chromeCSS = chromeCSS.replace(/^  --usp-base-font:.+?;/gms, '  --usp-base-font: var(--usp-custom-base-font), "Mulish", "Montserrat", "GenSenRounded TW", "Chiron Hei HK Light", Avenir, Arial;');
      chromeCSS = chromeCSS.replace(/^  --usp-monospace-font:.+?;/gms, '  --usp-monospace-font: var(--usp-custom-monospace-font), "Cascadia Mono Light", "GenSenRounded TW", "Chiron Hei HK Light", Roboto;');
      chromeCSS = chromeCSS.replace(/^  --usp-heading-font:.+?;/gms, '  --usp-heading-font: var(--usp-custom-heading-font), "Montserrat", "Mulish", "GenSenRounded TW", "Chiron Hei HK", Avenir, Arial;');
      noteCSS = noteCSS.replace(/^  --usp-base-font:.+?;/gms, '  --usp-base-font: var(--usp-custom-base-font), "Mulish", "Montserrat", "GenSenRounded TW", "Chiron Hei HK Light", Avenir, Arial;');
      noteCSS = noteCSS.replace(/^  --usp-monospace-font:.+?;/gms, '  --usp-monospace-font: var(--usp-custom-monospace-font), "Cascadia Mono Light", "GenSenRounded TW", "Chiron Hei HK Light";');
      noteCSS = noteCSS.replace(/^  --usp-heading-font:.+?;/gms, '  --usp-heading-font: var(--usp-custom-heading-font), "Montserrat", "Mulish", "GenSenRounded TW", "Chiron Hei HK", Avenir, Arial;');
      noteCSS = noteCSS.replace(/^  --usp-print-base-font:.+?;/gms, '  --usp-print-base-font: var(--usp-print-custom-base-font), "Mulish", "Montserrat", "GenSenRounded TW", "Chiron Hei HK Light", Avenir, Arial;');
      noteCSS = noteCSS.replace(/^  --usp-print-monospace-font:.+?;/gms, '  --usp-print-monospace-font: var(--usp-print-custom-monospace-font), "Cascadia Mono Light", "GenSenRounded TW", "Chiron Hei HK Light", Roboto;');
      noteCSS = noteCSS.replace(/^  --usp-print-heading-font:.+?;/gms, '  --usp-print-heading-font: var(--usp-print-custom-heading-font), "Montserrat", "Mulish", "GenSenRounded TW", "Chiron Hei HK", Avenir, Arial;');

      if(!darkerEditorBackground) {
        chromeCSS = chromeCSS.replace(/^  --me-bg:.+?;/gms, '  --me-bg: hsl(var(--usp-hue),   0%, 100%);');
        chromeCSS = chromeCSS.replace(/^  --me-code-block-bg:.+?;/gms, '  --me-code-block-bg: hsl(var(--usp-hue),   0%, 100%);');
        noteCSS = noteCSS.replace(/^  --sc-bg-1:.+?;/gms, '  --sc-bg-1: hsl(var(--usp-hue),   0%, 100%);');
        noteCSS = noteCSS.replace(/^  --sc-bg-2:.+?;/gms, '  --sc-bg-2: hsl(var(--usp-hue),   0%, 100%);');
      } else {
        chromeCSS = chromeCSS.replace(/^  --me-bg:.+?;/gms, '  --me-bg: hsl(var(--usp-hue),   0%, 100%);');
        chromeCSS = chromeCSS.replace(/^  --me-code-block-bg:.+?;/gms, '  --me-code-block-bg: hsl(var(--usp-hue),   0%, 100%);');
        noteCSS = noteCSS.replace(/^  --sc-bg-1:.+?;/gms, '  --sc-bg-1: hsl(var(--usp-hue),   0%, 100%);');
        noteCSS = noteCSS.replace(/^  --sc-bg-2:.+?;/gms, '  --sc-bg-2: hsl(var(--usp-hue),   0%, 100%);');
      }

      if(!emphasizeAddRemove && !emphasizeAddRemoveBg) {
        chromeCSS = chromeCSS.replace(/^  --me-insert-text:.+?;/gms, '  --me-insert-text: hsl(var(--usp-hue),  50%,  50%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bdb:.+?;/gms, '  --me-insert-bdb: hsl(var(--usp-hue),  20%,  75%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bg:.+?;/gms, '  --me-insert-bg: none;');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-text:.+?;/gms, '  --me-strikethrough-text: hsl(var(--usp-hue),  20%,  75%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-bg:.+?;/gms, '  --me-strikethrough-bg: none;');
        noteCSS = noteCSS.replace(/^  --sc-insert-text:.+?;/gms, '  --sc-insert-text: hsl(var(--usp-hue),  50%,  50%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bdb:.+?;/gms, '  --sc-insert-bdb: hsl(var(--usp-hue),  20%,  75%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bg:.+?;/gms, '  --sc-insert-bg: none;');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-text:.+?;/gms, '  --sc-strikethrough-text: hsl(var(--usp-hue),  20%,  75%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-bg:.+?;/gms, '  --sc-strikethrough-bg: none;');
        noteCSS = noteCSS.replace(/^  --pr-insert-text:.+?;/gms, '  --pr-insert-text: hsl(var(--usp-hue), 100%,  40%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bd:.+?;/gms, '  --pr-insert-bd: hsl(var(--usp-hue),  25%,  50%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bg:.+?;/gms, '  --pr-insert-bg: none;');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-text:.+?;/gms, '  --pr-strikethrough-text: hsl(var(--usp-hue),  25%,  50%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-bg:.+?;/gms, '  --pr-strikethrough-bg: none;');
      } else if(!emphasizeAddRemove && emphasizeAddRemoveBg) {
        chromeCSS = chromeCSS.replace(/^  --me-insert-text:.+?;/gms, '  --me-insert-text: hsl(var(--usp-hue),  25%,  35%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bdb:.+?;/gms, '  --me-insert-bdb: hsl(var(--usp-hue),  25%,  35%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bg:.+?;/gms, '  --me-insert-bg: hsl(var(--usp-hue), 100%,  82%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-text:.+?;/gms, '  --me-strikethrough-text: hsl(var(--usp-hue),  25%,  55%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-bg:.+?;/gms, '  --me-strikethrough-bg: hsl(var(--usp-hue), 100%,  90%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-text:.+?;/gms, '  --sc-insert-text: hsl(var(--usp-hue),  25%,  35%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bdb:.+?;/gms, '  --sc-insert-bdb: hsl(var(--usp-hue),  25%,  35%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bg:.+?;/gms, '  --sc-insert-bg: hsl(var(--usp-hue), 100%,  82%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-text:.+?;/gms, '  --sc-strikethrough-text: hsl(var(--usp-hue), 100%,  90%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-bg:.+?;/gms, '  --sc-strikethrough-bg: hsl(var(--usp-hue),  30%,  20%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-text:.+?;/gms, '  --pr-insert-text: hsl(var(--usp-hue), 100%,  40%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bd:.+?;/gms, '  --pr-insert-bd: hsl(var(--usp-hue),  25%,  50%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bg:.+?;/gms, '  --pr-insert-bg: hsl(var(--usp-hue),  40%,  95%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-text:.+?;/gms, '  --pr-strikethrough-text: hsl(var(--usp-hue),  25%,  50%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-bg:.+?;/gms, '  --pr-strikethrough-bg: hsl(var(--usp-hue),  25%,  85%);');
      } else if(emphasizeAddRemove && !emphasizeAddRemoveBg) {
        chromeCSS = chromeCSS.replace(/^  --me-insert-text:.+?;/gms, '  --me-insert-text: hsl(100, 100%,  30%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bdb:.+?;/gms, '  --me-insert-bdb: hsl(100, 100%,  30%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bg:.+?;/gms, '  --me-insert-bg: none;');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-text:.+?;/gms, '  --me-strikethrough-text: hsl(0, 100%,  70%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-bg:.+?;/gms, '  --me-strikethrough-bg: none;');
        noteCSS = noteCSS.replace(/^  --sc-insert-text:.+?;/gms, '  --sc-insert-text: hsl(100, 100%,  30%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bdb:.+?;/gms, '  --sc-insert-bdb: hsl(100, 100%,  30%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bg:.+?;/gms, '  --sc-insert-bg: none;');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-text:.+?;/gms, '  --sc-strikethrough-text: hsl(0, 100%,  70%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-bg:.+?;/gms, '  --sc-strikethrough-bg: none;');
        noteCSS = noteCSS.replace(/^  --pr-insert-text:.+?;/gms, '  --pr-insert-text: hsl(100,  40%,  45%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bd:.+?;/gms, '  --pr-insert-bd: hsl(100,  70%,  35%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bg:.+?;/gms, '  --pr-insert-bg: none;');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-text:.+?;/gms, '  --pr-strikethrough-text: hsl(0, 100%,  65%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-bg:.+?;/gms, '  --pr-strikethrough-bg: none;');
      } else {
        chromeCSS = chromeCSS.replace(/^  --me-insert-text:.+?;/gms, '  --me-insert-text: hsl(100, 100%,  30%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bdb:.+?;/gms, '  --me-insert-bdb: hsl(100, 100%,  30%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bg:.+?;/gms, '  --me-insert-bg: hsl(100, 100%,  90%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-text:.+?;/gms, '  --me-strikethrough-text: hsl(0, 100%,  70%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-bg:.+?;/gms, '  --me-strikethrough-bg: hsl(0, 100%,  90%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-text:.+?;/gms, '  --sc-insert-text: hsl(100, 100%,  30%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bdb:.+?;/gms, '  --sc-insert-bdb: hsl(100, 100%,  30%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bg:.+?;/gms, '  --sc-insert-bg: hsl(100, 100%,  90%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-text:.+?;/gms, '  --sc-strikethrough-text: hsl(0, 100%,  70%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-bg:.+?;/gms, '  --sc-strikethrough-bg: hsl(0, 100%,  90%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-text:.+?;/gms, '  --pr-insert-text: hsl(100,  40%,  45%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bd:.+?;/gms, '  --pr-insert-bd: hsl(100,  70%,  35%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bg:.+?;/gms, '  --pr-insert-bg: hsl(100,  35%,  95%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-text:.+?;/gms, '  --pr-strikethrough-text: hsl(0, 100%,  65%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-bg:.+?;/gms, '  --pr-strikethrough-bg: hsl(0,  35%,  90%);');
      }
      
      if(!themeColorListText) {
        chromeCSS = chromeCSS.replace(/^  --me-list-text:.+?;/gms, '  --me-list-text: var(--me-text);');
        chromeCSS = chromeCSS.replace(/^  --me-footnote-ref:.+?;/gms, '  --me-footnote-ref: hsl(var(--usp-hue), 100%,  40%);');
        chromeCSS = chromeCSS.replace(/^  --me-plugin-eh-footnote-ref:.+?;/gms, '  --me-plugin-eh-footnote-ref: hsl(var(--usp-hue),   0%, 100%);');
        noteCSS = noteCSS.replace(/^  --sc-list-text:.+?;/gms, '  --sc-list-text: var(--sc-text);');
        noteCSS = noteCSS.replace(/^  --sc-list-span:.+?;/gms, '  --sc-list-span: hsl(var(--usp-hue),  30%,  40%);');
        noteCSS = noteCSS.replace(/^  --sc-footnote-ref:.+?;/gms, '  --sc-footnote-ref: hsl(var(--usp-hue), 100%,  40%);');
      } else {
        chromeCSS = chromeCSS.replace(/^  --me-list-text:.+?;/gms, '  --me-list-text: hsl(var(--usp-hue),  30%,  40%);');
        chromeCSS = chromeCSS.replace(/^  --me-footnote-ref:.+?;/gms, '  --me-footnote-ref: hsl(calc(var(--usp-hue) + 180deg), 100%,  40%);');
        chromeCSS = chromeCSS.replace(/^  --me-plugin-eh-footnote-ref:.+?;/gms, '  --me-plugin-eh-footnote-ref: hsl(calc(var(--usp-hue) + 180deg),   0%, 100%);');
        noteCSS = noteCSS.replace(/^  --sc-list-text:.+?;/gms, '  --sc-list-text: hsl(var(--usp-hue),  30%,  40%);');
        noteCSS = noteCSS.replace(/^  --sc-list-span:.+?;/gms, '  --sc-list-span: var(--sc-text);');
        noteCSS = noteCSS.replace(/^  --sc-footnote-ref:.+?;/gms, '  --sc-footnote-ref: hsl(calc(var(--usp-hue) + 180deg), 100%,  40%);');
      }

      if(!h1TwillPattern) {
        noteCSS = noteCSS.replace(/^  --usp-h1-text-fill:.+?;/gms, '  --usp-h1-text-fill: none;');
        noteCSS = noteCSS.replace(/^  --usp-h1-font-weight:.+?;/gms, '  --usp-h1-font-weight: 600;');
        noteCSS = noteCSS.replace(/^  --sc-h1-bgi:.+?;/gms, '  --sc-h1-bgi: linear-gradient(to right, hsl(var(--usp-hue),  70%,  70%) 50%, transparent);');
      } else {
        noteCSS = noteCSS.replace(/^  --usp-h1-text-fill:.+?;/gms, '  --usp-h1-text-fill: transparent;');
        noteCSS = noteCSS.replace(/^  --usp-h1-font-weight:.+?;/gms, '  --usp-h1-font-weight: 800;');
        noteCSS = noteCSS.replace(/^  --sc-h1-bgi:.+?;/gms, '  --sc-h1-bgi: var(--sc-h1-bg);');
      }

      if(!hrTwillPattern) {
        noteCSS = noteCSS.replace(/^  --sc-hr-bgc:.+?;/gms, '  --sc-hr-bgc: hsl(var(--usp-hue), 100%,  45%);');
        noteCSS = noteCSS.replace(/^  --sc-hr-bgi:.+?;/gms, '  --sc-hr-bgi: none;');
      } else {
        noteCSS = noteCSS.replace(/^  --sc-hr-bgc:.+?;/gms, '  --sc-hr-bgc: none;');
        noteCSS = noteCSS.replace(/^  --sc-hr-bgi:.+?;/gms, '  --sc-hr-bgi: repeating-linear-gradient(114deg, hsl(var(--usp-hue), 100%,  40%), hsl(var(--usp-hue), 100%,  75%,  50%), hsl(var(--usp-hue), 100%,  40%)  3px);');
      }

      if(!dottedBlockquote) {
        noteCSS = noteCSS.replace(/^  --sc-blockquote-bdl:.+?;/gms, '  --sc-blockquote-bdl: 3px solid hsl(var(--usp-hue),  70%,  70%,  70%);');
        noteCSS = noteCSS.replace(/^  --pr-blockquote-bdl:.+?;/gms, '  --pr-blockquote-bdl: 2px solid hsl(var(--usp-hue),  20%,  60%);');
      } else {
        noteCSS = noteCSS.replace(/^  --sc-blockquote-bdl:.+?;/gms, '  --sc-blockquote-bdl: 5px dotted hsl(var(--usp-hue),  70%,  70%,  70%);');
        noteCSS = noteCSS.replace(/^  --pr-blockquote-bdl:.+?;/gms, '  --pr-blockquote-bdl: 4px dotted hsl(var(--usp-hue),  20%,  60%);');
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
    
      chromeCSS = chromeCSS.replace(/^  --me-bg:.+?;/gms, '  --me-bg: hsl(var(--usp-hue),   8%,  27%);');
      chromeCSS = chromeCSS.replace(/^  --me-text:.+?;/gms, '  --me-text: hsl(var(--usp-hue),   0%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --me-scrollbar-track-bg:.+?;/gms, '  --me-scrollbar-track-bg: hsl(var(--usp-hue),  70%,  70%, 20%);');
      chromeCSS = chromeCSS.replace(/^  --me-scrollbar-thumb-bg:.+?;/gms, '  --me-scrollbar-thumb-bg: linear-gradient(to bottom, hsl(var(--usp-hue), 100%,  70%)  3px, hsl(var(--usp-hue),  10%,  28%)  4px, hsl(var(--usp-hue),  10%,  28%) calc(100% - 4px), hsl(var(--usp-hue), 100%,  70%) calc(100% - 3px));');
      chromeCSS = chromeCSS.replace(/^  --me-scrollbar-thumb-bd:.+?;/gms, '  --me-scrollbar-thumb-bd: hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-hr-syntax-text:.+?;/gms, '  --me-hr-syntax-text: hsl(var(--usp-hue),   0%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --me-hr-syntax-bg:.+?;/gms, '  --me-hr-syntax-bg: hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-cursor-bdl:.+?;/gms, '  --me-cursor-bdl: 2px solid hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-selected-text:.+?;/gms, '  --me-selected-text: var(--me-text);');
      chromeCSS = chromeCSS.replace(/^  --me-selected-bg:.+?;/gms, '  --me-selected-bg: hsl(calc(var(--usp-hue) + 180deg),  10%,  50%,  45%);');
      chromeCSS = chromeCSS.replace(/^  --me-selected-bg-focused:.+?;/gms, '  --me-selected-bg-focused: hsl(calc(var(--usp-hue) + 180deg),  10%,  50%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --me-special-text:.+?;/gms, '  --me-special-text: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --me-special-bg:.+?;/gms, '  --me-special-bg: hsl(var(--usp-hue),  30%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-mark-text:.+?;/gms, '  --me-mark-text: hsl(var(--usp-hue),  30%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --me-mark-ts:.+?;/gms, '  --me-mark-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-mark-bg:.+?;/gms, '  --me-mark-bg: hsl(var(--usp-hue), 100%,  85%);');
      chromeCSS = chromeCSS.replace(/^  --me-insert-text:.+?;/gms, '  --me-insert-text: hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-insert-bg:.+?;/gms, '  --me-insert-bg: none;');
      chromeCSS = chromeCSS.replace(/^  --me-insert-bdb:.+?;/gms, '  --me-insert-bdb: hsl(var(--usp-hue),  25%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-strikethrough-text:.+?;/gms, '  --me-strikethrough-text: hsl(var(--usp-hue),  25%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-strikethrough-bg:.+?;/gms, '  --me-strikethrough-bg: none;');
      chromeCSS = chromeCSS.replace(/^  --me-sub-sup-text:.+?;/gms, '  --me-sub-sup-text: hsl(var(--usp-hue),  50%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-inline-code-text:.+?;/gms, '  --me-inline-code-text: hsl(var(--usp-hue), 100%,  85%);');
      chromeCSS = chromeCSS.replace(/^  --me-inline-code-bg:.+?;/gms, '  --me-inline-code-bg: hsl(var(--usp-hue),  30%,  25%);');
      chromeCSS = chromeCSS.replace(/^  --me-link-text:.+?;/gms, '  --me-link-text: hsl(var(--usp-hue),  80%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-html-tag-text:.+?;/gms, '  --me-html-tag-text: hsl(  0, 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-html-tag-ts:.+?;/gms, '  --me-html-tag-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-html-attribute-text:.+?;/gms, '  --me-html-attribute-text: hsl(145, 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-html-attribute-ts:.+?;/gms, '  --me-html-attribute-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-html-string-text:.+?;/gms, '  --me-html-string-text: hsl(300, 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-html-string-ts:.+?;/gms, '  --me-html-string-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-list-token:.+?;/gms, '  --me-list-token: hsl(calc(var(--usp-hue) + 180deg),  80%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-list-text:.+?;/gms, '  --me-list-text: hsl(var(--usp-hue),  30%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-checkbox-text:.+?;/gms, '  --me-checkbox-text: hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-footnote-ref:.+?;/gms, '  --me-footnote-ref: hsl(calc(var(--usp-hue) + 180deg), 100%, 85%);');
      chromeCSS = chromeCSS.replace(/^  --me-h1-text:.+?;/gms, '  --me-h1-text: hsl(var(--usp-hue), 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-h2-text:.+?;/gms, '  --me-h2-text: hsl(var(--usp-hue), 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --me-h3-text:.+?;/gms, '  --me-h3-text: hsl(var(--usp-hue), 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --me-h4-text:.+?;/gms, '  --me-h4-text: hsl(var(--usp-hue), 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --me-h5-text:.+?;/gms, '  --me-h5-text: hsl(var(--usp-hue),  30%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-h6-text:.+?;/gms, '  --me-h6-text: hsl(var(--usp-hue),  30%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-blockquote-text:.+?;/gms, '  --me-blockquote-text: hsl(var(--usp-hue),  30%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-bg:.+?;/gms, '  --me-code-block-bg: hsl(var(--usp-hue),   8%,  17%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-bdw:.+?;/gms, '  --me-code-block-bdw: 0 3px;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-bdc:.+?;/gms, '  --me-code-block-bdc: hsl(var(--usp-hue),  40%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-comment-text:.+?;/gms, '  --me-code-block-comment-text: hsl(var(--usp-hue),   0%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-comment-ts:.+?;/gms, '  --me-code-block-comment-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-number-text:.+?;/gms, '  --me-code-block-number-text: hsl(calc(var(--usp-hue) + 110deg), 100%,  66%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-number-ts:.+?;/gms, '  --me-code-block-number-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-string-text:.+?;/gms, '  --me-code-block-string-text: hsl(calc(var(--usp-hue) + 180deg), 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-string-ts:.+?;/gms, '  --me-code-block-string-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-3-text:.+?;/gms, '  --me-code-block-variable-3-text: hsl(calc(var(--usp-hue) + 323deg), 100%,  85%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-3-ts:.+?;/gms, '  --me-code-block-variable-3-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-attribute-text:.+?;/gms, '  --me-code-block-attribute-text: hsl(calc(var(--usp-hue) + 240deg), 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-attribute-ts:.+?;/gms, '  --me-code-block-attribute-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-error-text:.+?;/gms, '  --me-code-block-error-text: hsl(  0, 100%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-error-bdb:.+?;/gms, '  --me-code-block-error-bdb: 2px dotted hsl(  0, 100%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-invalidchar-text:.+?;/gms, '  --me-code-block-invalidchar-text: hsl(  0, 100%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-invalidchar-ts:.+?;/gms, '  --me-code-block-invalidchar-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-text:.+?;/gms, '  --me-code-block-variable-text: hsl(var(--usp-hue),   0%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-ts:.+?;/gms, '  --me-code-block-variable-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-2-text:.+?;/gms, '  --me-code-block-variable-2-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-2-ts:.+?;/gms, '  --me-code-block-variable-2-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-def-text:.+?;/gms, '  --me-code-block-def-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-def-ts:.+?;/gms, '  --me-code-block-def-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-undefined-text:.+?;/gms, '  --me-code-block-undefined-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-undefined-ts:.+?;/gms, '  --me-code-block-undefined-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-operator-text:.+?;/gms, '  --me-code-block-operator-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-operator-ts:.+?;/gms, '  --me-code-block-operator-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-null-text:.+?;/gms, '  --me-code-block-null-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-null-ts:.+?;/gms, '  --me-code-block-null-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-matching-bracket-text:.+?;/gms, '  --me-code-block-matching-bracket-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-matching-bracket-ts:.+?;/gms, '  --me-code-block-matching-bracket-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-keyword-text:.+?;/gms, '  --me-code-block-keyword-text: hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-keyword-ts:.+?;/gms, '  --me-code-block-keyword-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-property-text:.+?;/gms, '  --me-code-block-property-text: hsl(var(--usp-hue), 100%,  85%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-property-ts:.+?;/gms, '  --me-code-block-property-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-qualifier-text:.+?;/gms, '  --me-code-block-qualifier-text: hsl(calc(var(--usp-hue) + 260deg), 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-qualifier-ts:.+?;/gms, '  --me-code-block-qualifier-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-type-text:.+?;/gms, '  --me-code-block-type-text: var(--me-code-block-qualifier-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-type-ts:.+?;/gms, '  --me-code-block-type-ts: var(--me-code-block-qualifier-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-builtin-text:.+?;/gms, '  --me-code-block-builtin-text: var(--me-code-block-qualifier-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-builtin-ts:.+?;/gms, '  --me-code-block-builtin-ts: var(--me-code-block-qualifier-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-atom-text:.+?;/gms, '  --me-code-block-atom-text: sl(calc(var(--usp-hue) + 148deg), 100%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-atom-ts:.+?;/gms, '  --me-code-block-atom-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-meta-text:.+?;/gms, '  --me-code-block-meta-text: var(--me-code-block-atom-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-meta-ts:.+?;/gms, '  --me-code-block-meta-ts: var(--me-code-block-atom-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-string-2-text:.+?;/gms, '  --me-code-block-string-2-text: hsl(calc(var(--usp-hue) +  90deg), 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-string-2-ts:.+?;/gms, '  --me-code-block-string-2-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-tag-text:.+?;/gms, '  --me-code-block-tag-text: hsl(calc(var(--usp-hue) + 120deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-tag-ts:.+?;/gms, '  --me-code-block-tag-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-table-text:.+?;/gms, '  --me-plugin-mtc-table-text: hsl(var(--usp-hue),   0%,  100%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-table-vertical-bar:.+?;/gms, '  --me-plugin-mtc-table-vertical-bar: hsl(var(--usp-hue),   0%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-separator-bg:.+?;/gms, '  --me-plugin-mtc-separator-bg: hsl(var(--usp-hue),   0%, 100%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-separator-text:.+?;/gms, '  --me-plugin-mtc-separator-text: hsl(var(--usp-hue),  40%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-1:.+?;/gms, '  --me-plugin-mtc-column-mark-1: hsl(  0, 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-1-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-1-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-2:.+?;/gms, '  --me-plugin-mtc-column-mark-2: hsl(240,  70%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-2-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-2-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-3:.+?;/gms, '  --me-plugin-mtc-column-mark-3: hsl(160,  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-3-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-3-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-4:.+?;/gms, '  --me-plugin-mtc-column-mark-4: hsl( 40,  90%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-4-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-4-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-5:.+?;/gms, '  --me-plugin-mtc-column-mark-5: hsl( 60,  60%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-5-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-5-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-6:.+?;/gms, '  --me-plugin-mtc-column-mark-6: hsl(190,  80%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-6-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-6-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-7:.+?;/gms, '  --me-plugin-mtc-column-mark-7: hsl(100,  70%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-7-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-7-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-8:.+?;/gms, '  --me-plugin-mtc-column-mark-8: hsl(210, 100%,  55%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-8-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-8-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-9:.+?;/gms, '  --me-plugin-mtc-column-mark-9: hsl(270, 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-9-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-9-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-10:.+?;/gms, '  --me-plugin-mtc-column-mark-10: hsl(310,  70%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-10-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-10-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-eh-footnote-ref:.+?;/gms, '  --me-plugin-eh-footnote-ref: hsl(calc(var(--usp-hue) + 180deg), 100%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --g-main-bg-1:.+?;/gms, '  --g-main-bg-1: hsl(var(--usp-hue),  11%,  13%);');
      chromeCSS = chromeCSS.replace(/^  --g-main-bg-2:.+?;/gms, '  --g-main-bg-2: hsl(var(--usp-hue),   8%,  27%);');
      chromeCSS = chromeCSS.replace(/^  --g-panel-header-bgc:.+?;/gms, '  --g-panel-header-bgc: hsl(var(--usp-hue),  80%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --g-panel-header-text:.+?;/gms, '  --g-panel-header-text: hsl(var(--usp-hue),   0%, 100%);');
      chromeCSS = chromeCSS.replace(/^  --g-panel-header-ts:.+?;/gms, '  --g-panel-header-ts: 3px hsl(var(--usp-hue), 100%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-bgc-hover:.+?;/gms, '  --g-item-bgc-hover: hsl(var(--usp-hue),  30%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-bgc-selected:.+?;/gms, '  --g-item-bgc-selected: hsl(var(--usp-hue),  40%,  35%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-ds-hover:.+?;/gms, '  --g-item-ds-hover: 2px hsl(var(--usp-hue), 100%,  35%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-divider:.+?;/gms, '  --g-item-divider: hsl(var(--usp-hue),  20%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-text-1:.+?;/gms, '  --g-item-text-1: hsl(var(--usp-hue), 100%,  98%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-ts-selected:.+?;/gms, '  --g-item-ts-selected: 4px hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-text-2:.+?;/gms, '  --g-item-text-2: hsl(var(--usp-hue), 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bg-1:.+?;/gms, '  --g-square-btn-bg-1: none;');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bg-1-hover:.+?;/gms, '  --g-square-btn-bg-1-hover: hsl(var(--usp-hue),  20%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bd-1:.+?;/gms, '  --g-square-btn-bd-1: transparent;');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bd-1-hover:.+?;/gms, '  --g-square-btn-bd-1-hover: hsl(var(--usp-hue), 100%,  25%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-icon-1:.+?;/gms, '  --g-square-btn-icon-1: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-icon-1-hover:.+?;/gms, '  --g-square-btn-icon-1-hover: hsl(var(--usp-hue), 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bg-2:.+?;/gms, '  --g-square-btn-bg-2: none;');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bg-2-hover:.+?;/gms, '  --g-square-btn-bg-2-hover: hsl(var(--usp-hue),  20%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bd-2:.+?;/gms, '  --g-square-btn-bd-2: transparent;');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bd-2-hover:.+?;/gms, '  --g-square-btn-bd-2-hover: hsl(var(--usp-hue), 100%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-icon-2:.+?;/gms, '  --g-square-btn-icon-2: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-icon-2-hover:.+?;/gms, '  --g-square-btn-icon-2-hover: hsl(var(--usp-hue), 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --g-scrollbar-thumb-bg:.+?;/gms, '  --g-scrollbar-thumb-bg: hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --g-scrollbar-track-bg:.+?;/gms, '  --g-scrollbar-track-bg: hsl(var(--usp-hue),  20%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-input-text:.+?;/gms, '  --g-input-text: hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --g-input-bg:.+?;/gms, '  --g-input-bg: hsl(var(--usp-hue),  11%,  13%);');
      chromeCSS = chromeCSS.replace(/^  --g-input-bd:.+?;/gms, '  --g-input-bd: hsl(var(--usp-hue),  50%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --g-toolbar-bg:.+?;/gms, '  --g-toolbar-bg: hsl(var(--usp-hue),  11%,  13%);');
      chromeCSS = chromeCSS.replace(/^  --g-toolbar-bd:.+?;/gms, '  --g-toolbar-bd: hsl(var(--usp-hue),  70%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --g-ep-divider:.+?;/gms, '  --g-ep-divider: hsl(var(--usp-hue),  30%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --s-panel-divider:.+?;/gms, '  --s-panel-divider: hsl(var(--usp-hue),  14%,  11%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-directory-icon-open:.+?;/gms, '  --s-np-directory-icon-open: hsl(var(--usp-hue),  20%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-directory-icon-open-ds:.+?;/gms, '  --s-np-directory-icon-open-ds: 0px hsl(var(--usp-hue), 100%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-directory-icon-close:.+?;/gms, '  --s-np-directory-icon-close: hsl(var(--usp-hue), 100%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-directory-icon-close-ds:.+?;/gms, '  --s-np-directory-icon-close-ds: 2px hsl(var(--usp-hue), 100%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-0:.+?;/gms, '  --s-np-notebook-folder-icon-0: hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-1:.+?;/gms, '  --s-np-notebook-folder-icon-1: hsl(calc(var(--usp-hue) +  50deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-2:.+?;/gms, '  --s-np-notebook-folder-icon-2: hsl(calc(var(--usp-hue) + 100deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-3:.+?;/gms, '  --s-np-notebook-folder-icon-3: hsl(calc(var(--usp-hue) + 150deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-4:.+?;/gms, '  --s-np-notebook-folder-icon-4: hsl(calc(var(--usp-hue) + 200deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-5:.+?;/gms, '  --s-np-notebook-folder-icon-5: hsl(calc(var(--usp-hue) + 250deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-6:.+?;/gms, '  --s-np-notebook-folder-icon-6: hsl(calc(var(--usp-hue) + 300deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-7:.+?;/gms, '  --s-np-notebook-folder-icon-7: hsl(calc(var(--usp-hue) + 350deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-8:.+?;/gms, '  --s-np-notebook-folder-icon-8: hsl(calc(var(--usp-hue) + 40deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-9:.+?;/gms, '  --s-np-notebook-folder-icon-9: hsl(calc(var(--usp-hue) + 90deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-10:.+?;/gms, '  --s-np-notebook-folder-icon-10: hsl(calc(var(--usp-hue) + 140deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-11:.+?;/gms, '  --s-np-notebook-folder-icon-11: hsl(calc(var(--usp-hue) + 190deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-12:.+?;/gms, '  --s-np-notebook-folder-icon-12: hsl(calc(var(--usp-hue) + 240deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-13:.+?;/gms, '  --s-np-notebook-folder-icon-13: hsl(calc(var(--usp-hue) + 290deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-14:.+?;/gms, '  --s-np-notebook-folder-icon-14: hsl(calc(var(--usp-hue) + 340deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-15:.+?;/gms, '  --s-np-notebook-folder-icon-15: hsl(calc(var(--usp-hue) + 30deg), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-note-count-label-text:.+?;/gms, '  --s-np-note-count-label-text: hsl(var(--usp-hue),   0%, 100%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-note-count-label-bgc:.+?;/gms, '  --s-np-note-count-label-bgc: hsl(var(--usp-hue),  40%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-note-count-label-bd:.+?;/gms, '  --s-np-note-count-label-bd: hsl(var(--usp-hue),  50%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-note-count-label-ds:.+?;/gms, '  --s-np-note-count-label-ds: 1px hsl(var(--usp-hue), 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-info-text:.+?;/gms, '  --s-np-sync-info-text: hsl(var(--usp-hue), 100%,  95%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-info-symbol:.+?;/gms, '  --s-np-sync-info-symbol: radial-gradient(hsl(var(--usp-hue), 100%,  80%)  25%, hsl(var(--usp-hue), 100%,  50%)  55%, hsl(var(--usp-hue), 100%,  80%)  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-bg:.+?;/gms, '  --s-np-sync-btn-bg: transparent;');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-bd:.+?;/gms, '  --s-np-sync-btn-bd: hsl(var(--usp-hue),  20%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-bg-hover:.+?;/gms, '  --s-np-sync-btn-bg-hover: hsl(var(--usp-hue),  30%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-bdc-hover:.+?;/gms, '  --s-np-sync-btn-bdc-hover: hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-text:.+?;/gms, '  --s-np-sync-btn-text: hsl(var(--usp-hue),   0%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-text-hover:.+?;/gms, '  --s-np-sync-btn-text-hover: hsl(var(--usp-hue),  20%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-icon-ts:.+?;/gms, '  --s-np-sync-btn-icon-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-icon-ts-hover:.+?;/gms, '  --s-np-sync-btn-icon-ts-hover: 3px hsl(var(--usp-hue),  20%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-nlp-todo-text:.+?;/gms, '  --s-nlp-todo-text: hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-nlp-search-btn:.+?;/gms, '  --s-nlp-search-btn: hsl(var(--usp-hue),   0%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-toolbar-ds:.+?;/gms, '  --s-ep-toolbar-ds: 1px hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-notebook-nav-btn-bg:.+?;/gms, '  --s-ep-notebook-nav-btn-bg: hsl(var(--usp-hue),  30%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-notebook-nav-btn-bd:.+?;/gms, '  --s-ep-notebook-nav-btn-bd: hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-notebook-nav-btn-bs:.+?;/gms, '  --s-ep-notebook-nav-btn-bs: 3px hsl(var(--usp-hue), 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-notebook-nav-btn-text:.+?;/gms, '  --s-ep-notebook-nav-btn-text: hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-batch-menu-btn-text:.+?;/gms, '  --s-ep-batch-menu-btn-text: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-batch-menu-btn-bg:.+?;/gms, '  --s-ep-batch-menu-btn-bg: hsl(var(--usp-hue),  50%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-batch-menu-btn-bd:.+?;/gms, '  --s-ep-batch-menu-btn-bd: hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-update-time-label-bg:.+?;/gms, '  --s-ep-update-time-label-bg: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-update-time-label-text:.+?;/gms, '  --s-ep-update-time-label-text: hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-tagbar-tag-text:.+?;/gms, '  --s-ep-tagbar-tag-text: hsl(var(--usp-hue),  20%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-tagbar-tag-text-hover:.+?;/gms, '  --s-ep-tagbar-tag-text-hover: hsl(var(--usp-hue),  20%,  95%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-tagbar-tag-ts-hover:.+?;/gms, '  --s-ep-tagbar-tag-ts-hover: none;');
      chromeCSS = chromeCSS.replace(/^  --s-ep-tagbar-tag-divider:.+?;/gms, '  --s-ep-tagbar-tag-divider: hsl(var(--usp-hue), 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-tagbar-hint-text:.+?;/gms, '  --s-ep-tagbar-hint-text: hsl(var(--usp-hue),  40%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-footer-popup-msg-text:.+?;/gms, '  --s-ep-footer-popup-msg-text: hsl( 30, 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-footer-popup-msg-bg:.+?;/gms, '  --s-ep-footer-popup-msg-bg: hsl(  0,  50%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-footer-popup-msg-link:.+?;/gms, '  --s-ep-footer-popup-msg-link: hsl(200,  90%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-bg:.+?;/gms, '  --s-md-bg: hsl(var(--usp-hue),  11%,  13%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-label-text:.+?;/gms, '  --s-md-label-text: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-title-text:.+?;/gms, '  --s-md-title-text: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-confirm-btn-text:.+?;/gms, '  --s-md-confirm-btn-text: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-confirm-btn-bg:.+?;/gms, '  --s-md-confirm-btn-bg: hsl(var(--usp-hue),  40%,  15%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-confirm-btn-bd:.+?;/gms, '  --s-md-confirm-btn-bd: hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-notebook-creator-icon-select-btn-bg:.+?;/gms, '  --s-md-notebook-creator-icon-select-btn-bg: hsl(var(--usp-hue),  50%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-notebook-creator-icon-select-btn-bd:.+?;/gms, '  --s-md-notebook-creator-icon-select-btn-bd: hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-notebook-creator-icon-select-btn-text:.+?;/gms, '  --s-md-notebook-creator-icon-select-btn-text: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-tag-selector-bg:.+?;/gms, '  --s-md-tag-selector-bg: hsl(var(--usp-hue),  50%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-tag-selector-bd:.+?;/gms, '  --s-md-tag-selector-bd: hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-tag-selector-input-text:.+?;/gms, '  --s-md-tag-selector-input-text: hsl(var(--usp-hue), 100%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-tag-selector-divider:.+?;/gms, '  --s-md-tag-selector-divider: hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-tag-selector-text:.+?;/gms, '  --s-md-tag-selector-text: hsl(var(--usp-hue),  20%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-command-palette-item-bg:.+?;/gms, '  --s-md-command-palette-item-bg: hsl(var(--usp-hue),  11%,  13%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-command-palette-item-bg-selected:.+?;/gms, '  --s-md-command-palette-item-bg-selected: hsl(var(--usp-hue),  30%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-command-palette-item-bdb:.+?;/gms, '  --s-md-command-palette-item-bdb: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-command-palette-item-text:.+?;/gms, '  --s-md-command-palette-item-text: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-menu-subtitle-bg:.+?;/gms, '  --s-op-menu-subtitle-bg: hsl(var(--usp-hue),   0%,   0%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-guide-text:.+?;/gms, '  --s-op-guide-text: hsl(var(--usp-hue),  30%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-guide-bg:.+?;/gms, '  --s-op-guide-bg: hsl(var(--usp-hue),  17%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-label-text:.+?;/gms, '  --s-op-label-text: hsl(var(--usp-hue),  20%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-input-text:.+?;/gms, '  --s-op-input-text: hsl(var(--usp-hue),  20%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-btn-bg:.+?;/gms, '  --s-op-btn-bg: hsl(var(--usp-hue),  30%,  25%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-btn-bd:.+?;/gms, '  --s-op-btn-bd: hsl(var(--usp-hue),  40%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-btn-text:.+?;/gms, '  --s-op-btn-text: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-description-text:.+?;/gms, '  --s-op-description-text: hsl(var(--usp-hue),  20%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-table-text:.+?;/gms, '  --s-op-table-text: hsl(var(--usp-hue),  40%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-table-kbd-bdc:.+?;/gms, '  --s-op-table-kbd-bdc: hsl(var(--usp-hue),  10%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-plugin-card-bd:.+?;/gms, '  --s-op-plugin-card-bd: hsl(var(--usp-hue),  30%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-plugin-card-bs:.+?;/gms, '  --s-op-plugin-card-bs: 3px hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-plugin-card-text:.+?;/gms, '  --s-op-plugin-card-text: hsl(var(--usp-hue),  20%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-plugin-card-switcher-bg:.+?;/gms, '  --s-op-plugin-card-switcher-bg: hsl(var(--usp-hue), 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-confirm-btn-bg:.+?;/gms, '  --s-op-confirm-btn-bg: hsl(var(--usp-hue),  50%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-confirm-btn-bd:.+?;/gms, '  --s-op-confirm-btn-bd: hsl(var(--usp-hue), 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-confirm-btn-bs:.+?;/gms, '  --s-op-confirm-btn-bs: 3px hsl(var(--usp-hue), 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-confirm-btn-text:.+?;/gms, '  --s-op-confirm-btn-text: hsl(var(--usp-hue),  60%,  90%);');
      
      noteCSS = noteCSS.replace(/^  --sc-bg-1:.+?;/gms, '  --sc-bg-1: hsl(var(--usp-hue),   8%,  27%);');
      noteCSS = noteCSS.replace(/^  --sc-bg-2:.+?;/gms, '  --sc-bg-2: hsl(var(--usp-hue),   8%,  17%);');
      noteCSS = noteCSS.replace(/^  --sc-text:.+?;/gms, '  --sc-text: hsl(var(--usp-hue),   0%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-scrollbar-thumb-bg:.+?;/gms, '  --sc-scrollbar-thumb-bg: hsl(var(--usp-hue), 100%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-hr-bgc:.+?;/gms, '  --sc-hr-bgc: none;');
      noteCSS = noteCSS.replace(/^  --sc-hr-bgi:.+?;/gms, '  --sc-hr-bgi: repeating-linear-gradient(114deg, hsl(var(--usp-hue), 100%,  80%), hsl(var(--usp-hue), 100%,  35%,  50%), hsl(var(--usp-hue), 100%,  80%)  3px);');
      noteCSS = noteCSS.replace(/^  --sc-block-content-scrollbar-thumb-bd:.+?;/gms, '  --sc-block-content-scrollbar-thumb-bd: transparent;');
      noteCSS = noteCSS.replace(/^  --sc-block-content-scrollbar-thumb-bg:.+?;/gms, '  --sc-block-content-scrollbar-thumb-bg: radial-gradient(hsl(var(--usp-hue),  30%,  60%)  30%, hsl(var(--usp-hue),  40%,  70%)  70%);');
      noteCSS = noteCSS.replace(/^  --sc-block-content-scrollbar-thumb-bg-hover:.+?;/gms, '  --sc-block-content-scrollbar-thumb-bg-hover: radial-gradient(hsl(var(--usp-hue),  50%,  60%)  30%, hsl(var(--usp-hue),  60%,  70%)  70%);');
      noteCSS = noteCSS.replace(/^  --sc-special-text-ts:.+?;/gms, '  --sc-special-text-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-strong-text:.+?;/gms, '  --sc-strong-text: hsl(var(--usp-hue), 100%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-emphasize-text:.+?;/gms, '  --sc-emphasize-text: var(--sc-strong-text);');
      noteCSS = noteCSS.replace(/^  --sc-insert-text:.+?;/gms, '  --sc-insert-text: hsl(var(--usp-hue), 100%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-insert-bg:.+?;/gms, '  --sc-insert-bg: none;');
      noteCSS = noteCSS.replace(/^  --sc-insert-bdb:.+?;/gms, '  --sc-insert-bdb: hsl(var(--usp-hue),  25%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-insert-symbol:.+?;/gms, '  --sc-insert-symbol: hsl(  0,   0%, 100%);');
      noteCSS = noteCSS.replace(/^  --sc-insert-symbol-bg:.+?;/gms, '  --sc-insert-symbol-bg: hsl(100,  60%,  45%);');
      noteCSS = noteCSS.replace(/^  --sc-strikethrough-text:.+?;/gms, '  --sc-strikethrough-text: hsl(var(--usp-hue),  25%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-strikethrough-bg:.+?;/gms, '  --sc-strikethrough-bg: none;');
      noteCSS = noteCSS.replace(/^  --sc-strikethrough-symbol:.+?;/gms, '  --sc-strikethrough-symbol: hsl(  0,   0%, 100%);');
      noteCSS = noteCSS.replace(/^  --sc-strikethrough-symbol-bg:.+?;/gms, '  --sc-strikethrough-symbol-bg: hsl(  0,  70%,  55%);');
      noteCSS = noteCSS.replace(/^  --sc-abbreviation-text:.+?;/gms, '  --sc-abbreviation-text: hsl(var(--usp-hue), 100%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-abbreviation-td:.+?;/gms, '  --sc-abbreviation-td: hsl(var(--usp-hue), 100%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-mark-text:.+?;/gms, '  --sc-mark-text: hsl(var(--usp-hue),  30%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-mark-ts:.+?;/gms, '  --sc-mark-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-mark-bg:.+?;/gms, '  --sc-mark-bg: hsl(var(--usp-hue), 100%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-search-text:.+?;/gms, '  --sc-search-text: hsl(var(--usp-hue),   0%, 100%);');
      noteCSS = noteCSS.replace(/^  --sc-search-bg:.+?;/gms, '  --sc-search-bg: hsl(var(--usp-hue),   0%,   0%);');
      noteCSS = noteCSS.replace(/^  --sc-search-bd:.+?;/gms, '  --sc-search-bd: hsl(  0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-inline-code-text:.+?;/gms, '  --sc-inline-code-text: hsl(var(--usp-hue), 100%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-inline-code-bg:.+?;/gms, '  --sc-inline-code-bg: hsl(var(--usp-hue),  30%,  25%);');
      noteCSS = noteCSS.replace(/^  --sc-inline-code-symbol:.+?;/gms, '  --sc-inline-code-symbol: hsl(var(--usp-hue),  40%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-link-text:.+?;/gms, '  --sc-link-text: hsl(var(--usp-hue), 100%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-link-source-icon:.+?;/gms, '  --sc-link-source-icon: hsl(var(--usp-hue), 100%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-list-token:.+?;/gms, '  --sc-list-token: hsl(calc(var(--usp-hue) + 180deg),  80%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-list-text:.+?;/gms, '  --sc-list-text: hsl(var(--usp-hue),  30%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-list-span:.+?;/gms, '  --sc-list-span: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-footnote-ref:.+?;/gms, '  --sc-footnote-ref: hsl(calc(var(--usp-hue) + 180deg), 100%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-footnote-title:.+?;/gms, '  --sc-footnote-title: hsl(var(--usp-hue),   0%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-footnote-title-bdt:.+?;/gms, '  --sc-footnote-title-bdt: 3px double hsl(var(--usp-hue),   0%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-footnote-list-text:.+?;/gms, '  --sc-footnote-list-text: hsl(var(--usp-hue),   0%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-footnote-list-token:.+?;/gms, '  --sc-footnote-list-token: hsl(var(--usp-hue),   0%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-heading-ref:.+?;/gms, '  --sc-heading-ref: hsl(  0,   0%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-h1-text:.+?;/gms, '  --sc-h1-text: hsl(var(--usp-hue), 100%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-h1-bg:.+?;/gms, '  --sc-h1-bg: repeating-linear-gradient( 114deg, hsl(var(--usp-hue), 100%,  80%), hsl(var(--usp-hue), 100%,  65%,  30%), hsl(var(--usp-hue), 100%,  80%)  3px);');
      noteCSS = noteCSS.replace(/^  --sc-h1-bgi:.+?;/gms, '  --sc-h1-bgi: var(--sc-h1-bg);');
      noteCSS = noteCSS.replace(/^  --sc-h2-text:.+?;/gms, '  --sc-h2-text: hsl(var(--usp-hue), 100%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-h2-bgi:.+?;/gms, '  --sc-h2-bgi: linear-gradient(to right, hsl(var(--usp-hue), 100%,  80%)  50%, transparent);');
      noteCSS = noteCSS.replace(/^  --sc-h3-text:.+?;/gms, '  --sc-h3-text: var(--sc-h2-text);');
      noteCSS = noteCSS.replace(/^  --sc-h3-bgi:.+?;/gms, '  --sc-h3-bgi: var(--sc-h2-bgi);');
      noteCSS = noteCSS.replace(/^  --sc-h4-text:.+?;/gms, '  --sc-h4-text: var(--sc-h2-text);');
      noteCSS = noteCSS.replace(/^  --sc-h4-bgi:.+?;/gms, '  --sc-h4-bgi: var(--sc-h2-bgi);');
      noteCSS = noteCSS.replace(/^  --sc-h5-text:.+?;/gms, '  --sc-h5-text: hsl(var(--usp-hue),  30%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-h5-bgi:.+?;/gms, '  --sc-h5-bgi: linear-gradient(to right, transparent 50%, var(--sc-bg-1) 100%), repeating-linear-gradient(to right, hsl(var(--usp-hue),  30%,  80%), 2px, transparent, 2px, transparent 5px);');
      noteCSS = noteCSS.replace(/^  --sc-h6-text:.+?;/gms, '  --sc-h6-text: var(--sc-h5-text);');
      noteCSS = noteCSS.replace(/^  --sc-h6-bgi:.+?;/gms, '  --sc-h6-bgi: var(--sc-h5-bgi);');
      noteCSS = noteCSS.replace(/^  --sc-math-notation-text:.+?;/gms, '  --sc-math-notation-text: hsl(var(--usp-hue), 100%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-blockquote-bdl:.+?;/gms, '  --sc-blockquote-bdl: 5px dotted hsl(var(--usp-hue),  20%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-blockquote-text:.+?;/gms, '  --sc-blockquote-text: hsl(var(--usp-hue),   0%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-table-text:.+?;/gms, '  --sc-table-text: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-table-bd:.+?;/gms, '  --sc-table-bd: 2px solid var(--sc-bg-1);');
      noteCSS = noteCSS.replace(/^  --sc-table-header-bg:.+?;/gms, '  --sc-table-header-bg: hsl(var(--usp-hue),  80%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-table-header-ts:.+?;/gms, '  --sc-table-header-ts: 2px black;');
      noteCSS = noteCSS.replace(/^  --sc-table-row-odd-bg:.+?;/gms, '  --sc-table-row-odd-bg: hsl(var(--usp-hue),  15%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-table-row-even-bg:.+?;/gms, '  --sc-table-row-even-bg: hsl(var(--usp-hue),  10%,  35%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-bg:.+?;/gms, '  --sc-toc-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-toc-bdc:.+?;/gms, '  --sc-toc-bdc: hsl(var(--usp-hue), 100%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-bs:.+?;/gms, '  --sc-toc-bs: 10px hsl(var(--usp-hue), 100%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-btn-text:.+?;/gms, '  --sc-toc-btn-text: var(--sc-bg-1);');
      noteCSS = noteCSS.replace(/^  --sc-toc-btn-bg:.+?;/gms, '  --sc-toc-btn-bg: hsl(var(--usp-hue), 100%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-btn-bd:.+?;/gms, '  --sc-toc-btn-bd: 2px solid hsl(var(--usp-hue), 100%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-btn-bs:.+?;/gms, '  --sc-toc-btn-bs: 5px hsl(var(--usp-hue), 100%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-list-bdl:.+?;/gms, '  --sc-toc-list-bdl: 1px solid hsl(var(--usp-hue),  30%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-link-text-hover:.+?;/gms, '  --sc-toc-link-text-hover: hsl(var(--usp-hue),   0%, 100%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-link-bg-hover:.+?;/gms, '  --sc-toc-link-bg-hover: hsl(var(--usp-hue),  25%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-bg:.+?;/gms, '  --sc-code-block-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-bdc:.+?;/gms, '  --sc-code-block-bdc: hsl(var(--usp-hue), 100%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-bs:.+?;/gms, '  --sc-code-block-bs: 4px hsl(var(--usp-hue), 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-comment-text:.+?;/gms, '  --sc-code-block-comment-text: hsl(var(--usp-hue),   0%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-comment-ts:.+?;/gms, '  --sc-code-block-comment-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-number-text:.+?;/gms, '  --sc-code-block-number-text: hsl(calc(var(--usp-hue) + 110deg), 100%,  66%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-number-ts:.+?;/gms, '  --sc-code-block-number-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-string-text:.+?;/gms, '  --sc-code-block-string-text: hsl(calc(var(--usp-hue) + 180deg), 100%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-string-ts:.+?;/gms, '  --sc-code-block-string-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-params-text:.+?;/gms, '  --sc-code-block-params-text: hsl(calc(var(--usp-hue) + 300deg), 100%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-params-ts:.+?;/gms, '  --sc-code-block-params-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-text:.+?;/gms, '  --sc-code-block-title-text: hsl(calc(var(--usp-hue) + 180deg), 100%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-ts:.+?;/gms, '  --sc-code-block-title-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-id-text:.+?;/gms, '  --sc-code-block-selector-id-text: hsl(calc(var(--usp-hue) + 159deg), 100%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-id-ts:.+?;/gms, '  --sc-code-block-selector-id-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-pseudo-text:.+?;/gms, '  --sc-code-block-selector-pseudo-text: hsl(calc(var(--usp-hue) + 323deg),  87%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-pseudo-ts:.+?;/gms, '  --sc-code-block-selector-pseudo-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-attr-text:.+?;/gms, '  --sc-code-block-selector-attr-text: hsl(calc(var(--usp-hue) + 300deg), 100%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-attr-ts:.+?;/gms, '  --sc-code-block-selector-attr-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-text:.+?;/gms, '  --sc-code-block-text: hsl(var(--usp-hue),   0%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-ts:.+?;/gms, '  --sc-code-block-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-class-text:.+?;/gms, '  --sc-code-block-title-class-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-class-ts:.+?;/gms, '  --sc-code-block-title-class-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-text:.+?;/gms, '  --sc-code-block-function-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-ts:.+?;/gms, '  --sc-code-block-function-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-title-text:.+?;/gms, '  --sc-code-block-function-title-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-title-ts:.+?;/gms, '  --sc-code-block-function-title-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-params-text:.+?;/gms, '  --sc-code-block-function-params-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-params-ts:.+?;/gms, '  --sc-code-block-function-params-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-class-title-text:.+?;/gms, '  --sc-code-block-class-title-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-class-title-ts:.+?;/gms, '  --sc-code-block-class-title-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-operator-text:.+?;/gms, '  --sc-code-block-operator-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-operator-ts:.+?;/gms, '  --sc-code-block-operator-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-keyword-text:.+?;/gms, '  --sc-code-block-keyword-text: hsl(var(--usp-hue), 100%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-keyword-ts:.+?;/gms, '  --sc-code-block-keyword-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-variable-language-text:.+?;/gms, '  --sc-code-block-variable-language-text: var(--sc-code-block-keyword-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-variable-language-ts:.+?;/gms, '  --sc-code-block-variable-language-ts: var(--sc-code-block-keyword-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-doctag-text:.+?;/gms, '  --sc-code-block-doctag-text: var(--sc-code-block-keyword-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-doctag-ts:.+?;/gms, '  --sc-code-block-doctag-ts: var(--sc-code-block-keyword-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-function-text:.+?;/gms, '  --sc-code-block-title-function-text: hsl(var(--usp-hue), 100%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-function-ts:.+?;/gms, '  --sc-code-block-title-function-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-property-text:.+?;/gms, '  --sc-code-block-property-text: var(--sc-code-block-title-function-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-property-ts:.+?;/gms, '  --sc-code-block-property-ts: var(--sc-code-block-title-function-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-attr-text:.+?;/gms, '  --sc-code-block-attr-text: var(--sc-code-block-title-function-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-attr-ts:.+?;/gms, '  --sc-code-block-attr-ts: var(--sc-code-block-title-function-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-attribute-text:.+?;/gms, '  --sc-code-block-attribute-text: var(--sc-code-block-title-function-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-attribute-ts:.+?;/gms, '  --sc-code-block-attribute-ts: var(--sc-code-block-title-function-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-class-inherited-text:.+?;/gms, '  --sc-code-block-title-class-inherited-text: hsl(calc(var(--usp-hue) + 260deg), 100%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-class-inherited-ts:.+?;/gms, '  --sc-code-block-title-class-inherited-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-built-in-text:.+?;/gms, '  --sc-code-block-built-in-text: var(--sc-code-block-title-class-inherited-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-built-in-ts:.+?;/gms, '  --sc-code-block-built-in-ts: var(--sc-code-block-title-class-inherited-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-class-text:.+?;/gms, '  --sc-code-block-selector-class-text: var(--sc-code-block-title-class-inherited-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-class-ts:.+?;/gms, '  --sc-code-block-selector-class-ts: var(--sc-code-block-title-class-inherited-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-html-attr-text:.+?;/gms, '  --sc-code-block-html-attr-text: var(--sc-code-block-title-class-inherited-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-html-attr-ts:.+?;/gms, '  --sc-code-block-html-attr-ts: var(--sc-code-block-title-class-inherited-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-type-text:.+?;/gms, '  --sc-code-block-type-text: var(--sc-code-block-title-class-inherited-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-type-ts:.+?;/gms, '  --sc-code-block-type-ts: var(--sc-code-block-title-class-inherited-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-literal-text:.+?;/gms, '  --sc-code-block-literal-text: hsl(calc(var(--usp-hue) + 148deg), 100%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-literal-ts:.+?;/gms, '  --sc-code-block-literal-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-meta-text:.+?;/gms, '  --sc-code-block-meta-text: var(--sc-code-block-literal-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-meta-ts:.+?;/gms, '  --sc-code-block-meta-ts: var(--sc-code-block-literal-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-symbol-text:.+?;/gms, '  --sc-code-block-symbol-text: var(--sc-code-block-literal-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-symbol-ts:.+?;/gms, '  --sc-code-block-symbol-ts: var(--sc-code-block-literal-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-subst-text:.+?;/gms, '  --sc-code-block-subst-text: hsl(calc(var(--usp-hue) +  90deg), 100%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-subst-ts:.+?;/gms, '  --sc-code-block-subst-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-variable-text:.+?;/gms, '  --sc-code-block-variable-text: var(--sc-code-block-subst-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-variable-ts:.+?;/gms, '  --sc-code-block-variable-ts: var(--sc-code-block-subst-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-regexp-text:.+?;/gms, '  --sc-code-block-regexp-text: var(--sc-code-block-subst-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-regexp-ts:.+?;/gms, '  --sc-code-block-regexp-ts: var(--sc-code-block-subst-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-tag-text:.+?;/gms, '  --sc-code-block-selector-tag-text: hsl(calc(var(--usp-hue) + 120deg), 100%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-tag-ts:.+?;/gms, '  --sc-code-block-selector-tag-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-tag-text:.+?;/gms, '  --sc-code-block-tag-text: var(--sc-code-block-selector-tag-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-tag-ts:.+?;/gms, '  --sc-code-block-tag-ts: var(--sc-code-block-selector-tag-ts);');
      noteCSS = noteCSS.replace(/^  --sc-art-gallery-bg:.+?;/gms, '  --sc-art-gallery-bg: hsl(var(--usp-hue),  15%,  15%);');
      noteCSS = noteCSS.replace(/^  --sc-art-gallery-bdc:.+?;/gms, '  --sc-art-gallery-bdc: hsl(var(--usp-hue), 100%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-art-gallery-ds:.+?;/gms, '  --sc-art-gallery-ds: 2px hsl(var(--usp-hue), 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-text:.+?;/gms, '  --sc-sticky-notes-text: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-bg:.+?;/gms, '  --sc-sticky-notes-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-bdc:.+?;/gms, '  --sc-sticky-notes-bdc: hsl(var(--usp-hue), 100%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-ds:.+?;/gms, '  --sc-sticky-notes-ds: 2px hsl(var(--usp-hue), 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-text:.+?;/gms, '  --sc-sticky-notes-important-text: hsl( 40,  50%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-bg:.+?;/gms, '  --sc-sticky-notes-important-bg: hsl(  0, 100%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-bd:.+?;/gms, '  --sc-sticky-notes-important-bd: hsl(  0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-bs:.+?;/gms, '  --sc-sticky-notes-important-bs: 6px hsl(  0, 100%,  10%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-tags-text:.+?;/gms, '  --sc-sticky-notes-tags-text: hsl(  0,   0%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-tags-ts:.+?;/gms, '  --sc-sticky-notes-tags-ts: 2px hsl(var(--usp-hue),   0%,   0%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-note-tag-bg:.+?;/gms, '  --sc-sticky-notes-note-tag-bg: hsl(206, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-tip-tag-bg:.+?;/gms, '  --sc-sticky-notes-tip-tag-bg: hsl( 56, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-question-tag-bg:.+?;/gms, '  --sc-sticky-notes-question-tag-bg: hsl(270, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-explain-tag-bg:.+?;/gms, '  --sc-sticky-notes-explain-tag-bg: hsl(163, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-warning-tag-bg:.+?;/gms, '  --sc-sticky-notes-warning-tag-bg: hsl(  0, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-keyword-tag-bg:.+?;/gms, '  --sc-sticky-notes-keyword-tag-bg: hsl(324, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-comment-tag-bg:.+?;/gms, '  --sc-sticky-notes-comment-tag-bg: hsl(100, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-tag-text:.+?;/gms, '  --sc-sticky-notes-important-tag-text: hsl(  0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-tag-bg:.+?;/gms, '  --sc-sticky-notes-important-tag-bg: hsl(  0, 100%,  12%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-tag-bdc:.+?;/gms, '  --sc-sticky-notes-important-tag-bdc: hsl(  0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-custom-title-block-bg:.+?;/gms, '  --sc-custom-title-block-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-custom-title-block-ds:.+?;/gms, '  --sc-custom-title-block-ds: 2px hsl(var(--usp-hue), 100%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-custom-title-block-title:.+?;/gms, '  --sc-custom-title-block-title: hsl(var(--usp-hue), 100%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-custom-title-block-symbol-bg:.+?;/gms, '  --sc-custom-title-block-symbol-bg: repeating-radial-gradient(circle, hsl(var(--usp-hue), 100%,  80%), hsl(var(--usp-hue), 100%,  20%)  27%);');
      noteCSS = noteCSS.replace(/^  --sc-key-point-text:.+?;/gms, '  --sc-key-point-text: hsl(var(--usp-hue), 100%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-key-point-ts:.+?;/gms, '  --sc-key-point-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-key-point-bdc:.+?;/gms, '  --sc-key-point-bdc: hsl(var(--usp-hue), 100%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-key-mention-text:.+?;/gms, '  --sc-key-mention-text: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-key-mention-bg:.+?;/gms, '  --sc-key-mention-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-key-mention-bd:.+?;/gms, '  --sc-key-mention-bd: 1px solid hsl(var(--usp-hue),  70%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-key-mention-special-text:.+?;/gms, '  --sc-key-mention-special-text: hsl(  0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-text:.+?;/gms, '  --sc-plugin-spoiler-text: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-bg:.+?;/gms, '  --sc-plugin-spoiler-bg: hsl(var(--usp-hue),  10%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-bs:.+?;/gms, '  --sc-plugin-spoiler-bs: 4px hsl(var(--usp-hue), 100%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-title:.+?;/gms, '  --sc-plugin-spoiler-title: hsl(var(--usp-hue), 100%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-span-title:.+?;/gms, '  --sc-plugin-spoiler-span-title: hsl(var(--usp-hue),  40%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-list-text:.+?;/gms, '  --sc-plugin-spoiler-list-text: hsl(var(--usp-hue), 100%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-span-title-bg:.+?;/gms, '  --sc-plugin-spoiler-span-title-bg: hsl(var(--usp-hue),  10%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-list-span:.+?;/gms, '  --sc-plugin-spoiler-list-span: hsl(var(--usp-hue),   0%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-custom-title-block-text:.+?;/gms, '  --sc-plugin-spoiler-custom-title-block-text: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-custom-title-block-bg:.+?;/gms, '  --sc-plugin-spoiler-custom-title-block-bg: hsl(var(--usp-hue),  10%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-custom-title-block-title:.+?;/gms, '  --sc-plugin-spoiler-custom-title-block-title: hsl(var(--usp-hue), 100%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-inline-text:.+?;/gms, '  --sc-plugin-spoiler-inline-text: hsl(  0,   0%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-inline-bg:.+?;/gms, '  --sc-plugin-spoiler-inline-bg: hsl(  0,   0%,   0%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-inline-bd:.+?;/gms, '  --sc-plugin-spoiler-inline-bd: 1px solid hsl(var(--usp-hue), 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-inline-symbol:.+?;/gms, '  --sc-plugin-spoiler-inline-symbol: hsl(var(--usp-hue), 100%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-inline-symbol-hover:.+?;/gms, '  --sc-plugin-spoiler-inline-symbol-hover: hsl(  0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-turntochart-bg:.+?;/gms, '  --sc-plugin-turntochart-bg: none;');
      noteCSS = noteCSS.replace(/^  --sc-plugin-turntochart-text:.+?;/gms, '  --sc-plugin-turntochart-text: hsl(var(--usp-hue),   0%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-turntochart-info-bg:.+?;/gms, '  --sc-plugin-turntochart-info-bg: hsl(var(--usp-hue),  10%,  20%);');
    
      chromeCSS = chromeCSS.replace(/^  --usp-base-font:.+?;/gms, '  --usp-base-font: var(--usp-custom-base-font), "Mulish", "Montserrat", "GenSenRounded TW", "Chiron Hei HK ExtraLight", Avenir, Arial;');
      chromeCSS = chromeCSS.replace(/^  --usp-monospace-font:.+?;/gms, '  --usp-monospace-font: var(--usp-custom-monospace-font), "Cascadia Mono Light", "GenSenRounded TW", "Chiron Hei HK ExtraLight", Roboto;');
      chromeCSS = chromeCSS.replace(/^  --usp-heading-font:.+?;/gms, '  --usp-heading-font: var(--usp-custom-heading-font), "Montserrat", "Mulish", "GenSenRounded TW", "Chiron Hei HK", Avenir, Arial;');
      noteCSS = noteCSS.replace(/^  --usp-base-font:.+?;/gms, '  --usp-base-font: var(--usp-custom-base-font), "Mulish", "Montserrat", "GenSenRounded TW", "Chiron Hei HK ExtraLight", Avenir, Arial;');
      noteCSS = noteCSS.replace(/^  --usp-monospace-font:.+?;/gms, '  --usp-monospace-font: var(--usp-custom-monospace-font), "Cascadia Mono Light", "GenSenRounded TW", "Chiron Hei HK ExtraLight";');
      noteCSS = noteCSS.replace(/^  --usp-heading-font:.+?;/gms, '  --usp-heading-font: var(--usp-custom-heading-font), "Montserrat", "Mulish", "GenSenRounded TW", "Chiron Hei HK", Avenir, Arial;');
      noteCSS = noteCSS.replace(/^  --usp-print-base-font:.+?;/gms, '  --usp-print-base-font: var(--usp-print-custom-base-font), "Mulish", "Montserrat", "GenSenRounded TW", "Chiron Hei HK Light", Avenir, Arial;');
      noteCSS = noteCSS.replace(/^  --usp-print-monospace-font:.+?;/gms, '  --usp-print-monospace-font: var(--usp-print-custom-monospace-font), "Cascadia Mono Light", "GenSenRounded TW", "Chiron Hei HK Light", Roboto;');
      noteCSS = noteCSS.replace(/^  --usp-print-heading-font:.+?;/gms, '  --usp-print-heading-font: var(--usp-print-custom-heading-font), "Montserrat", "Mulish", "GenSenRounded TW", "Chiron Hei HK", Avenir, Arial;');
    
      if(!darkerEditorBackground) {
        chromeCSS = chromeCSS.replace(/^  --me-bg:.+?;/gms, '  --me-bg: hsl(var(--usp-hue),   8%,  27%);');
        chromeCSS = chromeCSS.replace(/^  --me-code-block-bg:.+?;/gms, '  --me-code-block-bg: hsl(var(--usp-hue),   8%,  17%);');
        noteCSS = noteCSS.replace(/^  --sc-bg-1:.+?;/gms, '  --sc-bg-1: hsl(var(--usp-hue),   8%,  27%);');
        noteCSS = noteCSS.replace(/^  --sc-bg-2:.+?;/gms, '  --sc-bg-2: hsl(var(--usp-hue),   8%,  17%);');
      } else {
        chromeCSS = chromeCSS.replace(/^  --me-bg:.+?;/gms, '  --me-bg: hsl(var(--usp-hue),   8%,  20%);');
        chromeCSS = chromeCSS.replace(/^  --me-code-block-bg:.+?;/gms, '  --me-code-block-bg: hsl(var(--usp-hue),   8%,  13%);');
        noteCSS = noteCSS.replace(/^  --sc-bg-1:.+?;/gms, '  --sc-bg-1: hsl(var(--usp-hue),   8%,  20%);');
        noteCSS = noteCSS.replace(/^  --sc-bg-2:.+?;/gms, '  --sc-bg-2: hsl(var(--usp-hue),   8%,  13%);');
      }
    
      if(!emphasizeAddRemove && !emphasizeAddRemoveBg) {
        chromeCSS = chromeCSS.replace(/^  --me-insert-text:.+?;/gms, '  --me-insert-text: hsl(var(--usp-hue), 100%,  70%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bg:.+?;/gms, '  --me-insert-bg: none;');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bdb:.+?;/gms, '  --me-insert-bdb: hsl(var(--usp-hue),  25%,  60%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-text:.+?;/gms, '  --me-strikethrough-text: hsl(var(--usp-hue),  25%,  60%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-bg:.+?;/gms, '  --me-strikethrough-bg: none;');
        noteCSS = noteCSS.replace(/^  --sc-insert-text:.+?;/gms, '  --sc-insert-text: hsl(var(--usp-hue), 100%,  70%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bg:.+?;/gms, '  --sc-insert-bg: none;');
        noteCSS = noteCSS.replace(/^  --sc-insert-bdb:.+?;/gms, '  --sc-insert-bdb: hsl(var(--usp-hue),  25%,  60%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-text:.+?;/gms, '  --sc-strikethrough-text: hsl(var(--usp-hue),  25%,  60%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-bg:.+?;/gms, '  --sc-strikethrough-bg: none;');
        noteCSS = noteCSS.replace(/^  --pr-insert-text:.+?;/gms, '  --pr-insert-text: hsl(var(--usp-hue), 100%,  40%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bg:.+?;/gms, '  --pr-insert-bg: none;');
        noteCSS = noteCSS.replace(/^  --pr-insert-bdb:.+?;/gms, '  --pr-insert-bdb: hsl(var(--usp-hue),  25%,  50%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-text:.+?;/gms, '  --pr-strikethrough-text: hsl(var(--usp-hue),  25%,  50%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-bg:.+?;/gms, '  --pr-strikethrough-bg: none;');
        
      } else if(!emphasizeAddRemove && emphasizeAddRemoveBg) {
        chromeCSS = chromeCSS.replace(/^  --me-insert-text:.+?;/gms, '  --me-insert-text: hsl(var(--usp-hue), 100%,  70%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bg:.+?;/gms, '  --me-insert-bg: hsl(var(--usp-hue),  35%,  25%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bdb:.+?;/gms, '  --me-insert-bdb: hsl(var(--usp-hue),  25%,  60%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-text:.+?;/gms, '  --me-strikethrough-text: hsl(var(--usp-hue),  25%,  60%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-bg:.+?;/gms, '  --me-strikethrough-bg: hsl(var(--usp-hue),  30%,  20%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-text:.+?;/gms, '  --sc-insert-text: hsl(var(--usp-hue), 100%,  70%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bg:.+?;/gms, '  --sc-insert-bg: hsl(var(--usp-hue),  35%,  25%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bdb:.+?;/gms, '  --sc-insert-bdb: hsl(var(--usp-hue),  25%,  60%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-text:.+?;/gms, '  --sc-strikethrough-text: hsl(var(--usp-hue),  25%,  60%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-bg:.+?;/gms, '  --sc-strikethrough-bg: hsl(var(--usp-hue),  30%,  20%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-text:.+?;/gms, '  --pr-insert-text: hsl(var(--usp-hue), 100%,  40%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bg:.+?;/gms, '  --pr-insert-bg: hsl(var(--usp-hue),  40%,  95%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bdb:.+?;/gms, '  --pr-insert-bdb: hsl(var(--usp-hue),  25%,  50%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-text:.+?;/gms, '  --pr-strikethrough-text: hsl(var(--usp-hue),  25%,  50%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-bg:.+?;/gms, '  --pr-strikethrough-bg: hsl(var(--usp-hue),  25%,  85%);');
        
      } else if(emphasizeAddRemove && !emphasizeAddRemoveBg) {
        chromeCSS = chromeCSS.replace(/^  --me-insert-text:.+?;/gms, '  --me-insert-text: hsl(100,  50%,  75%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bg:.+?;/gms, '  --me-insert-bg: none;');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bdb:.+?;/gms, '  --me-insert-bdb: hsl(100,  70%,  35%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-text:.+?;/gms, '  --me-strikethrough-text: hsl(0, 100%,  75%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-bg:.+?;/gms, '  --me-strikethrough-bg: none;');
        noteCSS = noteCSS.replace(/^  --sc-insert-text:.+?;/gms, '  --sc-insert-text: hsl(100,  50%,  75%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bg:.+?;/gms, '  --sc-insert-bg: none;');
        noteCSS = noteCSS.replace(/^  --sc-insert-bdb:.+?;/gms, '  --sc-insert-bdb: hsl(100,  70%,  35%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-text:.+?;/gms, '  --sc-strikethrough-text: hsl(0, 100%,  75%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-bg:.+?;/gms, '  --sc-strikethrough-bg: none;');
        noteCSS = noteCSS.replace(/^  --pr-insert-text:.+?;/gms, '  --pr-insert-text: hsl(100,  40%,  45%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bg:.+?;/gms, '  --pr-insert-bg: none;');
        noteCSS = noteCSS.replace(/^  --pr-insert-bdb:.+?;/gms, '  --pr-insert-bdb: hsl(100,  70%,  35%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-text:.+?;/gms, '  --pr-strikethrough-text: hsl(0, 100%,  65%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-bg:.+?;/gms, '  --pr-strikethrough-bg: none;');
        
      } else {
        chromeCSS = chromeCSS.replace(/^  --me-insert-text:.+?;/gms, '  --me-insert-text: hsl(100,  50%,  75%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bg:.+?;/gms, '  --me-insert-bg: hsl(100,  70%,  15%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bdb:.+?;/gms, '  --me-insert-bdb: hsl(100,  70%,  35%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-text:.+?;/gms, '  --me-strikethrough-text: hsl(0, 100%,  75%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-bg:.+?;/gms, '  --me-strikethrough-bg: hsl(0,  30%,  20%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-text:.+?;/gms, '  --sc-insert-text: hsl(100,  50%,  75%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bg:.+?;/gms, '  --sc-insert-bg: hsl(100,  70%,  15%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bdb:.+?;/gms, '  --sc-insert-bdb: hsl(100,  70%,  35%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-text:.+?;/gms, '  --sc-strikethrough-text: hsl(0, 100%,  75%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-bg:.+?;/gms, '  --sc-strikethrough-bg: hsl(0,  30%,  20%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-text:.+?;/gms, '  --pr-insert-text: hsl(100,  40%,  45%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bg:.+?;/gms, '  --pr-insert-bg: hsl(100,  35%,  95%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bdb:.+?;/gms, '  --pr-insert-bdb: hsl(100,  70%,  35%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-text:.+?;/gms, '  --pr-strikethrough-text: hsl(0, 100%,  65%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-bg:.+?;/gms, '  --pr-strikethrough-bg: hsl(0,  35%,  90%);');
      }
      
      if(!themeColorListText) {
        chromeCSS = chromeCSS.replace(/^  --me-list-text:.+?;/gms, '  --me-list-text: var(--me-text);');
        chromeCSS = chromeCSS.replace(/^  --me-footnote-ref:.+?;/gms, '  --me-footnote-ref: hsl(var(--usp-hue),  80%,  80%);');
        chromeCSS = chromeCSS.replace(/^  --me-plugin-eh-footnote-ref:.+?;/gms, '  --me-plugin-eh-footnote-ref: hsl(var(--usp-hue), 100%,  10%);');
        noteCSS = noteCSS.replace(/^  --sc-list-text:.+?;/gms, '  --sc-list-text: var(--sc-text);');
        noteCSS = noteCSS.replace(/^  --sc-list-span:.+?;/gms, '  --sc-list-span: hsl(var(--usp-hue),  30%,  80%);');
        noteCSS = noteCSS.replace(/^  --sc-footnote-ref:.+?;/gms, '  --sc-footnote-ref: hsl(var(--usp-hue),  80%,  80%);');
      } else {
        chromeCSS = chromeCSS.replace(/^  --me-list-text:.+?;/gms, '  --me-list-text: hsl(var(--usp-hue),  30%,  80%);');
        chromeCSS = chromeCSS.replace(/^  --me-footnote-ref:.+?;/gms, '  --me-footnote-ref: hsl(calc(var(--usp-hue) + 180deg),  80%,  80%);');
        chromeCSS = chromeCSS.replace(/^  --me-plugin-eh-footnote-ref:.+?;/gms, '  --me-plugin-eh-footnote-ref: hsl(calc(var(--usp-hue) + 180deg), 100%,  10%);');
        noteCSS = noteCSS.replace(/^  --sc-list-text:.+?;/gms, '  --sc-list-text: hsl(var(--usp-hue),  30%,  80%);');
        noteCSS = noteCSS.replace(/^  --sc-list-span:.+?;/gms, '  --sc-list-span: var(--sc-text);');
        noteCSS = noteCSS.replace(/^  --sc-footnote-ref:.+?;/gms, '  --sc-footnote-ref: hsl(calc(var(--usp-hue) + 180deg),  80%,  80%);');
      }
    
      if(!h1TwillPattern) {
        noteCSS = noteCSS.replace(/^  --usp-h1-text-fill:.+?;/gms, '  --usp-h1-text-fill: none;');
        noteCSS = noteCSS.replace(/^  --usp-h1-font-weight:.+?;/gms, '  --usp-h1-font-weight: 600;');
        noteCSS = noteCSS.replace(/^  --sc-h1-bgi:.+?;/gms, '  --sc-h1-bgi: var(--sc-h2-bgi);');
      } else {
        noteCSS = noteCSS.replace(/^  --usp-h1-text-fill:.+?;/gms, '  --usp-h1-text-fill: transparent;');
        noteCSS = noteCSS.replace(/^  --usp-h1-font-weight:.+?;/gms, '  --usp-h1-font-weight: 800;');
        noteCSS = noteCSS.replace(/^  --sc-h1-bgi:.+?;/gms, '  --sc-h1-bgi: var(--sc-h1-bg);');
      }
    
      if(!hrTwillPattern) {
        noteCSS = noteCSS.replace(/^  --sc-hr-bgc:.+?;/gms, '  --sc-hr-bgc: hsl(var(--usp-hue),  60%,  60%);');
        noteCSS = noteCSS.replace(/^  --sc-hr-bgi:.+?;/gms, '  --sc-hr-bgi: none;');
      } else {
        noteCSS = noteCSS.replace(/^  --sc-hr-bgc:.+?;/gms, '  --sc-hr-bgc: none;');
        noteCSS = noteCSS.replace(/^  --sc-hr-bgi:.+?;/gms, '  --sc-hr-bgi: repeating-linear-gradient(114deg, hsl(var(--usp-hue), 100%,  80%), hsl(var(--usp-hue), 100%,  35%,  50%), hsl(var(--usp-hue), 100%,  80%) 3px);');
      }
    
      if(!dottedBlockquote) {
        noteCSS = noteCSS.replace(/^  --sc-blockquote-bdl:.+?;/gms, '  --sc-blockquote-bdl: 3px solid hsl(var(--usp-hue),  20%,  60%);');
        noteCSS = noteCSS.replace(/^  --pr-blockquote-bdl:.+?;/gms, '  --pr-blockquote-bdl: 2px solid hsl(var(--usp-hue),  20%,  60%);');
      } else {
        noteCSS = noteCSS.replace(/^  --sc-blockquote-bdl:.+?;/gms, '  --sc-blockquote-bdl: 5px dotted hsl(var(--usp-hue),  20%,  60%);');
        noteCSS = noteCSS.replace(/^  --pr-blockquote-bdl:.+?;/gms, '  --pr-blockquote-bdl: 4px dotted hsl(var(--usp-hue),  20%,  60%);');
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
      
      chromeCSS = chromeCSS.replace(/^  --me-bg:.+?;/gms, '  --me-bg: hsl(var(--usp-hue),  11%,  13%);');
      chromeCSS = chromeCSS.replace(/^  --me-text:.+?;/gms, '  --me-text: hsl(var(--usp-hue),   0%,  77%);');
      chromeCSS = chromeCSS.replace(/^  --me-scrollbar-track-bg:.+?;/gms, '  --me-scrollbar-track-bg: hsl(var(--usp-hue),  70%,  70%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --me-scrollbar-thumb-bg:.+?;/gms, '  --me-scrollbar-thumb-bg: linear-gradient(to bottom, hsl(var(--usp-hue),  55%,  65%)  3px, hsl(var(--usp-hue),  11%,  13%) 4px, hsl(var(--usp-hue),  11%,  13%) calc(100% - 4px), hsl(var(--usp-hue),  55%,  65%) calc(100% - 3px));');
      chromeCSS = chromeCSS.replace(/^  --me-scrollbar-thumb-bd:.+?;/gms, '  --me-scrollbar-thumb-bd: hsl(var(--usp-hue),  55%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --me-hr-syntax-text:.+?;/gms, '  --me-hr-syntax-text: hsl(var(--usp-hue),   0%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --me-hr-syntax-bg:.+?;/gms, '  --me-hr-syntax-bg: hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-cursor-bdl:.+?;/gms, '  --me-cursor-bdl: 2px solid hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-selected-text:.+?;/gms, '  --me-selected-text: var(--me-text);');
      chromeCSS = chromeCSS.replace(/^  --me-selected-bg:.+?;/gms, '  --me-selected-bg: hsl(calc(var(--usp-hue) + 180deg),  20%,  25%);');
      chromeCSS = chromeCSS.replace(/^  --me-selected-bg-focused:.+?;/gms, '  --me-selected-bg-focused: hsl(calc(var(--usp-hue) + 180deg),  20%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --me-special-text:.+?;/gms, '  --me-special-text: hsl(var(--usp-hue),  80%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-special-bg:.+?;/gms, '  --me-special-bg: hsl(var(--usp-hue),  15%,  28%);');
      chromeCSS = chromeCSS.replace(/^  --me-mark-text:.+?;/gms, '  --me-mark-text: hsl(var(--usp-hue),  20%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --me-mark-ts:.+?;/gms, '  --me-mark-ts: var(--me-mark-text);');
      chromeCSS = chromeCSS.replace(/^  --me-mark-bg:.+?;/gms, '  --me-mark-bg: hsl(var(--usp-hue),  60%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --me-insert-text:.+?;/gms, '  --me-insert-text: hsl(var(--usp-hue),  40%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-insert-bg:.+?;/gms, '  --me-insert-bg: none;');
      chromeCSS = chromeCSS.replace(/^  --me-insert-bdb:.+?;/gms, '  --me-insert-bdb: hsl(var(--usp-hue),  25%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-strikethrough-text:.+?;/gms, '  --me-strikethrough-text: hsl(var(--usp-hue),  20%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-strikethrough-bd:.+?;/gms, '  --me-strikethrough-bd: none;');
      chromeCSS = chromeCSS.replace(/^  --me-sub-sup-text:.+?;/gms, '  --me-sub-sup-text: hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-inline-code-text:.+?;/gms, '  --me-inline-code-text: hsl(var(--usp-hue),  75%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-inline-code-bg:.+?;/gms, '  --me-inline-code-bg: hsl(var(--usp-hue),  40%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --me-link-text:.+?;/gms, '  --me-link-text: hsl(var(--usp-hue),  40%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-html-tag-text:.+?;/gms, '  --me-html-tag-text: hsl(  0,  60%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-html-tag-ts:.+?;/gms, '  --me-html-tag-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-html-attribute-text:.+?;/gms, '  --me-html-attribute-text: hsl(145,  60%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-html-attribute-ts:.+?;/gms, '  --me-html-attribute-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-html-string-text:.+?;/gms, '  --me-html-string-text: hsl(300,  60%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-html-string-ts:.+?;/gms, '  --me-html-string-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-list-token:.+?;/gms, '  --me-list-token: hsl(calc(var(--usp-hue) + 180deg),  35%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-list-text:.+?;/gms, '  --me-list-text: hsl(var(--usp-hue),  35%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-checkbox-text:.+?;/gms, '  --me-checkbox-text: hsl(var(--usp-hue), 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-footnote-ref:.+?;/gms, '  --me-footnote-ref: hsl(calc(var(--usp-hue) + 180deg),  50%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --me-h1-text:.+?;/gms, '  --me-h1-text: hsl(var(--usp-hue),  40%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --me-h2-text:.+?;/gms, '  --me-h2-text: hsl(var(--usp-hue),  35%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-h3-text:.+?;/gms, '  --me-h3-text: hsl(var(--usp-hue),  35%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-h4-text:.+?;/gms, '  --me-h4-text: hsl(var(--usp-hue),  35%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-h5-text:.+?;/gms, '  --me-h5-text: hsl(var(--usp-hue),  10%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --me-h6-text:.+?;/gms, '  --me-h6-text: hsl(var(--usp-hue),  10%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --me-blockquote-text:.+?;/gms, '  --me-blockquote-text: hsl(var(--usp-hue),   0%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-bg:.+?;/gms, '  --me-code-block-bg: hsl(var(--usp-hue),   8%,  11%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-bdw:.+?;/gms, '  --me-code-block-bdw: 0 3px;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-bdc:.+?;/gms, '  --me-code-block-bdc: hsl(var(--usp-hue),  40%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-comment-text:.+?;/gms, '  --me-code-block-comment-text: hsl(var(--usp-hue),   0%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-comment-ts:.+?;/gms, '  --me-code-block-comment-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-number-text:.+?;/gms, '  --me-code-block-number-text: hsl(calc(var(--usp-hue) + 110deg),  50%,  56%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-number-ts:.+?;/gms, '  --me-code-block-number-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-string-text:.+?;/gms, '  --me-code-block-string-text: hsl(calc(var(--usp-hue) + 180deg),  50%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-string-ts:.+?;/gms, '  --me-code-block-string-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-3-text:.+?;/gms, '  --me-code-block-variable-3-text: hsl(calc(var(--usp-hue) + 323deg),  50%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-3-ts:.+?;/gms, '  --me-code-block-variable-3-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-attribute-text:.+?;/gms, '  --me-code-block-attribute-text: hsl(calc(var(--usp-hue) + 240deg),  50%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-attribute-ts:.+?;/gms, '  --me-code-block-attribute-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-error-text:.+?;/gms, '  --me-code-block-error-text: hsl(  0,  50%,  55%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-error-bdb:.+?;/gms, '  --me-code-block-error-bdb: 2px dotted hsl(  0,  50%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-invalidchar-text:.+?;/gms, '  --me-code-block-invalidchar-text: hsl(  0,  50%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-invalidchar-ts:.+?;/gms, '  --me-code-block-invalidchar-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-text:.+?;/gms, '  --me-code-block-variable-text: hsl(var(--usp-hue),   0%,  77%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-ts:.+?;/gms, '  --me-code-block-variable-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-2-text:.+?;/gms, '  --me-code-block-variable-2-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-variable-2-ts:.+?;/gms, '  --me-code-block-variable-2-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-def-text:.+?;/gms, '  --me-code-block-def-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-def-ts:.+?;/gms, '  --me-code-block-def-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-undefined-text:.+?;/gms, '  --me-code-block-undefined-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-undefined-ts:.+?;/gms, '  --me-code-block-undefined-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-operator-text:.+?;/gms, '  --me-code-block-operator-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-operator-ts:.+?;/gms, '  --me-code-block-operator-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-null-text:.+?;/gms, '  --me-code-block-null-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-null-ts:.+?;/gms, '  --me-code-block-null-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-matching-bracket-text:.+?;/gms, '  --me-code-block-matching-bracket-text: var(--me-code-block-variable-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-matching-bracket-ts:.+?;/gms, '  --me-code-block-matching-bracket-ts: var(--me-code-block-variable-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-keyword-text:.+?;/gms, '  --me-code-block-keyword-text: hsl(var(--usp-hue),  65%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-keyword-ts:.+?;/gms, '  --me-code-block-keyword-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-property-text:.+?;/gms, '  --me-code-block-property-text: hsl(var(--usp-hue),  40%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-property-ts:.+?;/gms, '  --me-code-block-property-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-qualifier-text:.+?;/gms, '  --me-code-block-qualifier-text: hsl(calc(var(--usp-hue) + 260deg),  50%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-qualifier-ts:.+?;/gms, '  --me-code-block-qualifier-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-type-text:.+?;/gms, '  --me-code-block-type-text: var(--me-code-block-qualifier-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-type-ts:.+?;/gms, '  --me-code-block-type-ts: var(--me-code-block-qualifier-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-builtin-text:.+?;/gms, '  --me-code-block-builtin-text: var(--me-code-block-qualifier-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-builtin-ts:.+?;/gms, '  --me-code-block-builtin-ts: var(--me-code-block-qualifier-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-atom-text:.+?;/gms, '  --me-code-block-atom-text: hsl(calc(var(--usp-hue) + 148deg),  50%,  55%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-atom-ts:.+?;/gms, '  --me-code-block-atom-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-meta-text:.+?;/gms, '  --me-code-block-meta-text: var(--me-code-block-atom-text);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-meta-ts:.+?;/gms, '  --me-code-block-meta-ts: var(--me-code-block-atom-ts);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-string-2-text:.+?;/gms, '  --me-code-block-string-2-text: hsl(calc(var(--usp-hue) +  90deg),  50%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-string-2-ts:.+?;/gms, '  --me-code-block-string-2-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-tag-text:.+?;/gms, '  --me-code-block-tag-text: hsl(calc(var(--usp-hue) + 120deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --me-code-block-tag-ts:.+?;/gms, '  --me-code-block-tag-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-table-text:.+?;/gms, '  --me-plugin-mtc-table-text: hsl(var(--usp-hue),   0%,  77%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-table-vertical-bar:.+?;/gms, '  --me-plugin-mtc-table-vertical-bar: hsl(var(--usp-hue),   0%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-separator-bg:.+?;/gms, '  --me-plugin-mtc-separator-bg: hsl(var(--usp-hue),   0%, 100%,   8%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-separator-text:.+?;/gms, '  --me-plugin-mtc-separator-text: hsl(var(--usp-hue),  40%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-1:.+?;/gms, '  --me-plugin-mtc-column-mark-1: hsl(  0, 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-1-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-1-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-2:.+?;/gms, '  --me-plugin-mtc-column-mark-2: hsl(240, 100%,  85%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-2-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-2-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-3:.+?;/gms, '  --me-plugin-mtc-column-mark-3: hsl(160,  80%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-3-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-3-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-4:.+?;/gms, '  --me-plugin-mtc-column-mark-4: hsl( 40,  90%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-4-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-4-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-5:.+?;/gms, '  --me-plugin-mtc-column-mark-5: hsl( 60, 100%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-5-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-5-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-6:.+?;/gms, '  --me-plugin-mtc-column-mark-6: hsl(190,  80%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-6-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-6-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-7:.+?;/gms, '  --me-plugin-mtc-column-mark-7: hsl(100,  80%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-7-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-7-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-8:.+?;/gms, '  --me-plugin-mtc-column-mark-8: hsl(210, 100%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-8-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-8-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-9:.+?;/gms, '  --me-plugin-mtc-column-mark-9: hsl(270, 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-9-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-9-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-10:.+?;/gms, '  --me-plugin-mtc-column-mark-10: hsl(310, 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-mtc-column-mark-10-ts:.+?;/gms, '  --me-plugin-mtc-column-mark-10-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --me-plugin-eh-footnote-ref:.+?;/gms, '  --me-plugin-eh-footnote-ref: hsl(calc(var(--usp-hue) + 180deg), 100%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --g-main-bg-1:.+?;/gms, '  --g-main-bg-1: hsl(var(--usp-hue),  11%,  13%);');
      chromeCSS = chromeCSS.replace(/^  --g-main-bg-2:.+?;/gms, '  --g-main-bg-2: hsl(var(--usp-hue),   8%,  11%);');
      chromeCSS = chromeCSS.replace(/^  --g-panel-header-bgc:.+?;/gms, '  --g-panel-header-bgc: hsl(var(--usp-hue),  55%,  35%);');
      chromeCSS = chromeCSS.replace(/^  --g-panel-header-text:.+?;/gms, '  --g-panel-header-text: hsl(var(--usp-hue),   0%,  88%);');
      chromeCSS = chromeCSS.replace(/^  --g-panel-header-ts:.+?;/gms, '  --g-panel-header-ts: 4px hsl(var(--usp-hue),   0%,   0%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-bgc-hover:.+?;/gms, '  --g-item-bgc-hover: hsl(var(--usp-hue),  40%,  21%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-bgc-selected:.+?;/gms, '  --g-item-bgc-selected: hsl(var(--usp-hue),  35%,  35%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-ds-hover:.+?;/gms, '  --g-item-ds-hover: hsl(var(--usp-hue), 100%,  45%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-divider:.+?;/gms, '  --g-item-divider: hsl(var(--usp-hue),  20%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-text-1:.+?;/gms, '  --g-item-text-1: hsl(var(--usp-hue),  40%,  95%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-ts-selected:.+?;/gms, '  --g-item-ts-selected: 4px hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-item-text-2:.+?;/gms, '  --g-item-text-2: hsl(var(--usp-hue),  75%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bg-1:.+?;/gms, '  --g-square-btn-bg-1: none;');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bg-1-hover:.+?;/gms, '  --g-square-btn-bg-1-hover: hsl(var(--usp-hue),  20%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bd-1:.+?;/gms, '  --g-square-btn-bd-1: transparent;');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bd-1-hover:.+?;/gms, '  --g-square-btn-bd-1-hover: hsl(var(--usp-hue),  45%,  55%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-icon-1:.+?;/gms, '  --g-square-btn-icon-1: hsl(var(--usp-hue), 100%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-icon-1-hover:.+?;/gms, '  --g-square-btn-icon-1-hover: hsl(var(--usp-hue), 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bg-2:.+?;/gms, '  --g-square-btn-bg-2: none;');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bg-2-hover:.+?;/gms, '  --g-square-btn-bg-2-hover: hsl(var(--usp-hue),  20%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bd-2:.+?;/gms, '  --g-square-btn-bd-2: transparent;');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-bd-2-hover:.+?;/gms, '  --g-square-btn-bd-2-hover: hsl(var(--usp-hue),  45%,  55%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-icon-2:.+?;/gms, '  --g-square-btn-icon-2: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --g-square-btn-icon-2-hover:.+?;/gms, '  --g-square-btn-icon-2-hover: hsl(var(--usp-hue), 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --g-scrollbar-thumb-bg:.+?;/gms, '  --g-scrollbar-thumb-bg: hsl(var(--usp-hue),  55%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --g-scrollbar-track-bg:.+?;/gms, '  --g-scrollbar-track-bg: hsl(var(--usp-hue),  20%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --g-input-text:.+?;/gms, '  --g-input-text: hsl(var(--usp-hue), 100%,  85%);');
      chromeCSS = chromeCSS.replace(/^  --g-input-bg:.+?;/gms, '  --g-input-bg: hsl(var(--usp-hue),  11%,  13%);');
      chromeCSS = chromeCSS.replace(/^  --g-input-bd:.+?;/gms, '  --g-input-bd: hsl(var(--usp-hue),  50%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --g-toolbar-bg:.+?;/gms, '  --g-toolbar-bg: hsl(var(--usp-hue),  11%,  13%);');
      chromeCSS = chromeCSS.replace(/^  --g-toolbar-bd:.+?;/gms, '  --g-toolbar-bd: hsl(var(--usp-hue),  70%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --g-ep-divider:.+?;/gms, '  --g-ep-divider: hsl(var(--usp-hue),  20%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-panel-divider:.+?;/gms, '  --s-panel-divider: hsl(var(--usp-hue),  14%,  11%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-directory-icon-open:.+?;/gms, '  --s-np-directory-icon-open: hsl(var(--usp-hue),  20%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-directory-icon-open-ds:.+?;/gms, '  --s-np-directory-icon-open-ds: 0px hsl(var(--usp-hue), 100%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-directory-icon-close:.+?;/gms, '  --s-np-directory-icon-close: hsl(calc(var(--usp-hue) + 180deg), 100%,  65%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-directory-icon-close-ds:.+?;/gms, '  --s-np-directory-icon-close-ds: 2px hsl(calc(var(--usp-hue) + 180deg), 100%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-0:.+?;/gms, '  --s-np-notebook-folder-icon-0: hsl(var(--usp-hue),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-1:.+?;/gms, '  --s-np-notebook-folder-icon-1: hsl(calc(var(--usp-hue) +  50deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-2:.+?;/gms, '  --s-np-notebook-folder-icon-2: hsl(calc(var(--usp-hue) + 100deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-3:.+?;/gms, '  --s-np-notebook-folder-icon-3: hsl(calc(var(--usp-hue) + 150deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-4:.+?;/gms, '  --s-np-notebook-folder-icon-4: hsl(calc(var(--usp-hue) + 200deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-5:.+?;/gms, '  --s-np-notebook-folder-icon-5: hsl(calc(var(--usp-hue) + 250deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-6:.+?;/gms, '  --s-np-notebook-folder-icon-6: hsl(calc(var(--usp-hue) + 300deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-7:.+?;/gms, '  --s-np-notebook-folder-icon-7: hsl(calc(var(--usp-hue) + 350deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-8:.+?;/gms, '  --s-np-notebook-folder-icon-8: hsl(calc(var(--usp-hue) +  40deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-9:.+?;/gms, '  --s-np-notebook-folder-icon-9: hsl(calc(var(--usp-hue) +  90deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-10:.+?;/gms, '  --s-np-notebook-folder-icon-10: hsl(calc(var(--usp-hue) + 140deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-11:.+?;/gms, '  --s-np-notebook-folder-icon-11: hsl(calc(var(--usp-hue) + 190deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-12:.+?;/gms, '  --s-np-notebook-folder-icon-12: hsl(calc(var(--usp-hue) + 240deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-13:.+?;/gms, '  --s-np-notebook-folder-icon-13: hsl(calc(var(--usp-hue) + 290deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-14:.+?;/gms, '  --s-np-notebook-folder-icon-14: hsl(calc(var(--usp-hue) + 340deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-notebook-folder-icon-15:.+?;/gms, '  --s-np-notebook-folder-icon-15: hsl(calc(var(--usp-hue) +  30deg),  50%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-note-count-label-text:.+?;/gms, '  --s-np-note-count-label-text: hsl(var(--usp-hue),   0%, 100%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-note-count-label-bgc:.+?;/gms, '  --s-np-note-count-label-bgc: hsl(var(--usp-hue),  40%,  15%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-note-count-label-bd:.+?;/gms, '  --s-np-note-count-label-bd: hsl(var(--usp-hue),  50%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-note-count-label-ds:.+?;/gms, '  --s-np-note-count-label-ds: 1px hsl(var(--usp-hue), 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-info-text:.+?;/gms, '  --s-np-sync-info-text: hsl(var(--usp-hue), 100%,  95%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-info-symbol:.+?;/gms, '  --s-np-sync-info-symbol: radial-gradient(hsl(var(--usp-hue), 100%,  80%) 25%, hsl(var(--usp-hue), 100%,  50%) 55%, hsl(var(--usp-hue), 100%,  80%) 80%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-bg:.+?;/gms, '  --s-np-sync-btn-bg: transparent;');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-bd:.+?;/gms, '  --s-np-sync-btn-bd: hsl(var(--usp-hue),  20%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-bg-hover:.+?;/gms, '  --s-np-sync-btn-bg-hover: hsl(var(--usp-hue),  30%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-bdc-hover:.+?;/gms, '  --s-np-sync-btn-bdc-hover: hsl(var(--usp-hue),  50%,  45%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-text:.+?;/gms, '  --s-np-sync-btn-text: hsl(var(--usp-hue),   0%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-text-hover:.+?;/gms, '  --s-np-sync-btn-text-hover: hsl(var(--usp-hue),  40%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-icon-ts:.+?;/gms, '  --s-np-sync-btn-icon-ts: none;');
      chromeCSS = chromeCSS.replace(/^  --s-np-sync-btn-icon-ts-hover:.+?;/gms, '  --s-np-sync-btn-icon-ts-hover: hsl(var(--usp-hue),  50%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-nlp-todo-text:.+?;/gms, '  --s-nlp-todo-text: hsl(var(--usp-hue),  80%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-nlp-search-btn:.+?;/gms, '  --s-nlp-search-btn: hsl(var(--usp-hue),   0%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-toolbar-ds:.+?;/gms, '  --s-ep-toolbar-ds: 1px hsl(var(--usp-hue), 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-notebook-nav-btn-bg:.+?;/gms, '  --s-ep-notebook-nav-btn-bg: hsl(var(--usp-hue),  30%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-notebook-nav-btn-bd:.+?;/gms, '  --s-ep-notebook-nav-btn-bd: hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-notebook-nav-btn-bs:.+?;/gms, '  --s-ep-notebook-nav-btn-bs: hsl(var(--usp-hue), 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-notebook-nav-btn-text:.+?;/gms, '  --s-ep-notebook-nav-btn-text: hsl(var(--usp-hue), 100%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-batch-menu-btn-text:.+?;/gms, '  --s-ep-batch-menu-btn-text: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-batch-menu-btn-bg:.+?;/gms, '  --s-ep-batch-menu-btn-bg: hsl(var(--usp-hue),  50%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-batch-menu-btn-bd:.+?;/gms, '  --s-ep-batch-menu-btn-bd: hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-update-time-label-bg:.+?;/gms, '  --s-ep-update-time-label-bg: hsl(var(--usp-hue), 100%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-update-time-label-text:.+?;/gms, '  --s-ep-update-time-label-text: hsl(var(--usp-hue), 100%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-tagbar-tag-text:.+?;/gms, '  --s-ep-tagbar-tag-text: hsl(var(--usp-hue),  20%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-tagbar-tag-text-hover:.+?;/gms, '  --s-ep-tagbar-tag-text-hover: hsl(var(--usp-hue),  20%,  95%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-tagbar-tag-ts-hover:.+?;/gms, '  --s-ep-tagbar-tag-ts-hover: hsl(var(--usp-hue), 100%,  25%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-tagbar-tag-divider:.+?;/gms, '  --s-ep-tagbar-tag-divider: hsl(var(--usp-hue), 100%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-tagbar-hint-text:.+?;/gms, '  --s-ep-tagbar-hint-text: hsl(var(--usp-hue),  40%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-footer-popup-msg-text:.+?;/gms, '  --s-ep-footer-popup-msg-text: hsl( 30, 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-footer-popup-msg-bg:.+?;/gms, '  --s-ep-footer-popup-msg-bg: hsl(  0,  50%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --s-ep-footer-popup-msg-link:.+?;/gms, '  --s-ep-footer-popup-msg-link: hsl(200,  90%,  75%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-bg:.+?;/gms, '  --s-md-bg: hsl(var(--usp-hue),  11%,  13%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-label-text:.+?;/gms, '  --s-md-label-text: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-title-text:.+?;/gms, '  --s-md-title-text: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-confirm-btn-text:.+?;/gms, '  --s-md-confirm-btn-text: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-confirm-btn-bg:.+?;/gms, '  --s-md-confirm-btn-bg: hsl(var(--usp-hue),  40%,  15%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-confirm-btn-bd:.+?;/gms, '  --s-md-confirm-btn-bd:  hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-notebook-creator-icon-select-btn-bg:.+?;/gms, '  --s-md-notebook-creator-icon-select-btn-bg: hsl(var(--usp-hue),  50%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-notebook-creator-icon-select-btn-bd:.+?;/gms, '  --s-md-notebook-creator-icon-select-btn-bd: hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-notebook-creator-icon-select-btn-text:.+?;/gms, '  --s-md-notebook-creator-icon-select-btn-text: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-tag-selector-bg:.+?;/gms, '  --s-md-tag-selector-bg: hsl(var(--usp-hue),  50%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-tag-selector-bd:.+?;/gms, '  --s-md-tag-selector-bd: hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-tag-selector-input-text:.+?;/gms, '  --s-md-tag-selector-input-text: hsl(var(--usp-hue), 100%,  40%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-tag-selector-divider:.+?;/gms, '  --s-md-tag-selector-divider: hsl(var(--usp-hue), 100%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-tag-selector-text:.+?;/gms, '  --s-md-tag-selector-text: hsl(var(--usp-hue),  20%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-command-palette-item-bg:.+?;/gms, '  --s-md-command-palette-item-bg: hsl(var(--usp-hue),  11%,  13%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-command-palette-item-bg-selected:.+?;/gms, '  --s-md-command-palette-item-bg-selected: hsl(var(--usp-hue),  30%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-command-palette-item-bdb:.+?;/gms, '  --s-md-command-palette-item-bdb: hsl(var(--usp-hue),  30%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-md-command-palette-item-text:.+?;/gms, '  --s-md-command-palette-item-text: hsl(var(--usp-hue),  60%,  90%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-menu-subtitle-bg:.+?;/gms, '  --s-op-menu-subtitle-bg: hsl(var(--usp-hue),  10%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-guide-text:.+?;/gms, '  --s-op-guide-text: hsl(var(--usp-hue),  30%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-guide-bg:.+?;/gms, '  --s-op-guide-bg: hsl(var(--usp-hue),  17%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-label-text:.+?;/gms, '  --s-op-label-text: hsl(var(--usp-hue),   0%,  77%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-input-text:.+?;/gms, '  --s-op-input-text: hsl(var(--usp-hue),  20%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-btn-bg:.+?;/gms, '  --s-op-btn-bg: hsl(var(--usp-hue),  30%,  25%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-btn-bd:.+?;/gms, '  --s-op-btn-bd: hsl(var(--usp-hue),  40%,  50%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-btn-text:.+?;/gms, '  --s-op-btn-text: hsl(var(--usp-hue),  60%,  77%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-description-text:.+?;/gms, '  --s-op-description-text: hsl(var(--usp-hue),  20%,  60%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-table-text:.+?;/gms, '  --s-op-table-text: hsl(var(--usp-hue),  40%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-table-kbd-bdc:.+?;/gms, '  --s-op-table-kbd-bdc: hsl(var(--usp-hue),  10%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-plugin-card-bd:.+?;/gms, '  --s-op-plugin-card-bd: hsl(var(--usp-hue),  30%,  30%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-plugin-card-bs:.+?;/gms, '  --s-op-plugin-card-bs: hsl(var(--usp-hue), 100%,  20%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-plugin-card-text:.+?;/gms, '  --s-op-plugin-card-text: hsl(var(--usp-hue),   0%,  77%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-plugin-card-switcher-bg:.+?;/gms, '  --s-op-plugin-card-switcher-bg: hsl(var(--usp-hue),  50%,  70%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-confirm-btn-bg:.+?;/gms, '  --s-op-confirm-btn-bg: hsl(var(--usp-hue),  50%,  10%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-confirm-btn-bd:.+?;/gms, '  --s-op-confirm-btn-bd: hsl(var(--usp-hue), 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-confirm-btn-bs:.+?;/gms, '  --s-op-confirm-btn-bs: hsl(var(--usp-hue), 100%,  80%);');
      chromeCSS = chromeCSS.replace(/^  --s-op-confirm-btn-text:.+?;/gms, '  --s-op-confirm-btn-text: hsl(var(--usp-hue),  60%,  90%);');

      noteCSS = noteCSS.replace(/^  --sc-bg-1:.+?;/gms, '  --sc-bg-1: hsl(var(--usp-hue),  11%,  13%);');
      noteCSS = noteCSS.replace(/^  --sc-bg-2:.+?;/gms, '  --sc-bg-2: hsl(var(--usp-hue),   8%,  11%);');
      noteCSS = noteCSS.replace(/^  --sc-text:.+?;/gms, '  --sc-text: hsl(var(--usp-hue),   0%,  77%);');
      noteCSS = noteCSS.replace(/^  --sc-scrollbar-thumb-bg:.+?;/gms, '  --sc-scrollbar-thumb-bg: hsl(var(--usp-hue),  55%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-hr-bgc:.+?;/gms, '  --sc-hr-bgc: none;');
      noteCSS = noteCSS.replace(/^  --sc-hr-bgi:.+?;/gms, '  --sc-hr-bgi: repeating-linear-gradient(114deg, hsl(var(--usp-hue), 100%,  80%), hsl(var(--usp-hue), 100%,  35%,  50%), hsl(var(--usp-hue), 100%,  80%)  3px);');
      noteCSS = noteCSS.replace(/^  --sc-block-content-scrollbar-thumb-bd:.+?;/gms, '  --sc-block-content-scrollbar-thumb-bd: transparent;');
      noteCSS = noteCSS.replace(/^  --sc-block-content-scrollbar-thumb-bg:.+?;/gms, '  --sc-block-content-scrollbar-thumb-bg: radial-gradient(hsl(var(--usp-hue),  30%,  50%) 30%, hsl(var(--usp-hue),  40%,  60%) 70%);');
      noteCSS = noteCSS.replace(/^  --sc-block-content-scrollbar-thumb-bg-hover:.+?;/gms, '  --sc-block-content-scrollbar-thumb-bg-hover: radial-gradient( hsl(var(--usp-hue),  50%,  50%) 30%, hsl(var(--usp-hue),  60%,  60%) 70%);');
      noteCSS = noteCSS.replace(/^  --sc-special-text-ts:.+?;/gms, '  --sc-special-text-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-strong-text:.+?;/gms, '  --sc-strong-text: hsl(var(--usp-hue),  80%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-emphasize-text:.+?;/gms, '  --sc-emphasize-text: var(--sc-strong-text);');
      noteCSS = noteCSS.replace(/^  --sc-insert-text:.+?;/gms, '  --sc-insert-text: hsl(var(--usp-hue),  40%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-insert-bg:.+?;/gms, '  --sc-insert-bg: none;');
      noteCSS = noteCSS.replace(/^  --sc-insert-bdb:.+?;/gms, '  --sc-insert-bdb: hsl(var(--usp-hue),  20%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-insert-symbol:.+?;/gms, '  --sc-insert-symbol: hsl(  0,   0%, 100%);');
      noteCSS = noteCSS.replace(/^  --sc-insert-symbol-bg:.+?;/gms, '  --sc-insert-symbol-bg: hsl(100,  60%,  45%);');
      noteCSS = noteCSS.replace(/^  --sc-strikethrough-text:.+?;/gms, '  --sc-strikethrough-text: hsl(var(--usp-hue),  20%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-strikethrough-bg:.+?;/gms, '  --sc-strikethrough-bg: none;');
      noteCSS = noteCSS.replace(/^  --sc-strikethrough-symbol:.+?;/gms, '  --sc-strikethrough-symbol: hsl(  0,   0%, 100%);');
      noteCSS = noteCSS.replace(/^  --sc-strikethrough-symbol-bg:.+?;/gms, '  --sc-strikethrough-symbol-bg: hsl(  0,  70%,  55%);');
      noteCSS = noteCSS.replace(/^  --sc-abbreviation-text:.+?;/gms, '  --sc-abbreviation-text: hsl(var(--usp-hue),  40%,  85%);');
      noteCSS = noteCSS.replace(/^  --sc-abbreviation-td:.+?;/gms, '  --sc-abbreviation-td: hsl(var(--usp-hue),  20%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-mark-text:.+?;/gms, '  --sc-mark-text: hsl(var(--usp-hue),  20%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-mark-ts:.+?;/gms, '  --sc-mark-ts: var(--sc-mark-ts);');
      noteCSS = noteCSS.replace(/^  --sc-mark-bg:.+?;/gms, '  --sc-mark-bg: hsl(var(--usp-hue),  60%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-search-text:.+?;/gms, '  --sc-search-text: hsl(var(--usp-hue),   0%, 100%);');
      noteCSS = noteCSS.replace(/^  --sc-search-bg:.+?;/gms, '  --sc-search-bg: hsl(var(--usp-hue),   0%,   0%);');
      noteCSS = noteCSS.replace(/^  --sc-search-bd:.+?;/gms, '  --sc-search-bd: hsl(  0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-inline-code-text:.+?;/gms, '  --sc-inline-code-text: hsl(var(--usp-hue),  75%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-inline-code-bg:.+?;/gms, '  --sc-inline-code-bg: hsl(var(--usp-hue),  40%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-inline-code-symbol:.+?;/gms, '  --sc-inline-code-symbol: hsl(var(--usp-hue),  30%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-link-text:.+?;/gms, '  --sc-link-text: hsl(var(--usp-hue),  40%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-link-source-icon:.+?;/gms, '  --sc-link-source-icon: hsl(var(--usp-hue),  40%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-list-token:.+?;/gms, '  --sc-list-token: hsl(calc(var(--usp-hue) + 180deg),  35%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-list-text:.+?;/gms, '  --sc-list-text: hsl(var(--usp-hue),  35%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-list-span:.+?;/gms, '  --sc-list-span: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-footnote-ref:.+?;/gms, '  --sc-footnote-ref: hsl(calc(var(--usp-hue) + 180deg),  50%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-footnote-title:.+?;/gms, '  --sc-footnote-title: hsl(var(--usp-hue),   0%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-footnote-title-bdt:.+?;/gms, '  --sc-footnote-title-bdt: 3px double hsl(var(--usp-hue),   0%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-footnote-list-text:.+?;/gms, '  --sc-footnote-list-text: hsl(var(--usp-hue),   0%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-footnote-list-token:.+?;/gms, '  --sc-footnote-list-token: hsl(var(--usp-hue),   0%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-heading-ref:.+?;/gms, '  --sc-heading-ref:  hsl(  0,   0%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-h1-text:.+?;/gms, '  --sc-h1-text: hsl(var(--usp-hue),  40%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-h1-bg:.+?;/gms, '  --sc-h1-bg: repeating-linear-gradient(114deg, hsl(var(--usp-hue),  40%,  80%), hsl(var(--usp-hue),  40%,  65%,  30%), hsl(var(--usp-hue),  40%,  80%) 3px);');
      noteCSS = noteCSS.replace(/^  --sc-h1-bgi:.+?;/gms, '  --sc-h1-bgi: var(--sc-h1-bg);');
      noteCSS = noteCSS.replace(/^  --sc-h2-text:.+?;/gms, '  --sc-h2-text: hsl(var(--usp-hue),  35%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-h2-bgi:.+?;/gms, '  --sc-h2-bgi: linear-gradient(to right, hsl(var(--usp-hue),  35%,  70%) 50%, transparent);');
      noteCSS = noteCSS.replace(/^  --sc-h3-text:.+?;/gms, '  --sc-h3-text: var(--sc-h2-text);');
      noteCSS = noteCSS.replace(/^  --sc-h3-bgi:.+?;/gms, '  --sc-h3-bgi: var(--sc-h2-bgi);');
      noteCSS = noteCSS.replace(/^  --sc-h4-text:.+?;/gms, '  --sc-h4-text: var(--sc-h2-text);');
      noteCSS = noteCSS.replace(/^  --sc-h4-bgi:.+?;/gms, '  --sc-h4-bgi: var(--sc-h2-bgi);');
      noteCSS = noteCSS.replace(/^  --sc-h5-text:.+?;/gms, '  --sc-h5-text: hsl(var(--usp-hue),  10%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-h5-bgi:.+?;/gms, '  --sc-h5-bgi: linear-gradient(to right, transparent 50%, var(--sc-bg-1) 100%), repeating-linear-gradient(to right, hsl(var(--usp-hue),  10%,  65%), 2px, transparent, 2px, transparent 5px);');
      noteCSS = noteCSS.replace(/^  --sc-h6-text:.+?;/gms, '  --sc-h6-text: var(--sc-h5-text);');
      noteCSS = noteCSS.replace(/^  --sc-h6-bgi:.+?;/gms, '  --sc-h6-bgi: var(--sc-h5-bgi);');
      noteCSS = noteCSS.replace(/^  --sc-math-notation-text:.+?;/gms, '  --sc-math-notation-text: hsl(var(--usp-hue),  40%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-blockquote-bdl:.+?;/gms, '  --sc-blockquote-bdl: 5px dotted hsl(var(--usp-hue),  15%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-blockquote-text:.+?;/gms, '  --sc-blockquote-text: hsl(var(--usp-hue),   0%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-table-text:.+?;/gms, '  --sc-table-text: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-table-bd:.+?;/gms, '  --sc-table-bd: 2px solid var(--sc-bg-1);');
      noteCSS = noteCSS.replace(/^  --sc-table-header-bg:.+?;/gms, '  --sc-table-header-bg: hsl(var(--usp-hue),  40%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-table-header-ts:.+?;/gms, '  --sc-table-header-ts: 2px black;');
      noteCSS = noteCSS.replace(/^  --sc-table-row-odd-bg:.+?;/gms, '  --sc-table-row-odd-bg: hsl(var(--usp-hue),  20%,  16%);');
      noteCSS = noteCSS.replace(/^  --sc-table-row-even-bg:.+?;/gms, '  --sc-table-row-even-bg: hsl(var(--usp-hue),  20%,  22%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-bg:.+?;/gms, '  --sc-toc-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-toc-bdc:.+?;/gms, '  --sc-toc-bdc: hsl(var(--usp-hue),  40%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-bs:.+?;/gms, '  --sc-toc-bs: 10px hsl(var(--usp-hue),  40%,  30%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-btn-text:.+?;/gms, '  --sc-toc-btn-text: var(--sc-bg-1);');
      noteCSS = noteCSS.replace(/^  --sc-toc-btn-bg:.+?;/gms, '  --sc-toc-btn-bg: hsl(var(--usp-hue),  40%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-btn-bd:.+?;/gms, '  --sc-toc-btn-bd: 2px solid hsl(var(--usp-hue),  40%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-btn-bs:.+?;/gms, '  --sc-toc-btn-bs: 5px hsl(var(--usp-hue),   40%,   60%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-list-bdl:.+?;/gms, '  --sc-toc-list-bdl: 1px solid hsl(var(--usp-hue),  25%,  25%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-link-text-hover:.+?;/gms, '  --sc-toc-link-text-hover: hsl(var(--usp-hue),   0%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-toc-link-bg-hover:.+?;/gms, '  --sc-toc-link-bg-hover: hsl(var(--usp-hue),  25%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-bg:.+?;/gms, '  --sc-code-block-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-bdc:.+?;/gms, '  --sc-code-block-bdc: hsl(var(--usp-hue),  40%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-bs:.+?;/gms, '  --sc-code-block-bs: 4px hsl(var(--usp-hue),  40%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-comment-text:.+?;/gms, '  --sc-code-block-comment-text: hsl(var(--usp-hue),   0%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-comment-ts:.+?;/gms, '  --sc-code-block-comment-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-number-text:.+?;/gms, '  --sc-code-block-number-text: hsl(calc(var(--usp-hue) + 110deg),  50%,  56%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-number-ts:.+?;/gms, '  --sc-code-block-number-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-string-text:.+?;/gms, '  --sc-code-block-string-text: hsl(calc(var(--usp-hue) + 180deg),  50%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-string-ts:.+?;/gms, '  --sc-code-block-string-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-params-text:.+?;/gms, '  --sc-code-block-params-text: hsl(calc(var(--usp-hue) + 300deg),  50%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-params-ts:.+?;/gms, '  --sc-code-block-params-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-text:.+?;/gms, '  --sc-code-block-title-text: hsl(calc(var(--usp-hue) + 180deg),  50%,  55%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-ts:.+?;/gms, '  --sc-code-block-title-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-id-text:.+?;/gms, '  --sc-code-block-selector-id-text: hsl(calc(var(--usp-hue) + 159deg),  50%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-id-ts:.+?;/gms, '  --sc-code-block-selector-id-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-pseudo-text:.+?;/gms, '  --sc-code-block-selector-pseudo-text: hsl(calc(var(--usp-hue) + 323deg),  50%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-pseudo-ts:.+?;/gms, '  --sc-code-block-selector-pseudo-ts none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-attr-text:.+?;/gms, '  --sc-code-block-selector-attr-text: hsl(calc(var(--usp-hue) + 300deg),  70%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-attr-ts:.+?;/gms, '  --sc-code-block-selector-attr-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-text:.+?;/gms, '  --sc-code-block-text: hsl(var(--usp-hue),   0%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-ts:.+?;/gms, '  --sc-code-block-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-class-text:.+?;/gms, '  --sc-code-block-title-class-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-class-ts:.+?;/gms, '  --sc-code-block-title-class-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-text:.+?;/gms, '  --sc-code-block-function-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-ts:.+?;/gms, '  --sc-code-block-function-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-title-text:.+?;/gms, '  --sc-code-block-function-title-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-title-ts:.+?;/gms, '  --sc-code-block-function-title-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-params-text:.+?;/gms, '  --sc-code-block-function-params-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-function-params-ts:.+?;/gms, '  --sc-code-block-function-params-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-class-title-text:.+?;/gms, '  --sc-code-block-class-title-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-class-title-ts:.+?;/gms, '  --sc-code-block-class-title-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-operator-text:.+?;/gms, '  --sc-code-block-operator-text: var(--sc-code-block-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-operator-ts:.+?;/gms, '  --sc-code-block-operator-ts: var(--sc-code-block-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-keyword-text:.+?;/gms, '  --sc-code-block-keyword-text: hsl(var(--usp-hue),  65%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-keyword-ts:.+?;/gms, '  --sc-code-block-keyword-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-variable-language-text:.+?;/gms, '  --sc-code-block-variable-language-text: var(--sc-code-block-keyword-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-variable-language-ts:.+?;/gms, '  --sc-code-block-variable-language-ts: var(--sc-code-block-keyword-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-doctag-text:.+?;/gms, '  --sc-code-block-doctag-text: var(--sc-code-block-keyword-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-doctag-ts:.+?;/gms, '  --sc-code-block-doctag-ts: var(--sc-code-block-keyword-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-function-text:.+?;/gms, '  --sc-code-block-title-function-text: hsl(var(--usp-hue),  40%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-function-ts:.+?;/gms, '  --sc-code-block-title-function-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-property-text:.+?;/gms, '  --sc-code-block-property-text: var(--sc-code-block-title-function-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-property-ts:.+?;/gms, '  --sc-code-block-property-ts: var(--sc-code-block-title-function-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-attr-text:.+?;/gms, '  --sc-code-block-attr-text: var(--sc-code-block-title-function-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-attr-ts:.+?;/gms, '  --sc-code-block-attr-ts: var(--sc-code-block-title-function-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-attribute-text:.+?;/gms, '  --sc-code-block-attribute-text: var(--sc-code-block-title-function-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-attribute-ts:.+?;/gms, '  --sc-code-block-attribute-ts: var(--sc-code-block-title-function-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-class-inherited-text:.+?;/gms, '  --sc-code-block-title-class-inherited-text: hsl(calc(var(--usp-hue) + 260deg),  50%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-title-class-inherited-ts:.+?;/gms, '  --sc-code-block-title-class-inherited-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-built-in-text:.+?;/gms, '  --sc-code-block-built-in-text: var(--sc-code-block-title-class-inherited-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-built-in-ts:.+?;/gms, '  --sc-code-block-built-in-ts: var(--sc-code-block-title-class-inherited-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-class-text:.+?;/gms, '  --sc-code-block-selector-class-text: var(--sc-code-block-title-class-inherited-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-class-ts:.+?;/gms, '  --sc-code-block-selector-class-ts: var(--sc-code-block-title-class-inherited-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-html-attr-text:.+?;/gms, '  --sc-code-block-html-attr-text: var(--sc-code-block-title-class-inherited-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-html-attr-ts:.+?;/gms, '  --sc-code-block-html-attr-ts: var(--sc-code-block-title-class-inherited-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-type-text:.+?;/gms, '  --sc-code-block-type-text: var(--sc-code-block-title-class-inherited-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-type-ts:.+?;/gms, '  --sc-code-block-type-ts: var(--sc-code-block-title-class-inherited-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-literal-text:.+?;/gms, '  --sc-code-block-literal-text: hsl(calc(var(--usp-hue) + 148deg),  50%,  55%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-literal-ts:.+?;/gms, '  --sc-code-block-literal-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-meta-text:.+?;/gms, '  --sc-code-block-meta-text: var(--sc-code-block-literal-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-meta-ts:.+?;/gms, '  --sc-code-block-meta-ts: var(--sc-code-block-literal-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-symbol-text:.+?;/gms, '  --sc-code-block-symbol-text: var(--sc-code-block-literal-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-symbol-ts:.+?;/gms, '  --sc-code-block-symbol-ts: var(--sc-code-block-literal-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-subst-text:.+?;/gms, '  --sc-code-block-subst-text: hsl(calc(var(--usp-hue) +  90deg),  50%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-subst-ts:.+?;/gms, '  --sc-code-block-subst-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-variable-text:.+?;/gms, '  --sc-code-block-variable-text: var(--sc-code-block-subst-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-variable-ts:.+?;/gms, '  --sc-code-block-variable-ts: var(--sc-code-block-subst-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-regexp-text:.+?;/gms, '  --sc-code-block-regexp-text: var(--sc-code-block-subst-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-regexp-ts:.+?;/gms, '  --sc-code-block-regexp-ts: var(--sc-code-block-subst-ts);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-tag-text:.+?;/gms, '  --sc-code-block-selector-tag-text: hsl(calc(var(--usp-hue) + 120deg), 50%, 60%);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-selector-tag-ts:.+?;/gms, '  --sc-code-block-selector-tag-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-code-block-tag-text:.+?;/gms, '  --sc-code-block-tag-text: var(--sc-code-block-selector-tag-text);');
      noteCSS = noteCSS.replace(/^  --sc-code-block-tag-ts:.+?;/gms, '  --sc-code-block-tag-ts: var(--sc-code-block-selector-tag-ts);');
      noteCSS = noteCSS.replace(/^  --sc-art-gallery-bg:.+?;/gms, '  --sc-art-gallery-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-art-gallery-bdc:.+?;/gms, '  --sc-art-gallery-bdc: hsl(var(--usp-hue),  40%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-art-gallery-ds:.+?;/gms, '  --sc-art-gallery-ds: 2px hsl(var(--usp-hue),  40%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-text:.+?;/gms, '  --sc-sticky-notes-text: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-bg:.+?;/gms, '  --sc-sticky-notes-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-bdc:.+?;/gms, '  --sc-sticky-notes-bdc: hsl(var(--usp-hue),  40%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-ds:.+?;/gms, '  --sc-sticky-notes-ds: 2px hsl(var(--usp-hue),  40%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-text:.+?;/gms, '  --sc-sticky-notes-important-text: hsl( 40,  50%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-bg:.+?;/gms, '  --sc-sticky-notes-important-bg: hsl(  0, 100%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-bd:.+?;/gms, '  --sc-sticky-notes-important-bd: hsl(  0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-bs:.+?;/gms, '  --sc-sticky-notes-important-bs: 6px hsl(  0, 100%,  10%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-tags-text:.+?;/gms, '  --sc-sticky-notes-tags-text: hsl(  0,   0%,  90%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-tags-ts:.+?;/gms, '  --sc-sticky-notes-tags-ts: 2px hsl(var(--usp-hue),   0%,   0%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-note-tag-bg:.+?;/gms, '  --sc-sticky-notes-note-tag-bg: hsl(206, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-tip-tag-bg:.+?;/gms, '  --sc-sticky-notes-tip-tag-bg: hsl( 56, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-question-tag-bg:.+?;/gms, '  --sc-sticky-notes-question-tag-bg: hsl(270, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-explain-tag-bg:.+?;/gms, '  --sc-sticky-notes-explain-tag-bg: hsl(163, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-warning-tag-bg:.+?;/gms, '  --sc-sticky-notes-warning-tag-bg: hsl(  0, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-keyword-tag-bg:.+?;/gms, '  --sc-sticky-notes-keyword-tag-bg: hsl(324, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-comment-tag-bg:.+?;/gms, '  --sc-sticky-notes-comment-tag-bg: hsl(100, 100%,  38%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-tag-text:.+?;/gms, '  --sc-sticky-notes-important-tag-text: hsl(  0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-tag-bg:.+?;/gms, '  --sc-sticky-notes-important-tag-bg: hsl(  0, 100%,  12%);');
      noteCSS = noteCSS.replace(/^  --sc-sticky-notes-important-tag-bdc:.+?;/gms, '  --sc-sticky-notes-important-tag-bdc: hsl(  0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-custom-title-block-bg:.+?;/gms, '  --sc-custom-title-block-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-custom-title-block-ds:.+?;/gms, '  --sc-custom-title-block-ds: 2px hsl(var(--usp-hue),  40%,  60%);');
      noteCSS = noteCSS.replace(/^  --sc-custom-title-block-title:.+?;/gms, '  --sc-custom-title-block-title: hsl(var(--usp-hue),  40%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-custom-title-block-symbol-bg:.+?;/gms, '  --sc-custom-title-block-symbol-bg: repeating-radial-gradient(circle, hsl(var(--usp-hue),  40%,  60%), hsl(var(--usp-hue), 100%,  10%) 27%);');
      noteCSS = noteCSS.replace(/^  --sc-key-point-text:.+?;/gms, '  --sc-key-point-text: hsl(var(--usp-hue),  40%,  65%);');
      noteCSS = noteCSS.replace(/^  --sc-key-point-ts:.+?;/gms, '  --sc-key-point-ts: none;');
      noteCSS = noteCSS.replace(/^  --sc-key-point-bdc:.+?;/gms, '  --sc-key-point-bdc: hsl(var(--usp-hue),  40%,  75%);');
      noteCSS = noteCSS.replace(/^  --sc-key-mention-text:.+?;/gms, '  --sc-key-mention-text: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-key-mention-bg:.+?;/gms, '  --sc-key-mention-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-key-mention-bd:.+?;/gms, '  --sc-key-mention-bd: 1px solid hsl(var(--usp-hue),  40%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-key-mention-special-text:.+?;/gms, '  --sc-key-mention-special-text: hsl(0, 100%, 50%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-text:.+?;/gms, '  --sc-plugin-spoiler-text: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-bg:.+?;/gms, '  --sc-plugin-spoiler-bg: var(--sc-bg-2);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-bs:.+?;/gms, '  --sc-plugin-spoiler-bs: 4px hsl(var(--usp-hue),  40%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-title:.+?;/gms, '  --sc-plugin-spoiler-title: hsl(var(--usp-hue),  40%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-span-title:.+?;/gms, '  --sc-plugin-spoiler-span-title: hsl(var(--usp-hue),  40%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-span-title-bg:.+?;/gms, '  --sc-plugin-spoiler-span-title-bg: hsl(var(--usp-hue),  10%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-list-text:.+?;/gms, '  --sc-plugin-spoiler-list-text: hsl(var(--usp-hue), 40%, 60%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-list-span:.+?;/gms, '  --sc-plugin-spoiler-list-span: hsl(var(--usp-hue),   0%,  77%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-custom-title-block-text:.+?;/gms, '  --sc-plugin-spoiler-custom-title-block-text: var(--sc-text);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-custom-title-block-bg:.+?;/gms, '  --sc-plugin-spoiler-custom-title-block-bg: hsl(var(--usp-hue),  10%,  20%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-custom-title-block-title:.+?;/gms, '  --sc-plugin-spoiler-custom-title-block-title: hsl(var(--usp-hue),  40%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-inline-text:.+?;/gms, '  --sc-plugin-spoiler-inline-text: hsl(0,   0%,  80%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-inline-bg:.+?;/gms, '  --sc-plugin-spoiler-inline-bg: hsl(0,   0%,   0%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-inline-bd:.+?;/gms, '  --sc-plugin-spoiler-inline-bd: 1px solid hsl(var(--usp-hue),  40%,  40%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-inline-symbol:.+?;/gms, '  --sc-plugin-spoiler-inline-symbol: hsl(var(--usp-hue),  40%,  70%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-spoiler-inline-symbol-hover:.+?;/gms, '  --sc-plugin-spoiler-inline-symbol-hover: hsl(0, 100%,  50%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-turntochart-bg:.+?;/gms, '  --sc-plugin-turntochart-bg: none;');
      noteCSS = noteCSS.replace(/^  --sc-plugin-turntochart-text:.+?;/gms, '  --sc-plugin-turntochart-text: hsl(var(--usp-hue),   0%,  77%);');
      noteCSS = noteCSS.replace(/^  --sc-plugin-turntochart-info-bg:.+?;/gms, '  --sc-plugin-turntochart-info-bg: hsl(var(--usp-hue),  15%,  10%);');

      chromeCSS = chromeCSS.replace(/^  --usp-base-font:.+?;/gms, '  --usp-base-font: var(--usp-custom-base-font), "Mulish", "Montserrat", "GenSenRounded TW Light", "Chiron Hei HK ExtraLight", Avenir, Arial;');
      chromeCSS = chromeCSS.replace(/^  --usp-monospace-font:.+?;/gms, '  --usp-monospace-font: var(--usp-custom-monospace-font), "Cascadia Mono Light", "GenSenRounded TW Light", "Chiron Hei HK ExtraLight", Roboto;');
      chromeCSS = chromeCSS.replace(/^  --usp-heading-font:.+?;/gms, '  --usp-heading-font: var(--usp-custom-heading-font), "Montserrat", "Mulish", "GenSenRounded TW", "Chiron Hei HK", Avenir, Arial;');
      noteCSS = noteCSS.replace(/^  --usp-base-font:.+?;/gms, '  --usp-base-font: var(--usp-custom-base-font), "Mulish", "Montserrat", "GenSenRounded TW Light", "Chiron Hei HK ExtraLight", Avenir, Arial;');
      noteCSS = noteCSS.replace(/^  --usp-monospace-font:.+?;/gms, '  --usp-monospace-font: var(--usp-custom-monospace-font), "Cascadia Mono Light", "GenSenRounded TW Light", "Chiron Hei HK ExtraLight";');
      noteCSS = noteCSS.replace(/^  --usp-heading-font:.+?;/gms, '  --usp-heading-font: var(--usp-custom-heading-font), "Montserrat", "Mulish", "GenSenRounded TW", "Chiron Hei HK", Avenir, Arial;');
      noteCSS = noteCSS.replace(/^  --usp-print-base-font:.+?;/gms, '  --usp-print-base-font: var(--usp-print-custom-base-font), "Mulish", "Montserrat", "GenSenRounded TW", "Chiron Hei HK Light", Avenir, Arial;');
      noteCSS = noteCSS.replace(/^  --usp-print-monospace-font:.+?;/gms, '  --usp-print-monospace-font: var(--usp-print-custom-monospace-font), "Cascadia Mono Light", "GenSenRounded TW", "Chiron Hei HK Light", Roboto;');
      noteCSS = noteCSS.replace(/^  --usp-print-heading-font:.+?;/gms, '  --usp-print-heading-font: var(--usp-print-custom-heading-font), "Montserrat", "Mulish", "GenSenRounded TW", "Chiron Hei HK", Avenir, Arial;');

      if(!darkerEditorBackground) {
        chromeCSS = chromeCSS.replace(/^  --me-bg:.+?;/gms, '  --me-bg: hsl(var(--usp-hue),  11%,  13%);');
        chromeCSS = chromeCSS.replace(/^  --me-code-block-bg:.+?;/gms, '  --me-code-block-bg: hsl(var(--usp-hue),   8%,  11%);');
        noteCSS = noteCSS.replace(/^  --sc-bg-1:.+?;/gms, '  --sc-bg-1: hsl(var(--usp-hue),  11%,  13%);');
        noteCSS = noteCSS.replace(/^  --sc-bg-2:.+?;/gms, '  --sc-bg-2: hsl(var(--usp-hue),   8%,  11%);');
      } else {
        chromeCSS = chromeCSS.replace(/^  --me-bg:.+?;/gms, '  --me-bg: hsl(var(--usp-hue),  11%,  13%);');
        chromeCSS = chromeCSS.replace(/^  --me-code-block-bg:.+?;/gms, '  --me-code-block-bg: hsl(var(--usp-hue),   8%,  11%);');
        noteCSS = noteCSS.replace(/^  --sc-bg-1:.+?;/gms, '  --sc-bg-1: hsl(var(--usp-hue),  11%,  13%);');
        noteCSS = noteCSS.replace(/^  --sc-bg-2:.+?;/gms, '  --sc-bg-2: hsl(var(--usp-hue),   8%,  11%);');
      }

      if(!emphasizeAddRemove && !emphasizeAddRemoveBg) {
        chromeCSS = chromeCSS.replace(/^  --me-insert-text:.+?;/gms, '  --me-insert-text: hsl(var(--usp-hue), 100%,  70%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bdb:.+?;/gms, '  --me-insert-bdb: hsl(var(--usp-hue),  25%,  60%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bg:.+?;/gms, '  --me-insert-bg: none;');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-text:.+?;/gms, '  --me-strikethrough-text: hsl(var(--usp-hue),  25%,  60%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-bg:.+?;/gms, '  --me-strikethrough-bg: none;');
        noteCSS = noteCSS.replace(/^  --sc-insert-text:.+?;/gms, '  --sc-insert-text: hsl(var(--usp-hue), 100%,  70%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bdb:.+?;/gms, '  --sc-insert-bdb: hsl(var(--usp-hue),  25%,  60%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bg:.+?;/gms, '  --sc-insert-bg: none;');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-text:.+?;/gms, '  --sc-strikethrough-text: hsl(var(--usp-hue),  25%,  60%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-bg:.+?;/gms, '  --sc-strikethrough-bg: none;');
        noteCSS = noteCSS.replace(/^  --pr-insert-text:.+?;/gms, '  --pr-insert-text: hsl(var(--usp-hue), 100%,  40%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bd:.+?;/gms, '  --pr-insert-bd: hsl(var(--usp-hue),  25%,  50%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bg:.+?;/gms, '  --pr-insert-bg: none;');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-text:.+?;/gms, '  --pr-strikethrough-text: hsl(var(--usp-hue),  25%,  50%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-bg:.+?;/gms, '  --pr-strikethrough-bg: none;');
      } else if(!emphasizeAddRemove && emphasizeAddRemoveBg) {
        chromeCSS = chromeCSS.replace(/^  --me-insert-text:.+?;/gms, '  --me-insert-text: hsl(var(--usp-hue), 100%,  70%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bdb:.+?;/gms, '  --me-insert-bdb: hsl(var(--usp-hue),  25%,  60%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bg:.+?;/gms, '  --me-insert-bg: hsl(var(--usp-hue),  35%,  25%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-text:.+?;/gms, '  --me-strikethrough-text: hsl(var(--usp-hue),  25%,  60%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-bg:.+?;/gms, '  --me-strikethrough-bg: hsl(var(--usp-hue),  30%,  20%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-text:.+?;/gms, '  --sc-insert-text: hsl(var(--usp-hue), 100%,  70%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bdb:.+?;/gms, '  --sc-insert-bdb: hsl(var(--usp-hue),  25%,  60%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bg:.+?;/gms, '  --sc-insert-bg: hsl(var(--usp-hue),  35%,  25%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-text:.+?;/gms, '  --sc-strikethrough-text: hsl(var(--usp-hue),  25%,  60%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-bg:.+?;/gms, '  --sc-strikethrough-bg: hsl(var(--usp-hue),  30%,  20%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-text:.+?;/gms, '  --pr-insert-text: hsl(var(--usp-hue), 100%,  40%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bd:.+?;/gms, '  --pr-insert-bd: hsl(var(--usp-hue),  25%,  50%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bg:.+?;/gms, '  --pr-insert-bg: hsl(var(--usp-hue), 40%,  95%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-text:.+?;/gms, '  --pr-strikethrough-text: hsl(var(--usp-hue),  25%,  50%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-bg:.+?;/gms, '  --pr-strikethrough-bg: hsl(var(--usp-hue), 25%,  85%);');
      } else if(emphasizeAddRemove && !emphasizeAddRemoveBg) {
        chromeCSS = chromeCSS.replace(/^  --me-insert-text:.+?;/gms, '  --me-insert-text: hsl(100,  50%,  75%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bdb:.+?;/gms, '  --me-insert-bdb: hsl(100,  70%,  35%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bg:.+?;/gms, '  --me-insert-bg: none;');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-text:.+?;/gms, '  --me-strikethrough-text: hsl(0, 100%,  75%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-bg:.+?;/gms, '  --me-strikethrough-bg: none;');
        noteCSS = noteCSS.replace(/^  --sc-insert-text:.+?;/gms, '  --sc-insert-text: hsl(100,  50%,  75%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bdb:.+?;/gms, '  --sc-insert-bdb: hsl(100,  70%,  35%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bg:.+?;/gms, '  --sc-insert-bg: none;');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-text:.+?;/gms, '  --sc-strikethrough-text: hsl(0, 100%,  75%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-bg:.+?;/gms, '  --sc-strikethrough-bg: none;');
        noteCSS = noteCSS.replace(/^  --pr-insert-text:.+?;/gms, '  --pr-insert-text: hsl(100,  40%,  45%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bd:.+?;/gms, '  --pr-insert-bd: hsl(100,  70%,  35%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bg:.+?;/gms, '  --pr-insert-bg: none;');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-text:.+?;/gms, '  --pr-strikethrough-text: hsl(0, 100%,  65%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-bg:.+?;/gms, '  --pr-strikethrough-bg: none;');
      } else {
        chromeCSS = chromeCSS.replace(/^  --me-insert-text:.+?;/gms, '  --me-insert-text: hsl(100,  50%,  75%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bdb:.+?;/gms, '  --me-insert-bdb: hsl(100,  70%,  35%);');
        chromeCSS = chromeCSS.replace(/^  --me-insert-bg:.+?;/gms, '  --me-insert-bg: hsl(100,  70%,  15%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-text:.+?;/gms, '  --me-strikethrough-text: hsl(0, 100%,  75%);');
        chromeCSS = chromeCSS.replace(/^  --me-strikethrough-bg:.+?;/gms, '  --me-strikethrough-bg: hsl(0,  30%,  20%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-text:.+?;/gms, '  --sc-insert-text: hsl(100,  50%,  75%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bdb:.+?;/gms, '  --sc-insert-bdb: hsl(100,  70%,  35%);');
        noteCSS = noteCSS.replace(/^  --sc-insert-bg:.+?;/gms, '  --sc-insert-bg: hsl(100,  70%,  15%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-text:.+?;/gms, '  --sc-strikethrough-text: hsl(0, 100%,  75%);');
        noteCSS = noteCSS.replace(/^  --sc-strikethrough-bg:.+?;/gms, '  --sc-strikethrough-bg: hsl(0,  30%,  20%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-text:.+?;/gms, '  --pr-insert-text: hsl(100,  40%,  45%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bd:.+?;/gms, '  --pr-insert-bd: hsl(100,  70%,  35%);');
        noteCSS = noteCSS.replace(/^  --pr-insert-bg:.+?;/gms, '  --pr-insert-bg: hsl(100,  35%,  95%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-text:.+?;/gms, '  --pr-strikethrough-text: hsl(0, 100%,  65%);');
        noteCSS = noteCSS.replace(/^  --pr-strikethrough-bg:.+?;/gms, '  --pr-strikethrough-bg: hsl(0,  35%,  90%);');
      }
      
      if(!themeColorListText) {
        chromeCSS = chromeCSS.replace(/^  --me-list-text:.+?;/gms, '  --me-list-text: var(--me-text);');
        chromeCSS = chromeCSS.replace(/^  --me-footnote-ref:.+?;/gms, '  --me-footnote-ref: hsl(var(--usp-hue), 80%, 80%);');
        chromeCSS = chromeCSS.replace(/^  --me-plugin-eh-footnote-ref:.+?;/gms, '  --me-plugin-eh-footnote-ref: hsl(var(--usp-hue), 100%, 10%);');
        noteCSS = noteCSS.replace(/^  --sc-list-text:.+?;/gms, '  --sc-list-text: var(--sc-text);');
        noteCSS = noteCSS.replace(/^  --sc-list-span:.+?;/gms, '  --sc-list-span: hsl(var(--usp-hue), 30%, 80%);');
        noteCSS = noteCSS.replace(/^  --sc-footnote-ref:.+?;/gms, '  --sc-footnote-ref: hsl(var(--usp-hue), 80%, 80%);');
      } else {
        chromeCSS = chromeCSS.replace(/^  --me-list-text:.+?;/gms, '  --me-list-text: hsl(var(--usp-hue), 30%, 80%);');
        chromeCSS = chromeCSS.replace(/^  --me-footnote-ref:.+?;/gms, '  --me-footnote-ref: hsl(calc(var(--usp-hue) + 180deg), 80%, 80%);');
        chromeCSS = chromeCSS.replace(/^  --me-plugin-eh-footnote-ref:.+?;/gms, '  --me-plugin-eh-footnote-ref: hsl(calc(var(--usp-hue) + 180deg), 100%, 10%);');
        noteCSS = noteCSS.replace(/^  --sc-list-text:.+?;/gms, '  --sc-list-text: hsl(var(--usp-hue), 30%, 80%);');
        noteCSS = noteCSS.replace(/^  --sc-list-span:.+?;/gms, '  --sc-list-span: var(--sc-text);');
        noteCSS = noteCSS.replace(/^  --sc-footnote-ref:.+?;/gms, '  --sc-footnote-ref: hsl(calc(var(--usp-hue) + 180deg), 80%, 80%);');
      }

      if(!h1TwillPattern) {
        noteCSS = noteCSS.replace(/^  --usp-h1-text-fill:.+?;/gms, '  --usp-h1-text-fill: none;');
        noteCSS = noteCSS.replace(/^  --usp-h1-font-weight:.+?;/gms, '  --usp-h1-font-weight: 600;');
        noteCSS = noteCSS.replace(/^  --sc-h1-bgi:.+?;/gms, '  --sc-h1-bgi: var(--sc-h2-bgi);');
      } else {
        noteCSS = noteCSS.replace(/^  --usp-h1-text-fill:.+?;/gms, '  --usp-h1-text-fill: transparent;');
        noteCSS = noteCSS.replace(/^  --usp-h1-font-weight:.+?;/gms, '  --usp-h1-font-weight: 800;');
        noteCSS = noteCSS.replace(/^  --sc-h1-bgi:.+?;/gms, '  --sc-h1-bgi: var(--sc-h1-bg);');
      }

      if(!hrTwillPattern) {
        noteCSS = noteCSS.replace(/^  --sc-hr-bgc:.+?;/gms, '  --sc-hr-bgc: hsl(var(--usp-hue), 40%, 50%);');
        noteCSS = noteCSS.replace(/^  --sc-hr-bgi:.+?;/gms, '  --sc-hr-bgi: none;');
      } else {
        noteCSS = noteCSS.replace(/^  --sc-hr-bgc:.+?;/gms, '  --sc-hr-bgc: none;');
        noteCSS = noteCSS.replace(/^  --sc-hr-bgi:.+?;/gms, '  --sc-hr-bgi: repeating-linear-gradient(114deg, hsl(var(--usp-hue), 100%, 80%), hsl(var(--usp-hue), 100%, 35%, 50%), hsl(var(--usp-hue), 100%, 80%)  3px);');
      }

      if(!dottedBlockquote) {
        noteCSS = noteCSS.replace(/^  --sc-blockquote-bdl:.+?;/gms, '  --sc-blockquote-bdl: 3px solid hsl(var(--usp-hue),  20%,  60%);');
        noteCSS = noteCSS.replace(/^  --pr-blockquote-bdl:.+?;/gms, '  --pr-blockquote-bdl: 2px solid hsl(var(--usp-hue),  20%,  60%);');
      } else {
        noteCSS = noteCSS.replace(/^  --sc-blockquote-bdl:.+?;/gms, '  --sc-blockquote-bdl: 5px dotted hsl(var(--usp-hue),  20%,  60%);');
        noteCSS = noteCSS.replace(/^  --pr-blockquote-bdl:.+?;/gms, '  --pr-blockquote-bdl: 4px dotted hsl(var(--usp-hue),  20%,  60%);');
      }

      if(!mermaidEyeProtector) {
        noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-filter:.+?;/gms, '  --usp-mermaid-eye-protector-filter: none;');
        noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-transition:.+?;/gms, '  --usp-mermaid-eye-protector-transition: none;');
      } else {
        noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-filter:.+?;/gms, '  --usp-mermaid-eye-protector-filter: brightness(60%);');
        noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-transition:.+?;/gms, '  --usp-mermaid-eye-protector-transition: filter 2.5s;');
      }
    
      if(!imageEyeProtector) {
        noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-filter:.+?;/gms, '  --usp-image-eye-protector-filter: none;');
        noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-transition:.+?;/gms, '  --usp-image-eye-protector-transition: none;');
      } else {
        noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-filter:.+?;/gms, '  --usp-image-eye-protector-filter: brightness(60%);');
        noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-transition:.+?;/gms, '  --usp-image-eye-protector-transition: filter 2.5s;');
      }
        
      break;

    default:

      alert('ReMoods Theme: There seems to be a problem loading the "Theme Mode", please restart Joplin and try again.')

  }

  if(baseFont !== 'Default') {
    const customBaseFont = baseFont.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-custom-base-font:.+?;/gms, `  --usp-custom-base-font: ${customBaseFont};`);
    noteCSS = noteCSS.replace(/^  --usp-custom-base-font:.+?;/gms, `  --usp-custom-base-font: ${customBaseFont};`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-custom-base-font:.+?;/gms, '  --usp-custom-base-font: none;');
    noteCSS = noteCSS.replace(/^  --usp-custom-base-font:.+?;/gms, '  --usp-custom-base-font: none;');
  }

  if(monospaceFont !== 'Default') {
    const customMonospaceFont = monospaceFont.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-custom-monospace-font:.+?;/gms, `  --usp-custom-monospace-font: ${customMonospaceFont};`);
    noteCSS = noteCSS.replace(/^  --usp-custom-monospace-font:.+?;/gms, `  --usp-custom-monospace-font: ${customMonospaceFont};`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-custom-monospace-font:.+?;/gms, '  --usp-custom-monospace-font: none;');
    noteCSS = noteCSS.replace(/^  --usp-custom-monospace-font:.+?;/gms, '  --usp-custom-monospace-font: none;');
  }

  if(headingFont !== 'Default') {
    const customHeadingFont = headingFont.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-custom-heading-font:.+?;/gms, `  --usp-custom-heading-font: ${customHeadingFont};`);
    noteCSS = noteCSS.replace(/^  --usp-custom-heading-font:.+?;/gms, `  --usp-custom-heading-font: ${customHeadingFont};`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-custom-heading-font:.+?;/gms, '  --usp-custom-heading-font: none;');
    noteCSS = noteCSS.replace(/^  --usp-custom-heading-font:.+?;/gms, '  --usp-custom-heading-font: none;');
  }

  if(baseFontSize !== 15) {
    const baseSize = baseFontSize.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-base-font-size:.+?;/gms, `  --usp-base-font-size: ${baseSize}px;`);
    noteCSS = noteCSS.replace(/^  --usp-base-font-size:.+?;/gms, `  --usp-base-font-size: ${baseSize}px;`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-base-font-size:.+?;/gms, '  --usp-base-font-size: 15px;');
    noteCSS = noteCSS.replace(/^  --usp-base-font-size:.+?;/gms, '  --usp-base-font-size: 15px;');
  }

  if(monospaceFontSize !== 14) {
    const monospaceSize = monospaceFontSize.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-monospace-font-size:.+?;/gms, `  --usp-monospace-font-size: ${monospaceSize}px;`);
    noteCSS = noteCSS.replace(/^  --usp-monospace-font-size:.+?;/gms, `  --usp-monospace-font-size: ${monospaceSize}px;`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-monospace-font-size:.+?;/gms, '  --usp-monospace-font-size: 14px;');
    noteCSS = noteCSS.replace(/^  --usp-monospace-font-size:.+?;/gms, '  --usp-monospace-font-size: 14px;');
  }

  if(h1FontSize !== 170) {
    const h1Size = h1FontSize.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-h1-font-size:.+?;/gms, `  --usp-h1-font-size: ${h1Size}%;`);
    noteCSS = noteCSS.replace(/^  --usp-h1-font-size:.+?;/gms, `  --usp-h1-font-size: ${h1Size}%;`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-h1-font-size:.+?;/gms, '  --usp-h1-font-size: 170%;');
    noteCSS = noteCSS.replace(/^  --usp-h1-font-size:.+?;/gms, '  --usp-h1-font-size: 170%;');
  }

  if(h2FontSize !== 140) {
    const h2Size = h2FontSize.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-h2-font-size:.+?;/gms, `  --usp-h2-font-size: ${h2Size}%;`);
    noteCSS = noteCSS.replace(/^  --usp-h2-font-size:.+?;/gms, `  --usp-h2-font-size: ${h2Size}%;`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-h2-font-size:.+?;/gms, '  --usp-h2-font-size: 140%;');
    noteCSS = noteCSS.replace(/^  --usp-h2-font-size:.+?;/gms, '  --usp-h2-font-size: 140%;');
  }
  
  if(h3FontSize !== 130) {
    const h3Size = h3FontSize.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-h3-font-size:.+?;/gms, `  --usp-h3-font-size: ${h3Size}%;`);
    noteCSS = noteCSS.replace(/^  --usp-h3-font-size:.+?;/gms, `  --usp-h3-font-size: ${h3Size}%;`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-h3-font-size:.+?;/gms, '  --usp-h3-font-size: 130%;');
    noteCSS = noteCSS.replace(/^  --usp-h3-font-size:.+?;/gms, '  --usp-h3-font-size: 130%;');
  }

  if(h4FontSize !== 120) {
    const h4Size = h4FontSize.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-h4-font-size:.+?;/gms, `  --usp-h4-font-size: ${h4Size}%;`);
    noteCSS = noteCSS.replace(/^  --usp-h4-font-size:.+?;/gms, `  --usp-h4-font-size: ${h4Size}%;`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-h4-font-size:.+?;/gms, '  --usp-h4-font-size: 120%;');
    noteCSS = noteCSS.replace(/^  --usp-h4-font-size:.+?;/gms, '  --usp-h4-font-size: 120%;');
  }

  if(h5FontSize !== 110) {
    const h5Size = h5FontSize.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-h5-font-size:.+?;/gms, `  --usp-h5-font-size: ${h5Size}%;`);
    noteCSS = noteCSS.replace(/^  --usp-h5-font-size:.+?;/gms, `  --usp-h5-font-size: ${h5Size}%;`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-h5-font-size:.+?;/gms, '  --usp-h5-font-size: 110%;');
    noteCSS = noteCSS.replace(/^  --usp-h5-font-size:.+?;/gms, '  --usp-h5-font-size: 110%;');
  }

  if(h6FontSize !== 100) {
    const h6Size = h6FontSize.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-h6-font-size:.+?;/gms, `  --usp-h6-font-size: ${h6Size}%;`);
    noteCSS = noteCSS.replace(/^  --usp-h6-font-size:.+?;/gms, `  --usp-h6-font-size: ${h6Size}%;`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-h6-font-size:.+?;/gms, '  --usp-h6-font-size: 100%;');
    noteCSS = noteCSS.replace(/^  --usp-h6-font-size:.+?;/gms, '  --usp-h6-font-size: 100%;');
  }

  if(mathNotationFontSize !== 0) {
    const mathNotationSize = mathNotationFontSize.valueOf();
    noteCSS = noteCSS.replace(/^  --usp-math-notation-font-size:.+?;/gms, `  --usp-math-notation-font-size: ${mathNotationSize}px;`);
  } else {
    noteCSS = noteCSS.replace(/^  --usp-math-notation-font-size:.+?;/gms, '  --usp-math-notation-font-size: var(--usp-base-font-size);');
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

  if(!smallerCodeBlockText) {
    chromeCSS = chromeCSS.replace(/^  --usp-smaller-code-block-syntax-font-size:.+?;/gms, '  --usp-smaller-code-block-syntax-font-size: var(--usp-monospace-font-size);');
    noteCSS = noteCSS.replace(/^  --usp-smaller-code-block-syntax-font-size:.+?;/gms, '  --usp-smaller-code-block-syntax-font-size: var(--usp-monospace-font-size);');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-smaller-code-block-syntax-font-size:.+?;/gms, '  --usp-smaller-code-block-syntax-font-size: calc(var(--usp-monospace-font-size) - 2px);');
    noteCSS = noteCSS.replace(/^  --usp-smaller-code-block-syntax-font-size:.+?;/gms, '  --usp-smaller-code-block-syntax-font-size: calc(var(--usp-monospace-font-size) - 2px);');
  }

  if(!smallerMarkdownTableSyntax) {
    chromeCSS = chromeCSS.replace(/^  --usp-smaller-table-syntax-font-size:.+?;/gms, '  --usp-smaller-table-syntax-font-size: var(--usp-monospace-font-size);');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-smaller-table-syntax-font-size:.+?;/gms, '  --usp-smaller-table-syntax-font-size: calc(var(--usp-monospace-font-size) - 2px);');
  }

  if(!smallerMonospaceText) {
    chromeCSS = chromeCSS.replace(/^  --usp-smaller-markdown-syntax-font-size:.+?;/gms, '  --usp-smaller-markdown-syntax-font-size: var(--usp-monospace-font-size);');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-smaller-markdown-syntax-font-size:.+?;/gms, '  --usp-smaller-markdown-syntax-font-size: calc(var(--usp-monospace-font-size) - 2px);');
  }
  
  if(!evidentHorizontalRule) {
    chromeCSS = chromeCSS.replace(/^  --usp-evident-hr-display:.+?;/gms, '  --usp-evident-hr-display: none;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-evident-hr-display:.+?;/gms, '  --usp-evident-hr-display: inline-block;');
  }
  
  if(!headingRef) {
    noteCSS = noteCSS.replace(/^  --usp-heading-ref-display:.+?;/gms, '  --usp-heading-ref-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-heading-ref-display:.+?;/gms, '  --usp-heading-ref-display: inline-block;');
  }
  
  if (!h1Border) {
    noteCSS = noteCSS.replace(/^  --usp-h1-border-display:.+?;/gms, '  --usp-h1-border-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h1-border-display:.+?;/gms, '  --usp-h1-border-display: block;');
  }
  
  if (!h2Border) {
    noteCSS = noteCSS.replace(/^  --usp-h2-border-display:.+?;/gms, '  --usp-h2-border-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h2-border-display:.+?;/gms, '  --usp-h2-border-display: block;');
  }
 
  if (!h3Border) {
    noteCSS = noteCSS.replace(/^  --usp-h3-border-display:.+?;/gms, '  --usp-h3-border-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h3-border-display:.+?;/gms, '  --usp-h3-border-display: block;');
  }
 
  if (!h4Border) {
    noteCSS = noteCSS.replace(/^  --usp-h4-border-display:.+?;/gms, '  --usp-h4-border-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h4-border-display:.+?;/gms, '  --usp-h4-border-display: block;');
  }
  
  if (!h5Border) {
    noteCSS = noteCSS.replace(/^  --usp-h5-border-display:.+?;/gms, '  --usp-h5-border-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h5-border-display:.+?;/gms, '  --usp-h5-border-display: block;');
  }
 
  if (!h6Border) {
    noteCSS = noteCSS.replace(/^  --usp-h6-border-display:.+?;/gms, '  --usp-h6-border-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h6-border-display:.+?;/gms, '  --usp-h6-border-display: block;');
  }
  
  if(!paragraphTextJustify) {
    noteCSS = noteCSS.replace(/^  --usp-paragraph-text-align:.+?;/gms, '  --usp-paragraph-text-align: initial;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-paragraph-text-align:.+?;/gms, '  --usp-paragraph-text-align: justify;');
  }
  
  if(!listTextJustify) {
    noteCSS = noteCSS.replace(/^  --usp-list-text-align:.+?;/gms, '  --usp-list-text-align: initial;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-list-text-align:.+?;/gms, '  --usp-list-text-align: justify;');
  }

  if(!checklistTextJustify) {
    noteCSS = noteCSS.replace(/^  --usp-checklist-text-align:.+?;/gms, '  --usp-checklist-text-align: initial;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-checklist-text-align:.+?;/gms, '  --usp-checklist-text-align: justify;');
  }

  if(!snTextJustify) {
    noteCSS = noteCSS.replace(/^  --usp-sticky-notes-text-align:.+?;/gms, '  --usp-sticky-notes-text-align: initial;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-sticky-notes-text-align:.+?;/gms, '  --usp-sticky-notes-text-align: justify;');
  }

  if(!dottedCodeBlock) {
    noteCSS = noteCSS.replace(/^  --usp-code-block-bd-style:.+?;/gms, '  --usp-code-block-bd-style: solid;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-code-block-bd-style:.+?;/gms, '  --usp-code-block-bd-style: dotted;');
  }

  if(!mathNotationAlignLeft) {
    noteCSS = noteCSS.replace(/^  --usp-math-notation-text-align:.+?;/gms, '  --usp-math-notation-text-align: center;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-math-notation-text-align:.+?;/gms, '  --usp-math-notation-text-align: left;');
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
    noteCSS = noteCSS.replace(/^  --usp-special-text-add-remove-symbol-display:.+?;/gms, '  --usp-special-text-add-remove-symbol-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-special-text-add-remove-symbol-display:.+?;/gms, '  --usp-special-text-add-remove-symbol-display: inline-block;');
  }

  if(!inlineCodeSymbol) {
    noteCSS = noteCSS.replace(/^  --usp-inline-code-symbol-display:.+?;/gms, '  --usp-inline-code-symbol-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-inline-code-symbol-display:.+?;/gms, '  --usp-inline-code-symbol-display: inline-block;');
  }

  if(!customTitleBlockSymbol) {
    noteCSS = noteCSS.replace(/^  --usp-custom-title-block-symbol-display:.+?;/gms, '  --usp-custom-title-block-symbol-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-custom-title-block-symbol-display:.+?;/gms, '  --usp-custom-title-block-symbol-display: inline-block;');
  }

  if(!panelsScrollbar) {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-panel-scrollbar-width:.+?;/gms, '  --usp-notebook-panel-scrollbar-width: 3px;');
    chromeCSS = chromeCSS.replace(/^  --usp-note-list-panel-scrollbar-width:.+?;/gms, '  --usp-note-list-panel-scrollbar-width: 3px;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-panel-scrollbar-width:.+?;/gms, '  --usp-notebook-panel-scrollbar-width: 7px;');
    chromeCSS = chromeCSS.replace(/^  --usp-note-list-panel-scrollbar-width:.+?;/gms, '  --usp-note-list-panel-scrollbar-width: 7px;');
  }

  if(!notebookTitleWrap) {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-title-wrap:.+?;/gms, '  --usp-notebook-title-wrap: none;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-title-wrap:.+?;/gms, '  --usp-notebook-title-wrap: normal;');
  }

  if(!notebookTitleScrollbar) {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-title-scrollbar-display:.+?;/gms, '  --usp-notebook-title-scrollbar-display: none;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-title-scrollbar-display:.+?;/gms, '  --usp-notebook-title-scrollbar-display: block;');
  }

  if(!notebookFolderIcon) {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-folder-icon-display:.+?;/gms, '  --usp-notebook-folder-icon-display: none;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-folder-icon-display:.+?;/gms, '  --usp-notebook-folder-icon-display: block;');
  }

  if(!allNotesButton) {
    chromeCSS = chromeCSS.replace(/^  --usp-all-notes-button-display:.+?;/gms, '  --usp-all-notes-button-display: none;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-all-notes-button-display:.+?;/gms, '  --usp-all-notes-button-display: flex;');
  }

  if(!syncFeature) {
    chromeCSS = chromeCSS.replace(/^  --usp-sync-feature-display:.+?;/gms, '  --usp-sync-feature-display: none;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-sync-feature-display:.+?;/gms, '  --usp-sync-feature-display: block;');
  }

  if(!tagFeature) {
    chromeCSS = chromeCSS.replace(/^  --usp-tag-feature-display-1:.+?;/gms, '  --usp-tag-feature-display-1: none;');
    chromeCSS = chromeCSS.replace(/^  --usp-tag-feature-display-2:.+?;/gms, '  --usp-tag-feature-display-2: none;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-tag-feature-display-1:.+?;/gms, '  --usp-tag-feature-display-1: block;');
    chromeCSS = chromeCSS.replace(/^  --usp-tag-feature-display-2:.+?;/gms, '  --usp-tag-feature-display-2: flex;');
  }

  if(!noteListItemAutoScroll) {
    chromeCSS = chromeCSS.replace(/^  --usp-note-list-item-auto-scroll:.+?;/gms, '  --usp-note-list-item-auto-scroll: none;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-note-list-item-auto-scroll:.+?;/gms, '  --usp-note-list-item-auto-scroll: rtl-auto 4s linear 0.6s infinite;');
  }

  if(printBaseFont !== 'Default') {
    const printCustomBaseFont = printBaseFont.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-print-custom-base-font:.+?;/gms, `  --usp-print-custom-base-font: ${printCustomBaseFont};`);
    noteCSS = noteCSS.replace(/^  --usp-print-custom-base-font:.+?;/gms, `  --usp-print-custom-base-font: ${printCustomBaseFont};`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-print-custom-base-font:.+?;/gms, '  --usp-print-custom-base-font: none;');
    noteCSS = noteCSS.replace(/^  --usp-print-custom-base-font:.+?;/gms, '  --usp-print-custom-base-font: none;');
  }

  if(printMonospaceFont !== 'Default') {
    const printCustomMonospaceFont = printMonospaceFont.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-print-custom-monospace-font:.+?;/gms, `  --usp-print-custom-monospace-font: ${printCustomMonospaceFont};`);
    noteCSS = noteCSS.replace(/^  --usp-print-custom-monospace-font:.+?;/gms, `  --usp-print-custom-monospace-font: ${printCustomMonospaceFont};`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-print-custom-monospace-font:.+?;/gms, '  --usp-print-custom-monospace-font: none;');
    noteCSS = noteCSS.replace(/^  --usp-print-custom-monospace-font:.+?;/gms, '  --usp-print-custom-monospace-font: none;');
  }

  if(printHeadingFont !== 'Default') {
    const printCustomHeadingFont = printHeadingFont.valueOf();
    chromeCSS = chromeCSS.replace(/^  --usp-print-custom-heading-font:.+?;/gms, `  --usp-print-custom-heading-font: ${printCustomHeadingFont};`);
    noteCSS = noteCSS.replace(/^  --usp-print-custom-heading-font:.+?;/gms, `  --usp-print-custom-heading-font: ${printCustomHeadingFont};`);
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-print-custom-heading-font:.+?;/gms, '  --usp-print-custom-heading-font: none;');
    noteCSS = noteCSS.replace(/^  --usp-print-custom-heading-font:.+?;/gms, '  --usp-print-custom-heading-font: none;');
  }

  if(printBaseFontSize !== 13) {
    const printBaseSize = printBaseFontSize.valueOf();
    noteCSS = noteCSS.replace(/^  --usp-print-base-font-size:.+?;/gms, `  --usp-print-base-font-size: ${printBaseSize}px;`);
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-base-font-size:.+?;/gms, '  --usp-print-base-font-size: 13px;');
  }

  if(printMonospaceFontSize !== 12) {
    const printMonospaceSize = printMonospaceFontSize.valueOf();
    noteCSS = noteCSS.replace(/^  --usp-print-monospace-font-size:.+?;/gms, `  --usp-print-monospace-font-size: ${printMonospaceSize}px;`);
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-monospace-font-size:.+?;/gms, '  --usp-print-monospace-font-size: 12px;');
  }

  if(printH1FontSize !== 180) {
    const printH1Size = printH1FontSize.valueOf();
    noteCSS = noteCSS.replace(/^  --usp-print-h1-font-size:.+?;/gms, `  --usp-print-h1-font-size: ${printH1Size}%;`);
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-h1-font-size:.+?;/gms, '  --usp-print-h1-font-size: 180%;');
  }

  if(printH2FontSize !== 160) {
    const printH2Size = printH2FontSize.valueOf();
    noteCSS = noteCSS.replace(/^  --usp-print-h2-font-size:.+?;/gms, `  --usp-print-h2-font-size: ${printH2Size}%;`);
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-h2-font-size:.+?;/gms, '  --usp-print-h2-font-size: 160%;');
  }
  
  if(printH3FontSize !== 140) {
    const printH3Size = printH3FontSize.valueOf();
    noteCSS = noteCSS.replace(/^  --usp-print-h3-font-size:.+?;/gms, `  --usp-print-h3-font-size: ${printH3Size}%;`);
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-h3-font-size:.+?;/gms, '  --usp-print-h3-font-size: 140%;');
  }

  if(printH4FontSize !== 130) {
    const printH4Size = printH4FontSize.valueOf();
    noteCSS = noteCSS.replace(/^  --usp-print-h4-font-size:.+?;/gms, `  --usp-print-h4-font-size: ${printH4Size}%;`);
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-h4-font-size:.+?;/gms, '  --usp-print-h4-font-size: 130%;');
  }

  if(printH5FontSize !== 120) {
    const printH5Size = printH5FontSize.valueOf();
    noteCSS = noteCSS.replace(/^  --usp-print-h5-font-size:.+?;/gms, `  --usp-print-h5-font-size: ${printH5Size}%;`);
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-h5-font-size:.+?;/gms, '  --usp-print-h5-font-size: 120%;');
  }

  if(printH6FontSize !== 110) {
    const printH6Size = printH6FontSize.valueOf();
    noteCSS = noteCSS.replace(/^  --usp-print-h6-font-size:.+?;/gms, `  --usp-print-h6-font-size: ${printH6Size}%;`);
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-h6-font-size:.+?;/gms, '  --usp-print-h6-font-size: 110%;');
  }

  if(!printSmallerCodeBlockText) {
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
    noteCSS = noteCSS.replace(/^  --usp-print-heading-ref-display:.+?;/gms, '  --usp-print-heading-ref-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-heading-ref-display:.+?;/gms, '  --usp-print-heading-ref-display: inline-block;');
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
    noteCSS = noteCSS.replace(/^  --usp-print-sticky-notes-key-mention-display:.+?;/gms, '  --usp-print-sticky-notes-key-mention-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-sticky-notes-key-mention-display:.+?;/gms, '  --usp-print-sticky-notes-key-mention-display: block;');
  }

  if(!printSpoilerInlineText) {
    noteCSS = noteCSS.replace(/^  --usp-print-spoiler-inline-text-visibility:.+?;/gms, '  --usp-print-spoiler-inline-text-visibility: hidden;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-spoiler-inline-text-visibility:.+?;/gms, '  --usp-print-spoiler-inline-text-visibility: visible;');
  }

  if(!printLinkHref) {
    noteCSS = noteCSS.replace(/^  --usp-print-link-href-display:.+?;/gms, '  --usp-print-link-href-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-link-href-display:.+?;/gms, '  --usp-print-link-href-display: inline;');
  }

  if(!printAbbrDescription) {
    noteCSS = noteCSS.replace(/^  --usp-print-abbreviation-text-description-display:.+?;/gms, '  --usp-print-abbreviation-text-description-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-abbreviation-text-description-display:.+?;/gms, '  --usp-print-abbreviation-text-description-display: inline;');
  }

  await fs.writeFile(installDir + '/chrome.css', chromeCSS, 'utf8');
  await fs.writeFile(installDir + '/note.css', noteCSS, 'utf8');

}