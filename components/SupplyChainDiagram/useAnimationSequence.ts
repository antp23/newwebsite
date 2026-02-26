"use client";

import { useState, useEffect, useCallback } from "react";
import { TIMING } from "./constants";

export interface AnimationState {
  // Section entrance
  sectionVisible: boolean;
  headlineVisible: boolean;
  subheadVisible: boolean;

  // Old system
  oldLabelVisible: boolean;
  oldNode1Visible: boolean;
  oldArrow1Drawing: boolean;
  oldNode1Pulsing: boolean;
  oldNode2Visible: boolean;
  oldNode2Pulsing: boolean;
  oldArrow2Drawing: boolean;
  oldNode3Visible: boolean;
  oldNode3Pulsing: boolean;
  oldArrow3Drawing: boolean;
  oldNode4Visible: boolean;
  oldNode4Pulsing: boolean;
  oldTotalBadgeVisible: boolean;
  oldRowFaded: boolean;

  // Cost accumulator triggers
  costStep1Playing: boolean;
  costStep2Playing: boolean;
  costStep3Playing: boolean;

  // iRemedy
  remedyLabelVisible: boolean;
  remedyNode1Visible: boolean;
  remedyArrow1Drawing: boolean;
  remedyNode2Visible: boolean;
  remedyArrow2Drawing: boolean;
  remedyNode3Visible: boolean;

  // Closing
  closingStatVisible: boolean;
  sequenceComplete: boolean;
}

const initialState: AnimationState = {
  sectionVisible: false,
  headlineVisible: false,
  subheadVisible: false,
  oldLabelVisible: false,
  oldNode1Visible: false,
  oldArrow1Drawing: false,
  oldNode1Pulsing: false,
  oldNode2Visible: false,
  oldNode2Pulsing: false,
  oldArrow2Drawing: false,
  oldNode3Visible: false,
  oldNode3Pulsing: false,
  oldArrow3Drawing: false,
  oldNode4Visible: false,
  oldNode4Pulsing: false,
  oldTotalBadgeVisible: false,
  oldRowFaded: false,
  costStep1Playing: false,
  costStep2Playing: false,
  costStep3Playing: false,
  remedyLabelVisible: false,
  remedyNode1Visible: false,
  remedyArrow1Drawing: false,
  remedyNode2Visible: false,
  remedyArrow2Drawing: false,
  remedyNode3Visible: false,
  closingStatVisible: false,
  sequenceComplete: false,
};

const completeState: AnimationState = {
  sectionVisible: true,
  headlineVisible: true,
  subheadVisible: true,
  oldLabelVisible: true,
  oldNode1Visible: true,
  oldArrow1Drawing: true,
  oldNode1Pulsing: false,
  oldNode2Visible: true,
  oldNode2Pulsing: false,
  oldArrow2Drawing: true,
  oldNode3Visible: true,
  oldNode3Pulsing: false,
  oldArrow3Drawing: true,
  oldNode4Visible: true,
  oldNode4Pulsing: false,
  oldTotalBadgeVisible: true,
  oldRowFaded: true,
  costStep1Playing: true,
  costStep2Playing: true,
  costStep3Playing: true,
  remedyLabelVisible: true,
  remedyNode1Visible: true,
  remedyArrow1Drawing: true,
  remedyNode2Visible: true,
  remedyArrow2Drawing: true,
  remedyNode3Visible: true,
  closingStatVisible: true,
  sequenceComplete: true,
};

export function useAnimationSequence(
  isInView: boolean,
  reducedMotion: boolean
) {
  const [state, setState] = useState<AnimationState>(initialState);

  const startSequence = useCallback(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const at = (ms: number, update: Partial<AnimationState>) => {
      timers.push(
        setTimeout(() => {
          setState((prev) => ({ ...prev, ...update }));
        }, ms)
      );
    };

    // Section entrance
    at(TIMING.SECTION_FADE, { sectionVisible: true });
    at(TIMING.HEADLINE_FADE, { headlineVisible: true });
    at(TIMING.SUBHEAD_FADE, { subheadVisible: true });

    // Old system
    at(TIMING.OLD_LABEL, { oldLabelVisible: true });
    at(TIMING.OLD_NODE_1, { oldNode1Visible: true });
    at(TIMING.OLD_ARROW_1, { oldArrow1Drawing: true, costStep1Playing: true });
    at(TIMING.OLD_NODE_2, { oldNode2Visible: true, oldNode2Pulsing: true });
    at(TIMING.OLD_NODE_2 + 200, { oldNode2Pulsing: false });
    at(TIMING.OLD_ARROW_2, { oldArrow2Drawing: true, costStep2Playing: true });
    at(TIMING.OLD_NODE_3, { oldNode3Visible: true, oldNode3Pulsing: true });
    at(TIMING.OLD_NODE_3 + 200, { oldNode3Pulsing: false });
    at(TIMING.OLD_ARROW_3, { oldArrow3Drawing: true, costStep3Playing: true });
    at(TIMING.OLD_NODE_4, { oldNode4Visible: true, oldNode4Pulsing: true });
    at(TIMING.OLD_NODE_4 + 300, { oldNode4Pulsing: false });
    at(TIMING.OLD_TOTAL_BADGE, { oldTotalBadgeVisible: true });

    // 1500ms mandatory pause — nothing happens between 4200 and 5700

    at(TIMING.OLD_FADE_OUT, { oldRowFaded: true });

    // iRemedy sequence
    at(TIMING.REMEDY_LABEL, { remedyLabelVisible: true });
    at(TIMING.REMEDY_NODE_1, { remedyNode1Visible: true });
    at(TIMING.REMEDY_ARROW_1, { remedyArrow1Drawing: true });
    at(TIMING.REMEDY_NODE_2, { remedyNode2Visible: true });
    at(TIMING.REMEDY_ARROW_2, { remedyArrow2Drawing: true });
    at(TIMING.REMEDY_NODE_3, { remedyNode3Visible: true });

    // Closing
    at(TIMING.CLOSING_STAT, { closingStatVisible: true });
    at(TIMING.SEQUENCE_COMPLETE, { sequenceComplete: true });

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setState(completeState);
      return;
    }

    if (isInView) {
      const cleanup = startSequence();
      return cleanup;
    }
  }, [isInView, reducedMotion, startSequence]);

  return state;
}
