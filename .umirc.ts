import { defineConfig } from 'umi';
import { Arch, Platform } from '@umijs/plugin-electron';
// const targets = createTargets([Platform.WINDOWS]);
export default defineConfig({
    npmClient: 'npm',
    plugins: ['@umijs/plugin-electron'],
    electron: {
        builder: {
            // targets: Platform.MAC.createTarget(['dmg'], Arch.arm64),
            targets: Platform.WINDOWS.createTarget(['nsis'], Arch.x64),
            // targets: targets,
        },
    },
});
