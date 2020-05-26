export const PLAN_SELECTED = 'PLAN_SELECTED'


export function Plan_selector(plan) {
    return {
        type: PLAN_SELECTED,
        plan: plan
    }
}