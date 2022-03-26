# 🤡 roastra-web-api

This is a simple web-api for [npm/roastra](https://www.npmjs.com/package/roastra)
<br>

## ⚙️ Setup

1. Clone this Repo

```bash
git clone https://github.com/just-doodle/roastra-web-api.git
```

2. Install dependencies

```js
npm install
```

3. Run server locally

```js
npm run start
```

You can configure port in [.env](.env). Default port is `8000`
<br>

## 🔥 Usage

After starting server, open

```
localhost:8000/roast/<name>
```

| Parameter | Description                      | Optional | Default |
| --------- | -------------------------------- | -------- | ------- |
| `name`    | Name of the person (or any noun) | True     | "You"   |
| `?plural` | To set if `name` is plural       | True     | false   |

<br>

## 🔨 Examples

###### EXAMPLE 1

```js
localhost:8000/roast/RockyGangsters?plural=true

/* RESPONSE
{
  "sentance": "RockyGangsters are diseased as a inferior crapload of ignorant snake scrotum",
  "name": "RockyGangsters"
}
*/
```

###### EXAMPLE 2

```js
localhost: 8000 / roast / Rocky;

/* RESPONSE
{  
  "sentance": "Rocky is detestable as a infernal horde of naughty donkey toenails",
  "name": "Rocky"
}
*/
```

###### EXAMPLE 3

```js
localhost: 8000 / roast;

/* RESPONSE
{
  "sentance": "You is stinky as a dirty pile of vile horse stench",
  "name": "You"
}
*/
```

## 🌨️ Deploy

You can deploy this to Heroku or Vercel or, Clone this project and deploy somewhere else!

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjust-doodle%2Froastra-web-api)

## 💪 Support

Support this project by ⭐ Starring this Repo or buy me a coffee!

<a href="https://www.buymeacoffee.com/harrytom" target="_blank"><img width="200" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 200px !important;" ></a>
