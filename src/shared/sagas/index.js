function createSagaAction(type) {
  return {
    ACTION: `${type}.ACTION`,
    SUCCESS: `${type}.SUCCESS`,
    FAILED: `${type}.FAILED`
  }
}

export default createSagaAction
