// constants.ts — Master animation timing (milliseconds)
export const TIMING = {
  // Section entrance
  SECTION_FADE: 0,
  HEADLINE_FADE: 200,
  SUBHEAD_FADE: 400,

  // Old system sequence
  OLD_LABEL: 800,
  OLD_NODE_1: 1000,
  OLD_ARROW_1: 1300,
  OLD_NODE_2: 1800,
  OLD_ARROW_2: 2100,
  OLD_NODE_3: 2600,
  OLD_ARROW_3: 2900,
  OLD_NODE_4: 3400,
  OLD_TOTAL_BADGE: 3800,
  OLD_PAUSE_START: 4200, // 1500ms mandatory pause begins
  OLD_FADE_OUT: 5700, // pause ends, old system fades

  // iRemedy sequence
  REMEDY_LABEL: 6200,
  REMEDY_NODE_1: 6400,
  REMEDY_ARROW_1: 6700,
  REMEDY_NODE_2: 7200,
  REMEDY_ARROW_2: 7500,
  REMEDY_NODE_3: 7900,
  CLOSING_STAT: 8300,
  SEQUENCE_COMPLETE: 9000,
} as const;

// Cost accumulator values (percentages)
export const COST_STEPS = {
  AFTER_ARROW_1: 15, // after distributor margin
  AFTER_ARROW_2: 27, // after sub-distribution
  AFTER_ARROW_3: 34, // after admin markup
} as const;
