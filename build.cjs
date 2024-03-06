const fs = require("fs")
const path = require("path")
const { parse: parseJsonc } = require('jsonc-parser')

const root = path.resolve('.')
const dist = path.join(root, "dist")

/*
del and create dist folder
 */
if (fs.existsSync(dist)) fs.rmSync(dist, { recursive: true })
fs.mkdirSync(dist)

/*
copy base file
 */
const copy_files = ["README.md", "LICENSE", "CHANGELOG.md"]
for (const file of copy_files) {
    const src = path.join(root, file)
    const dest = path.join(dist, file)
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest)
    }
}


/*
generate package.json
 */
const pkg = require(path.join(root, "package.json"))
const text = fs.readFileSync(path.join(root, 'src/keybindings.jsonc'), 'utf8')
const keymap = parseJsonc(text, [], { allowTrailingComma: true, disallowComments: false })

const packageJson = {
    name: pkg.name,           // 必需
    publisher: pkg.publisher, // 必需
    version: pkg.version,     // 必需
    engines: pkg.engines,     // 必需
    displayName: pkg.displayName,
    description: pkg.description,
    repository: pkg.repository,
    categories: pkg.categories,
    vsce: pkg.vsce,
    contributes: {
        keybindings: keymap
    }
}

fs.writeFileSync(path.join(dist, "package.json"), JSON.stringify(packageJson, null, 2))
