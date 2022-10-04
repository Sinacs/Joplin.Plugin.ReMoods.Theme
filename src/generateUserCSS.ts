import joplin from 'api';
import { ThemeSettings } from 'src';

export const generateUserCSS = async (settings: ThemeSettings) => {
	const fs = joplin.require('fs-extra');

  const {
    remoodsHue,
    baseFont,
    monospaceFont,
    baseFontSize,
    smallerMonospaceFontSize,
    darkerEditorBackground,
    h1TextTransform,
    h1FontVariant,
    emphasizeAddRemove,
    emphasizeAddRemoveBg,
    evidentHorizontalLine,
    headingRef,
    paragraphJustify,
    katexTextAlignLeft,
    mermaidEyeProtector,
    imageEyeProtector,
    codeBlockMaxHeight,
    artGalleryMaxHeight,
    h1Border,
    h2Border,
    h3Border,
    h4Border,
    h5Border,
    h6Border,
    addRemoveSymbol,
    inlineCodeSymbol,
    customTitleBlockSymbol,
    notebookTitleWrap,
    notebookTitleScrollbar,
    printBaseFont,
    printMonospaceFont,
    printBaseFontSize,
    printMonospaceFontSize,
    printNoteTitle,
    printHeadingRef,
    printH1Border,
    printTOC,
    printStickyNotes,
    printKeyMention,
    printSpoilerInlineText,
    printSnKm,
  } = settings;

  const installDir = await joplin.plugins.installationDir();
  let chromeCSS = await fs.readFile(installDir + '/chrome.css', 'utf-8');
  let noteCSS = await fs.readFile(installDir + '/note.css', 'utf-8');

  /*
   * remoodsHue: int + 'deg'
   * --usp-remoods-hue: 213deg;
   */

  /*
   * baseFont: string
   * --usp-base-font: "montserrat","chiron hei hk text extralight";
   */

  /*
   * monospaceFont: string
   * --usp-monospace-font: "Cascadia Mono Light", "chiron hei hk text extralight";
   */

  /*
   * baseFontSize: int + 'px'
   * --usp-monospace-font-size: 14px;
   */

  /*
   * smallerMonospaceFontSize: int + '%'
   * --usp-smaller-monospace-font-size: 86%;
   */

  if(!darkerEditorBackground) {
    chromeCSS = chromeCSS.replace(/^  --code-mirror-bg-color:.+?;/m, '  --code-mirror-bg-color: hsl(var(--usp-remoods-hue),  8%, 27%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-bg-color:.+?;/m, '  --code-block-bg-color: hsl(var(--usp-remoods-hue),  8%, 17%);');
    noteCSS = noteCSS.replace(/^  --render-viewer-bg-color:.+?;/m, '  --render-viewer-bg-color: hsl(var(--usp-remoods-hue),  8%, 27%);');
    noteCSS = noteCSS.replace(/^  --render-viewer-bg-color-2:.+?;/m, '  --render-viewer-bg-color-2: hsl(var(--usp-remoods-hue),  8%, 17%);');
  } else {
    chromeCSS = chromeCSS.replace(/^  --code-mirror-bg-color:.+?;/m, '  --code-mirror-bg-color: hsl(var(--usp-remoods-hue),  8%, 20%);');
    chromeCSS = chromeCSS.replace(/^  --code-block-bg-color:.+?;/m, '  --code-block-bg-color: hsl(var(--usp-remoods-hue),  8%, 13%);');
    noteCSS = noteCSS.replace(/^  --render-viewer-bg-color:.+?;/m, '  --render-viewer-bg-color: hsl(var(--usp-remoods-hue),  8%, 20%);');
    noteCSS = noteCSS.replace(/^  --render-viewer-bg-color-2:.+?;/m, '  --render-viewer-bg-color-2: hsl(var(--usp-remoods-hue),  8%, 13%);');
  }

  if(!h1TextTransform) {
    chromeCSS = chromeCSS.replace(/^  --usp-h1-text-transform:.+?;/m, '  --usp-h1-text-transform: unset;');
    noteCSS = noteCSS.replace(/^  --usp-h1-text-transform:.+?;/m, '  --usp-h1-text-transform: unset;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-h1-text-transform:.+?;/m, '  --usp-h1-text-transform: capitalize;');
    noteCSS = noteCSS.replace(/^  --usp-h1-text-transform:.+?;/m, '  --usp-h1-text-transform: capitalize;');
  }

  if(!h1FontVariant) {
    chromeCSS = chromeCSS.replace(/^  --usp-h1-font-variant:.+?;/m, '  --usp-h1-font-variant: unset;');
    noteCSS = noteCSS.replace(/^  --usp-h1-font-variant:.+?;/m, '  --usp-h1-font-variant: unset;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-h1-font-variant:.+?;/m, '  --usp-h1-font-variant: small-caps;');
    noteCSS = noteCSS.replace(/^  --usp-h1-font-variant:.+?;/m, '  --usp-h1-font-variant: small-caps;');
  }
  
  if(!emphasizeAddRemove && !emphasizeAddRemoveBg) {
    chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/m, '  --insert-text-color: hsl(var(--usp-remoods-hue), 100%,  70%);');
    chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/m, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
    chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/m, '  --insert-text-bg-color: none;');
    chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/m, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
    chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/m, '  --strikethrough-text-bg-color: none;');
    noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/m, '  --insert-text-color: hsl(var(--usp-remoods-hue), 100%,  70%);');
    noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/m, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
    noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/m, '  --insert-text-bg-color: none;');
    noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/m, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
    noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/m, '  --strikethrough-text-bg-color: none;');

  } else if(!emphasizeAddRemove && emphasizeAddRemoveBg) {
    chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/m, '  --insert-text-color: hsl(var(--usp-remoods-hue), 100%,  70%);');
    chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/m, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
    chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/m, '  --insert-text-bg-color: hsl(var(--usp-remoods-hue),  35%,  25%);');
    chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/m, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
    chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/m, '  --strikethrough-text-bg-color: hsl(var(--usp-remoods-hue),  30%,  20%);');
    noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/m, '  --insert-text-color: hsl(var(--usp-remoods-hue), 100%,  70%);');
    noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/m, '  --insert-text-bd-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
    noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/m, '  --insert-text-bg-color: hsl(var(--usp-remoods-hue),  35%,  25%);');
    noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/m, '  --strikethrough-text-color: hsl(var(--usp-remoods-hue),  25%,  60%);');
    noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/m, '  --strikethrough-text-bg-color: hsl(var(--usp-remoods-hue),  30%,  20%);');
  
  } else if(emphasizeAddRemove && !emphasizeAddRemoveBg) {
    chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/m, '  --insert-text-color: hsl(100,  50%,  75%);');
    chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/m, '  --insert-text-bd-color: hsl(100,  70%,  35%);');
    chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/m, '  --insert-text-bg-color: none;');
    chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/m, '  --strikethrough-text-color: hsl(0, 100%,  75%);');
    chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/m, '  --strikethrough-text-bg-color: none;');
    noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/m, '  --insert-text-color: hsl(100,  50%,  75%);');
    noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/m, '  --insert-text-bd-color: hsl(100,  70%,  35%);');
    noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/m, '  --insert-text-bg-color: none;');
    noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/m, '  --strikethrough-text-color: hsl(0, 100%,  75%);');
    noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/m, '  --strikethrough-text-bg-color: none;');
  
  } else {
    chromeCSS = chromeCSS.replace(/^  --insert-text-color:.+?;/m, '  --insert-text-color: hsl(100,  50%,  75%);');
    chromeCSS = chromeCSS.replace(/^  --insert-text-bd-color:.+?;/m, '  --insert-text-bd-color: hsl(100,  70%,  35%);');
    chromeCSS = chromeCSS.replace(/^  --insert-text-bg-color:.+?;/m, '  --insert-text-bg-color: hsl(100,  70%,  15%);');
    chromeCSS = chromeCSS.replace(/^  --strikethrough-text-color:.+?;/m, '  --strikethrough-text-color: hsl(0, 100%,  75%);');
    chromeCSS = chromeCSS.replace(/^  --strikethrough-text-bg-color:.+?;/m, '  --strikethrough-text-bg-color: hsl(0,  30%,  20%);');
    noteCSS = noteCSS.replace(/^  --insert-text-color:.+?;/m, '  --insert-text-color: hsl(100,  50%,  75%);');
    noteCSS = noteCSS.replace(/^  --insert-text-bd-color:.+?;/m, '  --insert-text-bd-color: hsl(100,  70%,  35%);');
    noteCSS = noteCSS.replace(/^  --insert-text-bg-color:.+?;/m, '  --insert-text-bg-color: hsl(100,  70%,  15%);');
    noteCSS = noteCSS.replace(/^  --strikethrough-text-color:.+?;/m, '  --strikethrough-text-color: hsl(0, 100%,  75%);');
    noteCSS = noteCSS.replace(/^  --strikethrough-text-bg-color:.+?;/m, '  --strikethrough-text-bg-color: hsl(0,  30%,  20%);');
  }

  if(!evidentHorizontalLine) {
    chromeCSS = chromeCSS.replace(/^  --usp-evident-horizontal-line-switcher:.+?;/m, '  --usp-evident-horizontal-line-switcher: none;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-evident-horizontal-line-switcher:.+?;/m, '  --usp-evident-horizontal-line-switcher: inline-block;');
  }

  if(!headingRef) {
    noteCSS = noteCSS.replace(/^  --usp-heading-ref-switcher:.+?;/m, '  --usp-heading-ref-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-heading-ref-switcher:.+?;/m, '  --usp-heading-ref-switcher: inline-block;');
  }

  if(!paragraphJustify) {
    noteCSS = noteCSS.replace(/^  --usp-paragraph-justify:.+?;/m, '  --usp-paragraph-justify: unset;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-paragraph-justify:.+?;/m, '  --usp-paragraph-justify: justify;');
  }

  if(!katexTextAlignLeft) {
    noteCSS = noteCSS.replace(/^  --usp-katex-text-align:.+?;/m, '  --usp-katex-text-align: center;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-katex-text-align:.+?;/m, '  --usp-katex-text-align: left;');
  }

  if(!mermaidEyeProtector) {
    noteCSS = noteCSS.replace(/^  usp-mermaid-eye-protector-filter:.+?;/m, '  usp-mermaid-eye-protector-filter: none;');
    noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-transition:.+?;/m, '  --usp-mermaid-eye-protector-transition: none;');
  } else {
    noteCSS = noteCSS.replace(/^  usp-mermaid-eye-protector-filter:.+?;/m, '  usp-mermaid-eye-protector-filter: brightness(80%);');
    noteCSS = noteCSS.replace(/^  --usp-mermaid-eye-protector-transition:.+?;/m, '  --usp-mermaid-eye-protector-transition: filter 2s;');
  }

  if(!imageEyeProtector) {
    noteCSS = noteCSS.replace(/^  usp-image-eye-protector-filter:.+?;/m, '  usp-image-eye-protector-filter: none;');
    noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-transition:.+?;/m, '  --usp-image-eye-protector-transition: none;');
  } else {
    noteCSS = noteCSS.replace(/^  usp-image-eye-protector-filter:.+?;/m, '  usp-image-eye-protector-filter: brightness(80%);');
    noteCSS = noteCSS.replace(/^  --usp-image-eye-protector-transition:.+?;/m, '  --usp-image-eye-protector-transition: filter 2s;');
  }

  if(!codeBlockMaxHeight) {
    noteCSS = noteCSS.replace(/^  --usp-code-block-max-height:.+?;/m, '  --usp-code-block-max-height: unset;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-code-block-max-height:.+?;/m, '  --usp-code-block-max-height: 56vh;');
  }

  if(!artGalleryMaxHeight) {
    noteCSS = noteCSS.replace(/^  --usp-art-gallery-max-height:.+?;/m, '  --usp-art-gallery-max-height: unset;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-art-gallery-max-height:.+?;/m, '  --usp-art-gallery-max-height: 56vh;');
  }

  if (!h1Border) {
    noteCSS = noteCSS.replace(/^  --usp-h1-border-switcher:.+?;/m, '  --usp-h1-border-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h1-border-switcher:.+?;/m, '  --usp-h1-border-switcher: block;');
  }
  
  if (!h2Border) {
    noteCSS = noteCSS.replace(/^  --usp-h2-border-switcher:.+?;/m, '  --usp-h2-border-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h2-border-switcher:.+?;/m, '  --usp-h2-border-switcher: block;');
  }

  if (!h3Border) {
    noteCSS = noteCSS.replace(/^  --usp-h3-border-switcher:.+?;/m, '  --usp-h3-border-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h3-border-switcher:.+?;/m, '  --usp-h3-border-switcher: block;');
  }

  if (!h4Border) {
    noteCSS = noteCSS.replace(/^  --usp-h4-border-switcher:.+?;/m, '  --usp-h4-border-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h4-border-switcher:.+?;/m, '  --usp-h4-border-switcher: block;');
  }
  
  if (!h5Border) {
    noteCSS = noteCSS.replace(/^  --usp-h5-border-switcher:.+?;/m, '  --usp-h5-border-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h5-border-switcher:.+?;/m, '  --usp-h5-border-switcher: block;');
  }

  if (!h6Border) {
    noteCSS = noteCSS.replace(/^  --usp-h6-border-switcher:.+?;/m, '  --usp-h6-border-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-h6-border-switcher:.+?;/m, '  --usp-h6-border-switcher: block;');
  }

  if(!addRemoveSymbol) {
    noteCSS = noteCSS.replace(/^  --usp-special-text-add-remove-symbol-switcher:.+?;/m, '  --usp-special-text-add-remove-symbol-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-special-text-add-remove-symbol-switcher:.+?;/m, '  --usp-special-text-add-remove-symbol-switcher: inline-block;');
  }

  if(!inlineCodeSymbol) {
    noteCSS = noteCSS.replace(/^  --usp-inline-code-symbol-switcher:.+?;/m, '  --usp-inline-code-symbol-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-inline-code-symbol-switcher:.+?;/m, '  --usp-inline-code-symbol-switcher: inline-block;');
  }

  if(!customTitleBlockSymbol) {
    noteCSS = noteCSS.replace(/^  --usp-custom-title-block-symbol-switcher:.+?;/m, '  --usp-custom-title-block-symbol-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-custom-title-block-symbol-switcher:.+?;/m, '  --usp-custom-title-block-symbol-switcher: inline-block;');
  }

  if(!notebookTitleWrap) {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-title-wrap:.+?;/m, '  --usp-notebook-title-wrap: none;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-title-wrap:.+?;/m, '  --usp-notebook-title-wrap: normal;');
  }

  if(!notebookTitleScrollbar) {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-title-scrollbar-switcher:.+?;/m, '  --usp-notebook-title-scrollbar-switcher: none;');
  } else {
    chromeCSS = chromeCSS.replace(/^  --usp-notebook-title-scrollbar-switcher:.+?;/m, '  --usp-notebook-title-scrollbar-switcher: block;');
  }



  /*
   * printBaseFont: string
   * --usp-print-base-font: "montserrat","chiron hei hk text extralight";
   */

  /*
   * printMonospaceFont: string
   * --usp-print-monospace-font: "Cascadia Mono Light", "chiron hei hk text extralight";
   */

  /*
   * printBaseFontSize: int + 'px'
   * --usp-print-base-font-size: 12px;
   */

  /*
   * printMonospaceFontSize: int + 'px'
   * --usp-print-monospace-font-size: 10px;
   */

  if(!printNoteTitle) {
    noteCSS = noteCSS.replace(/^  --usp-print-note-title-display:.+?;/m, '  --usp-print-note-title-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-note-title-display:.+?;/m, '  --usp-print-note-title-display: block;');
  }

  if(!printHeadingRef) {
    noteCSS = noteCSS.replace(/^  --usp-print-heading-ref-switcher:.+?;/m, '  --usp-print-heading-ref-switcher: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-heading-ref-switcher:.+?;/m, '  --usp-print-heading-ref-switcher: inline-block;');
  }

  if(!printH1Border) {
    noteCSS = noteCSS.replace(/^  --usp-print-h1-bd-display:.+?;/m, '  --usp-print-h1-bd-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-h1-bd-display:.+?;/m, '  --usp-print-h1-bd-display: block;');
  }

  if(!printTOC) {
    noteCSS = noteCSS.replace(/^  --usp-print-toc-display:.+?;/m, '  --usp-print-toc-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-toc-display:.+?;/m, '  --usp-print-toc-display: block;');
  }

  if(!printStickyNotes) {
    noteCSS = noteCSS.replace(/^  --usp-print-sticky-notes-display:.+?;/m, '  --usp-print-sticky-notes-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-sticky-notes-display:.+?;/m, '  --usp-print-sticky-notes-display: block;');
  }

  if(!printKeyMention) {
    noteCSS = noteCSS.replace(/^  --usp-print-key-mention-display:.+?;/m, '  --usp-print-key-mention-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-key-mention-display:.+?;/m, '  --usp-print-key-mention-display: block;');
  }

  if(!printSnKm) {
    noteCSS = noteCSS.replace(/^  --usp-print-sn-km-display:.+?;/m, '  --usp-print-sn-km-display: none;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-sn-km-display:.+?;/m, '  --usp-print-sn-km-display: block;');
  }

  if(!printSpoilerInlineText) {
    noteCSS = noteCSS.replace(/^  --usp-print-spoiler-inline-text-visibility:.+?;/m, '  --usp-print-spoiler-inline-text-visibility: hidden;');
  } else {
    noteCSS = noteCSS.replace(/^  --usp-print-spoiler-inline-text-visibility:.+?;/m, '  --usp-print-spoiler-inline-text-visibility: visible;');
  }

  await fs.writeFile(installDir + '/chrome.css', chromeCSS, 'utf8');
  await fs.writeFile(installDir + '/note.css', noteCSS, 'utf8');
}