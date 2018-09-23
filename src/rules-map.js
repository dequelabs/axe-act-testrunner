/**
 * Mapping of Auto-WCAG rules to Axe-Core rules
 * This defines which rules to run on each test case
 *
 * `Keys` are ruleId(s) from Auto-WCAG
 * `Values` are an array of rule id(s) from Axe-Core
 */
const rulesMap = {
  'SC1-1-1-image-has-name': ['image-alt'],
  'SC1-2-2-audio-captions': ['audio-caption'],
  'SC1-2-Video-description-track': ['video-description'],
  'SC2-4-2-page-has-title': ['document-title'],
  'SC2-4-4-link-has-name': ['link-name'],
  'SC3-1-1-html-has-lang': ['html-has-lang'],
  'SC3-1-1-html-lang-valid': ['html-lang-valid'],
  'SC3-1-1-html-xml-lang-match': ['html-xml-lang-mismatch'],
  'SC3-1-2-lang-valid': ['valid-lang'],
  'SC3-3-2-form-field-has-name': ['label'],
  'SC4-1-1-unique-id': [
    'duplicate-id',
    'duplicate-id-active',
    'duplicate-id-aria'
  ],
  'SC4-1-2-button-has-name': ['button-name'],
  'SC1-3-5-autocomplete-valid': ['autocomplete-valid'],
  'SC2-2-1+SC3-2-5-meta-refresh': ['meta-refresh']
}

// export
module.exports = {
  rulesMap
}
