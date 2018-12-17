/**
 * Mapping of Auto-WCAG rules to Axe-Core rules
 * This defines which rules to run on each test case
 *
 * `Keys` are ruleId(s) from Auto-WCAG
 * `Values` are an array of rule id(s) from Axe-Core
 */
const rulesMap = {
  'SC1-1-1-image-has-name': ['image-alt'],
  'SC1-2-1-media-alternative-audio': ['video-caption', 'video-description'],
  'SC1-2-1-media-alternative-video': ['video-caption', 'video-description'],
  'SC1-2-2-audio-captions': ['audio-caption'],
  'SC1-2-2-video-has-audio-alternative': ['video-caption', 'video-description'],
  'SC1-2-2-video-has-captions': ['video-caption'],
  'SC1-2-video-audio-description': ['video-caption', 'video-description'],
  'SC1-2-video-description-track': ['video-description'],
  'SC1-2-video-transcript': ['video-caption', 'video-description'],
  'SC1-3-5-autocomplete-valid': ['autocomplete-valid'],
  'SC2-1-2-no-keyboard-trap-non-standard-navigation': [],
  'SC2-1-2-no-keyboard-trap-standard-navigation': [],
  'SC2-1-2-no-keyboard-trap': [],
  // 'SC2-2-1+SC2-2-4-meta-refresh': ['meta-refresh'], // TODO: go through test cases to handle
  'SC2-4-2-page-has-title': ['document-title'],
  'SC2-4-4-link-has-name': ['link-name'],
  'SC2-4-6-descriptive-headings': [],
  'SC2-4-6-descriptive-labels': [],
  'SC2-5-3-label-content-name-mismatch': [],
  'SC3-1-1-html-has-lang': ['html-has-lang'],
  'SC3-1-1-html-lang-valid': ['html-lang-valid'],
  'SC3-1-1-html-xml-lang-match': ['html-xml-lang-mismatch'],
  'SC3-1-2-lang-valid': ['valid-lang'],
  'SC3-3-2+SC4-1-2-form-field-has-name': ['label'],
  'SC4-1-1-unique-attrs': [],
  'SC4-1-1-unique-id': [
    'duplicate-id',
    'duplicate-id-active',
    'duplicate-id-aria'
  ],
  'SC4-1-1+SC4-1-2-aria-allowed-attribute': ['aria-allowed-attr'],
  'SC4-1-2-aria-attr-valid': ['aria-valid-attr'],
  'SC4-1-2-aria-hidden-focus': [],
  'SC4-1-2-aria-state-or-property-has-valid-value': ['aria-valid-attr-value'],
  'SC4-1-2-button-has-name': ['button-name'],
  'SC4-1-2-iframe-has-name': ['frame-title'],
  'SC4-1-2-role-attribute-has-valid-value': ['aria-roles'],
  'SC4-1-2-role-has-required-states-and-properties': ['aria-required-attr']
}

// export
module.exports = {
  rulesMap
}
