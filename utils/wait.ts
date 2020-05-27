const logger = require("./logger");

/**
 * Wait for a specified length of time
 *
 * @param {number} duration - The length of the wait in whichever units specified
 * @param {string} unit - the unit of the duration (defaults to seconds)
 *
 * @returns {Promise<any>} - promise returns when the wait time has elapsed
 */
export async function wait(duration: number, unit: string = "s"): Promise<any> {
  logger.info(`waiting ${duration}${unit}`);
  let durationInMilliseconds;

  if (unit == "ms") {
    durationInMilliseconds = duration;
  } else if (unit == "s") {
    durationInMilliseconds = duration * 1000;
  } else {
    logger.info(`Either no unit was set or the unit was not recognised.`);
    durationInMilliseconds = duration * 1000;
  }

  return new Promise((res) => setTimeout(() => res(), durationInMilliseconds));
}

export async function dramaticWait(stagger, found = false) {
  if (!found) {
    const waitDuration = 1000 + stagger * 100;
    await wait(waitDuration, "ms");
  }
}
