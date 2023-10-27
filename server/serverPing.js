const child_process = require("child_process"); //to run command-line tools
const util = require("util"); //to handle asynchronous functions

const exec = util.promisify(child_process.exec);

async function ping(hostname) {
	try {
		const { stdout, stderr } = await exec(`ping -c 3 ${hostname}`);
		return { stderr, stdout };
	} catch (err) {
		return err;
	}
}

ping("starter-kit-al84.onrender.com");
