/**
 * Year 1
 */
const rules_year_1 = {
  /**
   * Rule: ARIA ATTRIBUTE IS VALID
   * Web: https://act-rules.github.io/rules/5f99a7
   */
  '5f99a7': ['aria-valid-attr'],
  /**
   * Rule: ARIA STATE OR PROPERTY ALLOWED
   * Web: https://act-rules.github.io/rules/5c01ea
   */
  '5c01ea': ['aria-allowed-attr'],
  /**
   * Rule: ARIA STATE OR PROPERTY HAS VALID VALUE
   * Web: https://act-rules.github.io/rules/6a7281
   */
  '6a7281': ['aria-valid-attr-value'],
  /**
   * Rule: AUTOCOMPLETE VALID
   * Web: https://act-rules.github.io/rules/73f2c2
   */
  '73f2c2': ['autocomplete-valid'],
  /**
   * Rule: BUTTONS HAVE AN ACCESSIBLE NAME
   * Web: https://act-rules.github.io/rules/97a4e1
   */
  '97a4e1': ['button-name'],
  /**
   * Rule: FORM FIELD HAS ACCESSIBLE NAME
   * Web: https://act-rules.github.io/rules/e086e5
   */
  e086e5: ['label'],
  /**
   * Rule: HTML PAGE HAS A TITLE
   * Web: https://act-rules.github.io/rules/2779a5
   */
  '2779a5': ['document-title'],
  /**
   * Rule: HTML HAS LANG ATTRIBUTE
   * Web: https://act-rules.github.io/rules/b5c3f8
   */
  b5c3f8: ['html-has-lang'],
  /**
   * Rule: HTML LANG AND XML:LANG MATCH
   * Web: https://act-rules.github.io/rules/5b7ae0
   */
  '5b7ae0': ['html-xml-lang-mismatch'],
  /**
   * Rule: ID ATTRIBUTE IS UNIQUE
   * Web: https://act-rules.github.io/rules/3ea0c8
   */
  '3ea0c8': ['duplicate-id', 'duplicate-id-active', 'duplicate-id-aria'],
  /**
   * Rule: LINKS HAVE AN ACCESSIBLE NAME
   * Web: https://act-rules.github.io/rules/c487ae
   */
  c487ae: ['link-name'],
  /**
   * Rule: META-REFRESH NO DELAY
   * Web: https://act-rules.github.io/rules/bc659a
   */
  bc659a: ['meta-refresh'],
  /**
   * Rule: ROLE ATTRIBUTE HAS VALID VALUE
   * Web: https://act-rules.github.io/rules/674b10
   */
  '674b10': ['aria-roles'],
  /**
   * Rule: ROLE HAS REQUIRED STATES AND PROPERTIES
   * Web: https://act-rules.github.io/rules/4e8ab6
   */
  '4e8ab6': ['aria-required-attr'],
  /**
   * Rule: VALID BODY LANG ATTRIBUTE
   * Web: https://act-rules.github.io/rules/de46e4
   */
  de46e4: ['valid-lang'],
  /**
   * Rule: VIDEO HAS AUDIO ALTERNATIVE
   * Web: https://act-rules.github.io/rules/eac66b
   */
  eac66b: ['video-caption', 'video-description'],
  /**
   * Rule: VALIDITY OF HTML LANG ATTRIBUTE
   * Web: https://act-rules.github.io/rules/bf051a
   */
  bf051a: ['html-lang-valid'],
  /**
   * Rule: ARIA-HIDDEN WITH FOCUSABLE CONTENT
   * Web: https://act-rules.github.io/rules/6cfa84
   */
  '6cfa84': ['aria-hidden-focus'],
  /**
   * Rule: AUDIO ONLY HAS A TEXT ALTERNATIVE
   * Web: https://act-rules.github.io/rules/e7aa44
   */
  e7aa44: ['video-caption', 'video-description'],
  /**
   * Rule: IFRAME HAS AN ACCESSIBLE NAME
   * Web: https://act-rules.github.io/rules/cae760
   */
  cae760: ['frame-title'],
  /**
   * Rule: LABEL AND NAME FROM CONTENT MISMATCH
   * Web: https://act-rules.github.io/rules/2ee8b8
   */
  '2ee8b8': ['label-content-name-mismatch'],

  /**
   * Rule: VIDEO ELEMENT TRANSCRIPT
   * Web: https://act-rules.github.io/rules/1a02b0
   */
  '1a02b0': ['video-caption', 'video-description'],

  /**
   * Rule: VIDEO HAS CAPTIONS
   * Web: https://act-rules.github.io/rules/f51b46
   */
  f51b46: ['video-caption'],

  /**
   * Rule: VIDEO ONLY HAS AN ACCESSIBILE ALTERNATIVE
   * Web: https://act-rules.github.io/rules/c3232f
   */
  c3232f: ['video-caption', 'video-description'],

  /**
   * Rule: VIDEO WITH AUDIO HAS AUDIO DESCRIPTION
   * Web: https://act-rules.github.io/rules/1ec09b
   */
  '1ec09b': ['video-caption', 'video-description'],

  /**
   * Rule: VIDEO WITH AUDIO HAS AUDIO DESCRIPTIONS OR TRANSCRIPT
   * Web: https://act-rules.github.io/rules/c5a4ea
   */
  c5a4ea: ['video-caption', 'video-description'],

  /**
   * Rule: AUDIO ELEMENTS HAVE A TRANSCRIPT
   * Web: https://act-rules.github.io/rules/2eb176
   */
  '2eb176': ['audio-caption']
}

/**
 * Year 2
 */
const rules_year_2 = {
  /**
   * Rule: IMAGE BUTTON HAS ACCESSIBLE NAME
   * Web: https://act-rules.github.io/rules/59796f
   */
  '59796f': ['input-image-alt'],

  /**
   * Rule: FILENAME IS VALID ACCESSIBLE NAME
   * Web: https://act-rules.github.io/rules/9eb3f6
   */
  '9eb3f6': [] // TODO: Built in axe
}

/**
 * Mapping of ACT rules to Axe-Core rules
 * This defines which rules to run on each test case
 *
 * `Keys` are ruleId(s) from ACT Rules
 * `Values` are an array of rule id(s) from Axe-Core
 */
const rulesMap = {
  ...rules_year_1
}

// export
module.exports = {
  rulesMap
}
