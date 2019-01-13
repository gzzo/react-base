import path from 'path'
import incstr from 'incstr'

const createUniqueIdGenerator = () => {
  const index = {}

  const generateNextId = incstr.idGenerator({
    // Removed "d" letter to avoid accidental "ad" construct.
    // @see https://medium.com/@mbrevda/just-make-sure-ad-isnt-being-used-as-a-class-name-prefix-or-you-might-suffer-the-wrath-of-the-558d65502793
    alphabet: 'abcefghijklmnopqrstuvwxyz0123456789',
  })

  return name => {
    if (index[name]) {
      return index[name]
    }

    let nextId

    do {
      // Class name cannot start with a number.
      nextId = generateNextId()
    } while (/^[0-9]/.test(nextId))

    index[name] = nextId

    return index[name]
  }
}

export const uniqueIdGenerator = createUniqueIdGenerator()

const generateScopedName = (localName, resourcePath) => {
  return `${uniqueIdGenerator(resourcePath)}_${uniqueIdGenerator(localName)}`
}

const getLocalIdent = (context, localIdentName, localName) => {
  return generateScopedName(localName, context.resourcePath)
}

export const getRules = env => [
  {
    test: /\.jsx?$/,
    exclude: {
      test: /node_modules/,
    },
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.s?css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          modules: true,
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
          getLocalIdent: env === 'production' ? getLocalIdent : false,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: path.resolve(__dirname),
          },
        },
      },
      'sass-loader',
    ],
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: ['file-loader'],
  },
]
