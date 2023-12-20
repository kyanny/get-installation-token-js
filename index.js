// Thank you https://www.jvt.me/posts/2023/02/11/github-app-token-typescript/

import { createAppAuth } from '@octokit/auth-app';
import fs from 'fs';

(async () => {
    const appId = '350631';
    const privateKey = fs.readFileSync('kyanny-fictional-adventure.2023-12-19.private-key.pem', 'utf8');
    const installationId = '38848895';

    const auth = createAppAuth({
        appId,
        privateKey
    });

    const resp = await auth({
        type: 'installation',
        installationId,
    });
    console.log(resp.token);
})().catch((e) => {
    console.error(e);
    process.exit(1);
});
