import joplin from 'api';
import { ChangeEvent } from 'api/JoplinSettings';
import { SettingItemType } from 'api/types';
import { generateUserCSS } from './generateUserCSS';

export type ThemeSettings = {

	// SCREEN ***************************************
	// Markdown Editor & Render Viewer ==============
	remoodsHue: number;
	baseFont: string;
	monospaceFont: string;
	baseFontSize: number;
	darkerEditorBackground: boolean;
	h1TextTransform: boolean;
	h1FontVariant: boolean;
	emphasizeAddRemove: boolean,
	emphasizeAddRemoveBg: boolean;
	listTextColor: boolean;
	smallerCodeBlockFontSize: boolean;

  // Markdown Editor ==============================
	smallerMarkdownTableFontSize: number;
	smallerMonospaceFontSize: number;
	evidentHorizontalLine: boolean;

	// Render Viewer ================================
	headingRef: boolean;
	h1Border: boolean;
	h2Border: boolean;
	h3Border: boolean;
	h4Border: boolean;
	h5Border: boolean;
	h6Border: boolean;
	h1TwillPattern: boolean;
	paragraphJustify: boolean;
	dottedBlockquote: boolean;
	dottedCodeBlock: boolean;
	katexTextAlignLeft: boolean;
	mermaidEyeProtector: boolean;
	imageEyeProtector: boolean;
	codeBlockMaxHeight: boolean;
	artGalleryMaxHeight: boolean;
	addRemoveSymbol: boolean;
	inlineCodeSymbol: boolean;
	customTitleBlockSymbol: boolean;

	// Joplin UI ====================================
	notebookNotelistPanelScrollbar: boolean;
	notebookTitleWrap: boolean;
	notebookTitleScrollbar: boolean;
	notebookFolderIcon: boolean;

	// PRINT ****************************************
	printBaseFont: string;
	printMonospaceFont: string;
	printBaseFontSize: Number;
	printSmallerCodeBlockFontSize: boolean;
	printNoteTitle: boolean;
	printHeadingRef: boolean;
	printH1Border: boolean;
	printTOC: boolean;
	printStickyNotes: boolean;
	printKeyMention: boolean;
	printSnKm: boolean;
	printSpoilerInlineText: boolean;

};



joplin.plugins.register({
	onStart: async function() {
		const installDir = await joplin.plugins.installationDir();
		const chromeCssFilePath = installDir + '/chrome.css';
		const noteCssFilePath = installDir + '/note.css';
    
		await prepareThemeSettings();
		await writeUserCSS();

		await (joplin as any).window.loadChromeCssFile(chromeCssFilePath);
		await (joplin as any).window.loadNoteCssFile(noteCssFilePath);

	},
});



async function prepareThemeSettings(): Promise<void> {
	await joplin.settings.registerSection('remoodsThemeSection', {
		label: 'ReMoods Theme',
		iconName: 'fas fa-palette',
		description: `
      ----- 1: It is required to quit and restart Joplin to take effect after any changes below.
      ----- 2: In the beta version, you should edit font-related settings through the external CSS, please visit the github repo and read about the temporary solution.
			----- 3: The original font settings which in the "Tools > Options > Appearance" will no longer work when using ReMoods Theme. 
		`
	});

	await joplin.settings.registerSettings({
		'remoodsHue': {
			section: 'remoodsThemeSection',
			label: 'ReMoods Hue(INVALID)',
			type: SettingItemType.Int,
			value: 213,
			description: 'Set color hue for the theme. (Number between 0 to 360)',
			public: false,
		},

		'baseFont': {
			section: 'remoodsThemeSection',
			label: 'Base Font(INVALID)',
			type: SettingItemType.String,
			value: '"montserrat","chiron hei hk text extralight"',
			description: 'The non-monospace font for editor and render viewer.',
			public: false,
		},

		'monospaceFont': {
			section: 'remoodsThemeSection',
			label: 'Monospace Font(INVALID)',
			type: SettingItemType.String,
			value: '"Cascadia Mono Light", "chiron hei hk text extralight"',
			description: 'The monospace font for editor and render viewer.',
			public: false,
		},

		'baseFontSize': {
			section: 'remoodsThemeSection',
			label: 'Base Font Size(INVALID)',
			type: SettingItemType.Int,
			value: 14,
			description: 'The font size of both monospace & non-monospace font. ("px")',
			public: false,
		},
    
		'darkerEditorBackground': {
			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - Enable darker background color (EXPERIMENTAL)',
			type: SettingItemType.Bool,
			value: false,
			public: true,
		},

		'h1TextTransform': {
			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - Enable capitalize the first letter of each word on H1 heading',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},
		
		'h1FontVariant': {
			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - Enable small-caps effect on H1 heading',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},

		'emphasizeAddRemove': {
			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - Enable emphasize colors for insert text and strikethrough text',
			type: SettingItemType.Bool,
			value: false,
			description: 'Enable: Insert text is green, strikethrough text is red, and it would not change with the theme color. | Disable: Follow theme color.',
			public: true,
		},
		
		'emphasizeAddRemoveBg': {
			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - Enable background color for insert text and strikethrough text',
			type: SettingItemType.Bool,
			value: false,
			description: 'The background color depends on its text color.',
			public: true,
		},

		'listTextColor': {
			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - Enable theme color for list text',
			type: SettingItemType.Bool,
			value: true,
			description: 'Enable: Theme color | Disable: Equal to the paragraph text color | It will affects to ordered list, unordered list, and checklist.',
			public: true,
		},

		'smallerCodeBlockFontSize': {
			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - Enable smaller font size for code block',
			type: SettingItemType.Bool,
			value: false,
			description: '(2px smaller than regular size)',
			public: true,
		},

		'smallerMarkdownTableFontSize': {
			section: 'remoodsThemeSection',
			label: 'Markdown Editor - Enable smaller font size for markdown table syntax',
			type: SettingItemType.Bool,
			value: false,
			description: '(2px smaller than regular size)',
			public: true,
		},

		'smallerMonospaceFontSize': {
			section: 'remoodsThemeSection',
			label: 'Markdown Editor - Enable smaller font size for non-essential contents',
			type: SettingItemType.Bool,
			value: false,
			description: 'Set smaller font size for anchor link path, image link, and footnote reference number. (2px smaller than regular size)',
			public: true,
		},

		'evidentHorizontalLine': {
			section: 'remoodsThemeSection',
			label: 'Markdown Editor - Enable evident horizontal line',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},
		
		'headingRef': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable heading reference in front of headings',
			type: SettingItemType.Bool,
			value: false,
			public: true,
		},
		
		'h1Border': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable H1 border',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},
		
		'h2Border': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable H2 border',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},
		
		'h3Border': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable H3 border',
			type: SettingItemType.Bool,
			value: false,
			public: true,
		},
		
		'h4Border': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable H4 border',
			type: SettingItemType.Bool,
			value: false,
			public: true,
		},
		
		'h5Border': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable H5 border',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},
		
		'h6Border': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable H6 border',
			type: SettingItemType.Bool,
			value: false,
			public: true,
		},

		'h1TwillPattern': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable twill pattern for H1 heading',
			type: SettingItemType.Bool,
			value: false,
			description: 'If enabled, you would need to use the HTML span tag for emoji to avoid the twill pattern affecting it.',
			public: true,
		},

		'paragraphJustify': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable "Justify" effect for paragraph text',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},

		'dottedBlockquote': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable dotted styles for blockquote',
			type: SettingItemType.Bool,
			value: true,
			description: 'Enable: dotted border (better for single layer blockquote) | Disable: solid border (better for nested blockquote).',
			public: true,
		},

		'dottedCodeBlock': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable dotted styles for code block',
			type: SettingItemType.Bool,
			value: true,
			description: 'Enable: dotted border | Disable: solid border',
			public: true,
		},

		'katexTextAlignLeft': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Align the math notation to the left',
			type: SettingItemType.Bool,
			value: false,
			public: true,
		},
		
		'mermaidEyeProtector': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable Eye-Protector effect for mermaid charts',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},
		
		'imageEyeProtector': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable Eye-Protector effect for images',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},
		
		'codeBlockMaxHeight': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable max height limit for code block',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},
		
		'artGalleryMaxHeight': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable max height limit for art gallery',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},
		
		'addRemoveSymbol': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable the symbol in front of insert text and strikethrough text',
			type: SettingItemType.Bool,
			value: false,
			public: true,
		},
		
		'inlineCodeSymbol': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable the symbol in front of inline code',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},
		
		'customTitleBlockSymbol': {
			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable the symbol in front of the custom title block\'s title',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},
		
		'notebookNotelistPanelScrollbar': {
			section: 'remoodsThemeSection',
			label: 'Notebook Panel & Notelist Panel - Enable bolder scrollbar',
			type: SettingItemType.Bool,
			value: false,
			description: 'Enable: 8px(hover) | Disable: 3px(hover)',
			public: true,
		},

		'notebookTitleWrap': {
			section: 'remoodsThemeSection',
			label: 'Notebook Panel - Enable notebook title text wrapping',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},
		
		'notebookTitleScrollbar': {
			section: 'remoodsThemeSection',
			label: 'Notebook Panel - Enable showing the horizontal scrollbar for the notebook title',
			type: SettingItemType.Bool,
			value: true,
			description: 'If turn off, you can still use `shift + scroll` for scrolling.',
			public: true,
		},

		'notebookFolderIcon': {
			section: 'remoodsThemeSection',
			label: 'Notebook Panel - Enable folder icon',
			type: SettingItemType.Bool,
			value: true,
			description: 'Enable: Show | Disable: Hide | (Joplin v2.9.12+)',
			public: true,
		},

		'printBaseFont': {
			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Base font(INVALID)',
			type: SettingItemType.String,
			value: '"montserrat", "chiron hei hk extralight"',
			description: 'The non-monospace font for print & export PDF.',
			public: false,
		},

		'printMonospaceFont': {
			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Monospace font(INVALID)',
			type: SettingItemType.String,
			value: '"Cascadia Mono Light", "chiron hei hk text extralight"',
			description: 'The monospace font for print & export PDF.',
			public: false,
		},

		'printBaseFontSize': {
			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Base font size(INVALID)',
			type: SettingItemType.Int,
			value: 12,
			description: 'The font size of "non-monospace" font for print & export PDF. (in "px")',
			public: false,
		},

		'printSmallerCodeBlockFontSize': {
			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Enable smaller font size for code block',
			type: SettingItemType.Bool,
			value: true,
			description: '2px smaller than the regular Print & Export PDF font size.',
			public: true,
		},

		'printNoteTitle': {
			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display note title',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},

		'printHeadingRef': {
			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display heading reference in front of headings',
			type: SettingItemType.Bool,
			value: false,
			public: true,
		},

		'printH1Border': {
			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display H1 border',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},

		'printTOC': {
			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display table of contents (If the syntax `[[toc]]` is used in the notes)',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},

		'printStickyNotes': {
			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display "Sticky Notes"',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},

		'printKeyMention': {
			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display "Key Mention"',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},

		'printSnKm': {
			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display "Key Mention" which is inside the Sticky Notes.',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},

		'printSpoilerInlineText': {
			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display the text of Spoiler Inline',
			type: SettingItemType.Bool,
			value: true,
			public: true,
		},

	});
}



async function writeUserCSS(): Promise<void> {

	const fs = joplin.require('fs-extra');
	
	const remoodsHue = await joplin.settings.value('remoodsHue');
	const baseFont = await joplin.settings.value('baseFont');
	const monospaceFont = await joplin.settings.value('monospaceFont');
	const baseFontSize = await joplin.settings.value('baseFontSize');
	const darkerEditorBackground = await joplin.settings.value('darkerEditorBackground');
	const h1TextTransform = await joplin.settings.value('h1TextTransform');
	const h1FontVariant = await joplin.settings.value('h1FontVariant');
	const emphasizeAddRemove = await joplin.settings.value('emphasizeAddRemove');
	const emphasizeAddRemoveBg = await joplin.settings.value('emphasizeAddRemoveBg');
	const listTextColor = await joplin.settings.value('listTextColor');
	const smallerCodeBlockFontSize = await joplin.settings.value('smallerCodeBlockFontSize');
	
	const smallerMonospaceFontSize = await joplin.settings.value('smallerMonospaceFontSize');
	const smallerMarkdownTableFontSize = await joplin.settings.value('smallerMarkdownTableFontSize');
	const evidentHorizontalLine = await joplin.settings.value('evidentHorizontalLine');
	
	const headingRef = await joplin.settings.value('headingRef');
	const h1Border = await joplin.settings.value('h1Border');
	const h2Border = await joplin.settings.value('h2Border');
	const h3Border = await joplin.settings.value('h3Border');
	const h4Border = await joplin.settings.value('h4Border');
	const h5Border = await joplin.settings.value('h5Border');
	const h6Border = await joplin.settings.value('h6Border');
	const h1TwillPattern = await joplin.settings.value('h1TwillPattern');
	const paragraphJustify = await joplin.settings.value('paragraphJustify');
	const dottedBlockquote = await joplin.settings.value('dottedBlockquote');
	const dottedCodeBlock = await joplin.settings.value('dottedCodeBlock');
	const katexTextAlignLeft = await joplin.settings.value('katexTextAlignLeft');
	const mermaidEyeProtector = await joplin.settings.value('mermaidEyeProtector');
	const imageEyeProtector = await joplin.settings.value('imageEyeProtector');
	const codeBlockMaxHeight = await joplin.settings.value('codeBlockMaxHeight');
	const artGalleryMaxHeight = await joplin.settings.value('artGalleryMaxHeight');
	const addRemoveSymbol = await joplin.settings.value('addRemoveSymbol');
	const inlineCodeSymbol = await joplin.settings.value('inlineCodeSymbol');
	const customTitleBlockSymbol = await joplin.settings.value('customTitleBlockSymbol');
	
	const notebookNotelistPanelScrollbar = await joplin.settings.value('notebookNotelistPanelScrollbar');
	const notebookTitleWrap = await joplin.settings.value('notebookTitleWrap');
	const notebookTitleScrollbar = await joplin.settings.value('notebookTitleScrollbar');
	const notebookFolderIcon = await joplin.settings.value('notebookFolderIcon');
	
	const printBaseFont = await joplin.settings.value('printBaseFont');
	const printMonospaceFont = await joplin.settings.value('printMonospaceFont');
	const printBaseFontSize = await joplin.settings.value('printBaseFontSize');
	const printSmallerCodeBlockFontSize = await joplin.settings.value('printSmallerCodeBlockFontSize');
	const printNoteTitle = await joplin.settings.value('printNoteTitle');
	const printHeadingRef = await joplin.settings.value('printHeadingRef');
	const printH1Border = await joplin.settings.value('printH1Border');
	const printTOC = await joplin.settings.value('printTOC');
	const printStickyNotes = await joplin.settings.value('printStickyNotes');
	const printKeyMention = await joplin.settings.value('printKeyMention');
	const printSnKm = await joplin.settings.value('printSnKm');
	const printSpoilerInlineText = await joplin.settings.value('printSpoilerInlineText');

	const settings = {
		remoodsHue,
		baseFont,
		monospaceFont,
		baseFontSize,
		darkerEditorBackground,
		h1TextTransform,
		h1FontVariant,
		emphasizeAddRemove,
		emphasizeAddRemoveBg,
		listTextColor,
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
		printBaseFontSize,
		printSmallerCodeBlockFontSize,
		printNoteTitle,
		printHeadingRef,
		printH1Border,
		printTOC,
		printStickyNotes,
		printKeyMention,
		printSnKm,
		printSpoilerInlineText,
	};

	await generateUserCSS(settings);

}
