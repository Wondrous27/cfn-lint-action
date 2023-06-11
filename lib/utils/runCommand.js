const exec = require("@actions/exec");
const core = require("@actions/core");

module.exports = {
  runCommand: async ({ command, template }) => {
    try {
      let response;
      if (template) {
        response = await exec.exec("cfn-lint", [template]);
      } else {
        response = await exec.exec(command);
      }
      core.info(`Ran command: ${command}. Response is: ${response}`);
      return response;
    } catch (e) {
      core.error(
        `Error running command: ${command}. Returned error is: ${e.message}`
      );
      throw e;
    }
  },
};
