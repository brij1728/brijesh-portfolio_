import CopyWebpackPlugin from 'copy-webpack-plugin';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';

const require = createRequire(import.meta.url);

// Get the current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the path to the 'pdfjs-dist' package
const pdfjsPath = path.dirname(require.resolve('pdfjs-dist/package.json'));

// Get the standard fonts directory from the 'pdfjs-dist' package
const standardFontsDir = path.join(pdfjsPath, 'standard_fonts');

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: standardFontsDir,
              to: path.join(__dirname, 'public', 'standard_fonts'),
            },
          ],
        }),
      );
    }

    return config;
  },
};

export default nextConfig;
