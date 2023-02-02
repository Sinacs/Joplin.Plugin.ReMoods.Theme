import joplin from 'api';
import { ChangeEvent } from 'api/JoplinSettings';
import { SettingItemType } from 'api/types';
import { generateUserCSS } from './generateUserCSS';

export type ThemeSettings = {

	// Markdown Editor & Render Viewer ==============
	remoodsHue: string;
	themeMode: string;
	baseFont: string;
	monospaceFont: string;
  headingFont: string;
	baseFontSize: number;
	monospaceFontSize: number;
	h1FontSize: number;
	h2FontSize: number;
	h3FontSize: number;
	h4FontSize: number;
	h5FontSize: number;
	h6FontSize: number;
	darkerEditorBackground: boolean;
	h1TextTransform: boolean;
	h1FontVariant: boolean;
	emphasizeAddRemove: boolean,
	emphasizeAddRemoveBg: boolean;
	themeColorListText: boolean;
	smallerCodeBlockText: boolean;
	
  // Markdown Editor ==============================
	smallerMarkdownTableSyntax: number;
	smallerMonospaceText: number;
	evidentHorizontalRule: boolean;
	
	// Render Viewer ================================
	headingRef: boolean;
	h1Border: boolean;
	h2Border: boolean;
	h3Border: boolean;
	h4Border: boolean;
	h5Border: boolean;
	h6Border: boolean;
	h1TwillPattern: boolean;
	hrTwillPattern: boolean;
	paragraphTextJustify: boolean;
	listTextJustify: boolean;
	checklistTextJustify: boolean;
	snTextJustify: boolean;
	dottedBlockquote: boolean;
	dottedCodeBlock: boolean;
	mathNotationFontSize: number; 
	mathNotationAlignLeft: boolean;
	mermaidEyeProtector: boolean;
	imageEyeProtector: boolean;
	codeBlockMaxHeight: boolean;
	artGalleryMaxHeight: boolean;
	addRemoveSymbol: boolean;
	inlineCodeSymbol: boolean;
	customTitleBlockSymbol: boolean;

	// Joplin UI ====================================
	panelsScrollbar: boolean;
	notebookTitleWrap: boolean;
	notebookTitleScrollbar: boolean;
	notebookFolderIcon: boolean;
	allNotesButton: boolean;
	syncFeature: boolean;
	tagFeature: boolean;
	noteListItemAutoScroll: boolean;

	
	// ADVANCED *************************************
	// PRINT ========================================
	printBaseFont: string;
	printMonospaceFont: string;
	printHeadingFont: string;
	printBaseFontSize: number;
	printMonospaceFontSize: number;
	printH1FontSize: number;
	printH2FontSize: number;
	printH3FontSize: number;
	printH4FontSize: number;
	printH5FontSize: number;
	printH6FontSize: number;
	printSmallerCodeBlockText: boolean;
	printNoteTitle: boolean;
	printHeadingRef: boolean;
	printH1Border: boolean;
	printTOC: boolean;
	printStickyNotes: boolean;
	printKeyMention: boolean;
	printSnKm: boolean;
	printSpoilerInlineText: boolean;
	printLinkHref: boolean;
	printAbbrDescription: boolean;
	
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
		----- 2: The original font settings in the "Tools > Options > Appearance" will no longer work when running ReMoods Theme.
		----- 3: The default font family will only work if you have already installed them on your computer.
		----- 4: The advanced settings section at the bottom holds all of the "Print & Export PDF" settings.
		----- 5: All below settings are affecting different parts of your Joplin, please note the beginning of them. (Render Viewer also includes the Rich Text Editor)
		----- 6: Properties marked with (*) at the beginning stood for it also affects "Print & Export PDF".
		`

	});

	await joplin.settings.registerSettings({
		
		'remoodsHue': {

			section: 'remoodsThemeSection',
			label: 'ReMoods Hue',
			type: SettingItemType.String,
			value: '170deg',
			isEnum: true,
			options: {
				'350deg': 'Red -',
				'0deg':   'Red 0',
				'10deg':  'Red +',
				'20deg':  'Orange -',
				'30deg':  'Orange 30',
				'40deg':  'Orange +',
				'50deg':  'Yellow -',
				'60deg':  'Yellow 60',
				'70deg':  'Yellow +',
				'80deg':  'Yellow-Green -',
				'90deg':  'Yellow-Green 90',
				'100deg': 'Yellow-Green +',
				'110deg': 'Green -',
				'120deg': 'Green 120',
				'130deg': 'Green +',
				'140deg': 'Green-Cyan -',
				'150deg': 'Green-Cyan 150',
				'160deg': 'Green-Cyan +',
				'170deg': 'Cyan -',
				'180deg': 'Cyan 180',
				'190deg': 'Cyan +',
				'200deg': 'Cyan-Blue -',
				'210deg': 'Cyan-Blue 210',
				'220deg': 'Cyan-Blue +',
				'230deg': 'Blue -',
				'240deg': 'Blue 240',
				'250deg': 'Blue +',
				'260deg': 'Blue-Magenta -',
				'270deg': 'Blue-Magenta 270',
				'280deg': 'Blue-Magenta +',
				'290deg': 'Magenta -',
				'300deg': 'Magenta 300',
				'310deg': 'Magenta +',
				'320deg': 'Magenta-Red -',
				'330deg': 'Magenta-Red 330',
				'340deg': 'Magenta-Red +',
			},
			description: 'Set color hue for the theme. (10-degrees difference for each)',
			public: true,

		},
		
		'themeMode': {

			section: 'remoodsThemeSection',
			label: 'Theme Mode',
			type: SettingItemType.String,
			value: 'duskMode',
			isEnum: true,
			options: {
				'dayMode': 'Day Mode (EXPERIMENTAL)',
				'duskMode': 'Dusk Mode',
				'nightMode': 'Night Mode'
			},
			description: 'It required to go to `Options > Appearance > Theme` and change the Joplin built-in theme matching with the theme modes. | Day Mode > light theme. | Dusk Mode & Night Mode > Dark theme.',
			public: true,

		},

		'baseFont': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - Base Font',
			type: SettingItemType.String,
			value: 'Default',
			description: 'Default: "mulish", "montserrat", "chiron hei hk extralight" | Please add quotation mark for each font\'s name and add comma for separating multiple fonts.',
			public: true,

		},

		'monospaceFont': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - Monospace Font',
			type: SettingItemType.String,
			value: 'Default',
			description: 'Default: "cascadia mono light", "chiron hei hk extralight" | Please add quotation mark for each font\'s name and add comma for separating multiple fonts.',
			public: true,

		},
    
		'headingFont': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - Heading Font',
			type: SettingItemType.String,
			value: 'Default',
			description: 'Default: "montserrat", "mulish", "chiron hei hk" | Please add quotation mark for each font\'s name and add comma for separating multiple fonts.',
			public: true,

		},

		'baseFontSize': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - Base Font Size (px)',
			type: SettingItemType.Int,
			value: 15,
			public: true,

		},

		'monospaceFontSize': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - Monospace Font Size (px)',
			type: SettingItemType.Int,
			value: 14,
			public: true,

		},

		'h1FontSize': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - H1 Font Size ("%" of "Base Font Size")',
			type: SettingItemType.Int,
			value: 170,
			public: true,

		},

		'h2FontSize': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - H2 Font Size ("%" of "Base Font Size")',
			type: SettingItemType.Int,
			value: 140,
			public: true,

		},

		'h3FontSize': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - H3 Font Size ("%" of "Base Font Size")',
			type: SettingItemType.Int,
			value: 130,
			public: true,

		},

		'h4FontSize': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - H4 Font Size ("%" of "Base Font Size")',
			type: SettingItemType.Int,
			value: 120,
			public: true,

		},

		'h5FontSize': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - H5 Font Size ("%" of "Base Font Size")',
			type: SettingItemType.Int,
			value: 110,
			public: true,

		},

		'h6FontSize': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - H6 Font Size ("%" of "Base Font Size")',
			type: SettingItemType.Int,
			value: 100,
			public: true,

		},

		'darkerEditorBackground': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - Enable darker background color (Dusk Mode Only)',
			type: SettingItemType.Bool,
			value: false,
			public: true,

		},

		'h1TextTransform': {

			section: 'remoodsThemeSection',
			label: '* Markdown Editor & Render Viewer - Enable capitalize the first letter of each word on H1 heading',
			type: SettingItemType.Bool,
			value: true,
			public: true,

		},
		
		'h1FontVariant': {

			section: 'remoodsThemeSection',
			label: '* Markdown Editor & Render Viewer - Enable small-caps effect on H1 heading',
			type: SettingItemType.Bool,
			value: true,
			public: true,

		},

		'emphasizeAddRemove': {

			section: 'remoodsThemeSection',
			label: '* Markdown Editor & Render Viewer - Enable emphasize colors for insert text & strikethrough text',
			type: SettingItemType.Bool,
			value: false,
			description: 'Enable: Insert text -> green, strikethrough text -> red, and it would not change with the theme color. | Disable: Follow the theme color.',
			public: true,

		},
		
		'emphasizeAddRemoveBg': {

			section: 'remoodsThemeSection',
			label: '* Markdown Editor & Render Viewer - Enable background color for insert text & strikethrough text',
			type: SettingItemType.Bool,
			value: false,
			description: 'The background color depends on its text color.',
			public: true,

		},

		'themeColorListText': {

			section: 'remoodsThemeSection',
			label: '* Markdown Editor & Render Viewer - Enable theme color for list text',
			type: SettingItemType.Bool,
			value: true,
			description: 'Enable: List text -> theme color, footnote marker -> complementary color. | Disable: List text -> paragraph text color, footnote marker -> theme color.',
			public: true,

		},

		'smallerCodeBlockText': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor & Render Viewer - Enable smaller font size for code block text',
			type: SettingItemType.Bool,
			value: false,
			description: '(2px smaller than the "Monospace Font Size")',
			public: true,

		},

		'smallerMarkdownTableSyntax': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor - Enable smaller font size for markdown table syntax',
			type: SettingItemType.Bool,
			value: false,
			description: '(2px smaller than the "Monospace Font Size")',
			public: true,

		},

		'smallerMonospaceText': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor - Enable smaller font size for non-essential contents',
			type: SettingItemType.Bool,
			value: true,
			description: 'Applied to anchor link path, image link, and footnote marker. (2px smaller than the "Monospace Font Size")',
			public: true,

		},

		'evidentHorizontalRule': {

			section: 'remoodsThemeSection',
			label: 'Markdown Editor - Enable evident horizontal rule',
			type: SettingItemType.Bool,
			value: true,
			description: 'It will add a long line in front of the horizontal rule syntax `---` or `***`, It gives you better visual separation in the markdown editor.',
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
			label: '* Render Viewer - Enable H1 border',
			type: SettingItemType.Bool,
			value: true,
			public: true,

		},
		
		'h2Border': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Enable H2 border',
			type: SettingItemType.Bool,
			value: true,
			public: true,

		},
		
		'h3Border': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Enable H3 border',
			type: SettingItemType.Bool,
			value: false,
			public: true,

		},
		
		'h4Border': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Enable H4 border',
			type: SettingItemType.Bool,
			value: false,
			public: true,

		},
		
		'h5Border': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Enable H5 border',
			type: SettingItemType.Bool,
			value: true,
			public: true,

		},
		
		'h6Border': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Enable H6 border',
			type: SettingItemType.Bool,
			value: false,
			public: true,

		},

		'h1TwillPattern': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Enable twill pattern for H1 heading',
			type: SettingItemType.Bool,
			value: false,
			description: 'If enabled, you would need to use the HTML span tag for emoji to avoid the twill pattern affecting it.',
			public: true,

		},

		'hrTwillPattern': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Enable twill pattern for horizontal line',
			type: SettingItemType.Bool,
			value: true,
			description: 'Enable: Twill pattern | Disable: Solid',
			public: true,

		},

		'paragraphTextJustify': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Enable "Justify" effect for paragraph text',
			type: SettingItemType.Bool,
			value: false,
			description: 'Applied to all paragraph text, but not including list, checklist, footnote list and sticky notes.',
			public: true,

		},

		'listTextJustify': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Enable "Justify" effect for list text',
			type: SettingItemType.Bool,
			value: false,
			description: 'Applied to unordered list, ordered list, and footnote list.',
			public: true,

		},

		'checklistTextJustify': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Enable "Justify" effect for checklist',
			type: SettingItemType.Bool,
			value: false,
			description: 'Applied to checklist.',
			public: true,

		},

		'snTextJustify': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Enable "Justify" effect for Stick Notes text',
			type: SettingItemType.Bool,
			value: false,
			description: 'Applied to sticky notes.',
			public: true,

		},

		'dottedBlockquote': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Enable dotted styles for blockquote',
			type: SettingItemType.Bool,
			value: true,
			description: 'Enable: dotted border (better for single layer blockquote) | Disable: solid border (better for nested blockquote).',
			public: true,

		},

		'dottedCodeBlock': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Enable dotted styles for code block',
			type: SettingItemType.Bool,
			value: true,
			description: 'Enable: dotted border | Disable: solid border',
			public: true,

		},

		'mathNotationFontSize': {

			section: 'remoodsThemeSection',
			label: 'Render Viewer - Math Notation Font Size (px)',
			type: SettingItemType.Int,
			value: 0,
			description: '0: Equal to Base Font Size.',
			public: true,

		},

		'mathNotationAlignLeft': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Align the math notation to the left',
			type: SettingItemType.Bool,
			value: false,
			public: true,

		},
		
		'mermaidEyeProtector': {

			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable Eye-Protector effect for mermaid charts (Dusk Mode & Night Mode Only)',
			type: SettingItemType.Bool,
			value: true,
			public: true,

		},
		
		'imageEyeProtector': {

			section: 'remoodsThemeSection',
			label: 'Render Viewer - Enable Eye-Protector effect for images (Dusk Mode & Night Mode Only)',
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
			label: '* Render Viewer - Enable the `++` & `--` symbols in front of the insert text and strikethrough text',
			type: SettingItemType.Bool,
			value: false,
			public: true,

		},
		
		'inlineCodeSymbol': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Enable the `>|` symbol in front of inline code',
			type: SettingItemType.Bool,
			value: true,
			public: true,

		},
		
		'customTitleBlockSymbol': {

			section: 'remoodsThemeSection',
			label: '* Render Viewer - Enable the symbol in front of the custom title block\'s title',
			type: SettingItemType.Bool,
			value: true,
			public: true,

		},
		
		'panelsScrollbar': {

			section: 'remoodsThemeSection',
			label: 'Notebook Panel & Notelist Panel - Enable bolder scrollbar',
			type: SettingItemType.Bool,
			value: false,
			description: 'Enable: 7px(hover) | Disable: 3px(hover)',
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
			description: 'If disabled, you can still use `shift + scroll` for scrolling.',
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

		'allNotesButton': {

			section: 'remoodsThemeSection',
			label: 'Notebook Panel - Enable "All Notes" Button',
			type: SettingItemType.Bool,
			value: true,
			description: 'Enable: Show | Disable: Hide',
			public: true,

		},

		'syncFeature': {

			section: 'remoodsThemeSection',
			label: 'Notebook Panel - Enable sync feature panel.',
			type: SettingItemType.Bool,
			value: true,
			description: 'Enable: Show | Disable: Hide | It will affect to the Sync information and button.',
			public: true,

		},

		'tagFeature': {

			section: 'remoodsThemeSection',
			label: 'Notebook Panel & Editor Panel - Enable tag feature panel.',
			type: SettingItemType.Bool,
			value: true,
			description: 'Enable: Show | Disable: Hide | It will affect to the tag list(Notebook Panel) and tag bar(Editor Panel).',
			public: true,

		},

		'noteListItemAutoScroll': {

			section: 'remoodsThemeSection',
			label: 'Note List Panel - Enable auto-scroll effect for note list item.',
			type: SettingItemType.Bool,
			value: true,
			description: 'Enable: mouse hover auto-scroll | Disable: no action',
			public: true,

		},

		'printBaseFont': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Print Base Font',
			type: SettingItemType.String,
			value: 'Default',
			description: 'Default: Equal to "Base Font". | Please add quotation mark for each font\'s name and add comma for separating multiple fonts.',
			public: true,
			advanced: true,

		},

		'printMonospaceFont': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Print Monospace Font',
			type: SettingItemType.String,
			value: 'Default',
			description: 'Default: Equal to "Monospace Font". | Please add quotation mark for each font\'s name and add comma for separating multiple fonts.',
			public: true,
			advanced: true,

		},
    
		'printHeadingFont': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Print Heading Font',
			type: SettingItemType.String,
			value: 'Default',
			description: 'Default: Equal to "Heading Font". | Please add quotation mark for each font\'s name and add comma for separating multiple fonts.',
			public: true,
			advanced: true,
			
		},

		'printBaseFontSize': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Print Base Font Size (px)',
			type: SettingItemType.Int,
			value: '13',
			public: true,
			advanced: true,

		},

		'printMonospaceFontSize': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Print Monospace Font Size (px)',
			type: SettingItemType.Int,
			value: '12',
			public: true,
			advanced: true,

		},

		'printH1FontSize': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Print H1 Font Size ("%" of "Print Base Font Size")',
			type: SettingItemType.Int,
			value: 180,
			public: true,
			advanced: true,

		},

		'printH2FontSize': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Print H2 Font Size ("%" of "Print Base Font Size")',
			type: SettingItemType.Int,
			value: 160,
			public: true,
			advanced: true,

		},

		'printH3FontSize': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Print H3 Font Size ("%" of "Print Base Font Size")',
			type: SettingItemType.Int,
			value: 140,
			public: true,
			advanced: true,

		},

		'printH4FontSize': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Print H4 Font Size ("%" of "Print Base Font Size")',
			type: SettingItemType.Int,
			value: 130,
			public: true,
			advanced: true,

		},

		'printH5FontSize': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Print H5 Font Size ("%" of "Print Base Font Size")',
			type: SettingItemType.Int,
			value: 120,
			public: true,
			advanced: true,

		},

		'printH6FontSize': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Print H6 Font Size ("%" of "Print Base Font Size")',
			type: SettingItemType.Int,
			value: 110,
			public: true,
			advanced: true,

		},

		'printSmallerCodeBlockText': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Enable smaller font size for code block',
			type: SettingItemType.Bool,
			value: true,
			description: '(2px smaller than the the "Print Monospace Font Size")',
			public: true,
			advanced: true,

		},

		'printNoteTitle': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display note title',
			type: SettingItemType.Bool,
			value: true,
			public: true,
			advanced: true,

		},

		'printHeadingRef': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display heading reference in front of headings',
			type: SettingItemType.Bool,
			value: false,
			public: true,
			advanced: true,

		},

		'printH1Border': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display H1 border',
			type: SettingItemType.Bool,
			value: true,
			public: true,
			advanced: true,

		},

		'printTOC': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display table of contents (If the syntax `[[toc]]` has used in the notes)',
			type: SettingItemType.Bool,
			value: true,
			public: true,
			advanced: true,

		},

		'printStickyNotes': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display "Sticky Notes"',
			type: SettingItemType.Bool,
			value: true,
			public: true,
			advanced: true,

		},

		'printKeyMention': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display "Key Mention"',
			type: SettingItemType.Bool,
			value: true,
			public: true,
			advanced: true,

		},

		'printSnKm': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display "Key Mention" which is inside the Sticky Notes.',
			type: SettingItemType.Bool,
			value: true,
			public: true,
			advanced: true,

		},

		'printSpoilerInlineText': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display the text of Spoiler Inline.',
			type: SettingItemType.Bool,
			value: true,
			public: true,
			advanced: true,

		},

		'printLinkHref': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display link href',
			type: SettingItemType.Bool,
			value: true,
			description: 'Enable: Showing next to the link but only works when you create the link with a title. e.g. [Joplin](https://www.joplinapp.org "Joplin") | Disable: Hide |',
			public: true,
			advanced: true,

		},

		'printAbbrDescription': {

			section: 'remoodsThemeSection',
			label: 'Print & Export PDF - Display abbreviation description',
			type: SettingItemType.Bool,
			value: true,
			description: 'Enable: Showing next to the abbreviation. | Disable: Hide |',
			public: true,
			advanced: true,

		},

	});

}



async function writeUserCSS(): Promise<void> {

	const fs = joplin.require('fs-extra');
	
	const remoodsHue = await joplin.settings.value('remoodsHue');
	const themeMode = await joplin.settings.value('themeMode');
	const baseFont = await joplin.settings.value('baseFont');
	const monospaceFont = await joplin.settings.value('monospaceFont');
	const headingFont = await joplin.settings.value('headingFont');
	const baseFontSize = await joplin.settings.value('baseFontSize');
	const monospaceFontSize = await joplin.settings.value('monospaceFontSize');
	const h1FontSize = await joplin.settings.value('h1FontSize');
	const h2FontSize = await joplin.settings.value('h2FontSize');
	const h3FontSize = await joplin.settings.value('h3FontSize');
	const h4FontSize = await joplin.settings.value('h4FontSize');
	const h5FontSize = await joplin.settings.value('h5FontSize');
	const h6FontSize = await joplin.settings.value('h6FontSize');
	const darkerEditorBackground = await joplin.settings.value('darkerEditorBackground');
	const h1TextTransform = await joplin.settings.value('h1TextTransform');
	const h1FontVariant = await joplin.settings.value('h1FontVariant');
	const emphasizeAddRemove = await joplin.settings.value('emphasizeAddRemove');
	const emphasizeAddRemoveBg = await joplin.settings.value('emphasizeAddRemoveBg');
	const themeColorListText = await joplin.settings.value('themeColorListText');
	const smallerCodeBlockText = await joplin.settings.value('smallerCodeBlockText');
	
	const smallerMonospaceText = await joplin.settings.value('smallerMonospaceText');
	const smallerMarkdownTableSyntax = await joplin.settings.value('smallerMarkdownTableSyntax');
	const evidentHorizontalRule = await joplin.settings.value('evidentHorizontalRule');
	
	const headingRef = await joplin.settings.value('headingRef');
	const h1Border = await joplin.settings.value('h1Border');
	const h2Border = await joplin.settings.value('h2Border');
	const h3Border = await joplin.settings.value('h3Border');
	const h4Border = await joplin.settings.value('h4Border');
	const h5Border = await joplin.settings.value('h5Border');
	const h6Border = await joplin.settings.value('h6Border');
	const h1TwillPattern = await joplin.settings.value('h1TwillPattern');
	const hrTwillPattern = await joplin.settings.value('hrTwillPattern');
	const paragraphTextJustify = await joplin.settings.value('paragraphTextJustify');
	const listTextJustify = await joplin.settings.value('listTextJustify');
	const checklistTextJustify = await joplin.settings.value('checklistTextJustify');
	const snTextJustify = await joplin.settings.value('snTextJustify');
	const dottedBlockquote = await joplin.settings.value('dottedBlockquote');
	const dottedCodeBlock = await joplin.settings.value('dottedCodeBlock');
	const mathNotationFontSize = await joplin.settings.value('mathNotationFontSize');
	const mathNotationAlignLeft = await joplin.settings.value('mathNotationAlignLeft');
	const mermaidEyeProtector = await joplin.settings.value('mermaidEyeProtector');
	const imageEyeProtector = await joplin.settings.value('imageEyeProtector');
	const codeBlockMaxHeight = await joplin.settings.value('codeBlockMaxHeight');
	const artGalleryMaxHeight = await joplin.settings.value('artGalleryMaxHeight');
	const addRemoveSymbol = await joplin.settings.value('addRemoveSymbol');
	const inlineCodeSymbol = await joplin.settings.value('inlineCodeSymbol');
	const customTitleBlockSymbol = await joplin.settings.value('customTitleBlockSymbol');
	
	const panelsScrollbar = await joplin.settings.value('panelsScrollbar');
	const notebookTitleWrap = await joplin.settings.value('notebookTitleWrap');
	const notebookTitleScrollbar = await joplin.settings.value('notebookTitleScrollbar');
	const notebookFolderIcon = await joplin.settings.value('notebookFolderIcon');
	const allNotesButton = await joplin.settings.value('allNotesButton');
	const syncFeature = await joplin.settings.value('syncFeature');
	const tagFeature = await joplin.settings.value('tagFeature');
	const noteListItemAutoScroll = await joplin.settings.value('noteListItemAutoScroll');
	
	const printBaseFont = await joplin.settings.value('printBaseFont');
	const printMonospaceFont = await joplin.settings.value('printMonospaceFont');
	const printHeadingFont = await joplin.settings.value('printHeadingFont');
	const printBaseFontSize = await joplin.settings.value('printBaseFontSize');
	const printMonospaceFontSize = await joplin.settings.value('printMonospaceFontSize');
	const printH1FontSize = await joplin.settings.value('printH1FontSize');
	const printH2FontSize = await joplin.settings.value('printH2FontSize');
	const printH3FontSize = await joplin.settings.value('printH3FontSize');
	const printH4FontSize = await joplin.settings.value('printH4FontSize');
	const printH5FontSize = await joplin.settings.value('printH5FontSize');
	const printH6FontSize = await joplin.settings.value('printH6FontSize');
	const printSmallerCodeBlockText = await joplin.settings.value('printSmallerCodeBlockText');
	const printNoteTitle = await joplin.settings.value('printNoteTitle');
	const printHeadingRef = await joplin.settings.value('printHeadingRef');
	const printH1Border = await joplin.settings.value('printH1Border');
	const printTOC = await joplin.settings.value('printTOC');
	const printStickyNotes = await joplin.settings.value('printStickyNotes');
	const printKeyMention = await joplin.settings.value('printKeyMention');
	const printSnKm = await joplin.settings.value('printSnKm');
	const printSpoilerInlineText = await joplin.settings.value('printSpoilerInlineText');
	const printLinkHref = await joplin.settings.value('printLinkHref');
	const printAbbrDescription = await joplin.settings.value('printAbbrDescription');
	
	const settings = {
		
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

	};

	await generateUserCSS(settings);

}
