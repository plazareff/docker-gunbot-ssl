{
    "pairs": {

    },
    "strategies": {

    },
    "exchanges": {

    },
    "bot": {
        "json_output": "./json",
        "debug": false,
        "BOT_DELAY": 1,
        "BOT_CCLEAN": 200,
        "orderNumber": "",
        "gunthy_wallet": "",
        "CANCEL_ORDERS_ENABLED": false,
        "CANCEL_ORDERS_CYCLE_CAP": 10,
        "CANCEL_ONCAP": false,
        "RESERVE_PILE_UP": false,
        "interval_ticker_update": 25000,
        "period_storage_ticker": 2000,
        "timeout_buy": 59000,
        "timeout_sell": 60000,
        "TRADING_LIMIT_BUY_PYRAMID": 50,
        "TV_GAIN": 0.6,
        "TV_TRADING_LIMIT_BUY": 50,
        "TV_TRADING_LIMIT_BUY_PYRAMID": 50,
        "TV_PYRAMID": false,
        "TV_TRADING_LIMIT_SELL": 50,
        "TV_PROTECTION": false,
        "TV_MARKET_ORDERS": true,
        "TV_TRADING_LIMIT_CAP": 0.0001,
        "TV_STOPLOSS_PERCENTAGE": 60,
        "TV_TRADING_LIMIT_ALLIN": false,
        "TV_MVTS": 0.0001,
        "TV_GB": false,
        "TV_LEVERAGE": 0,
        "TV_LENDING": 0.02,
        "TV_CLOSE_ALL": false,
        "RETRY_TV_ORDER": false,
        "VERBOSE": false,
        "WATCH_MODE": false,
        "MULTIPLE_BASE": false,
        "withdraw_address": "YOURBTCADDRESSHERE",
        "withdraw_threshold": 0.5,
        "TELEGRAM_ENABLED": false,
        "TG_ORDER_TIMEOUT": 0,
        "TG_TEST": true,
        "TG_PL_ONLY": false,
        "TELEGRAM_NICK": "Gunbot",
        "TOKEN": "",
        "BR_TOKEN": "",
        "TG_AUTOCONFIG": false,
        "chat_id": "-",
        "admin_id": "",
        "OLD_TELEGRAM": false,
        "TOURNAMENT_AGREEMENT": "",
        "TOURNAMENT_NICKNAME": "",
        "INSTANCE_NAME": "1 -",
        "LOGS": true,
        "LOG_SIZE": "50m"
    },
    "ws": {
        "port": 5001,
        "clientport": 3000,
        "hostname": "127.0.0.1"
    },
    "GUI": {
        "enabled": true,
        "start": false,
        "port": 5000,
        "https": false,
        "key": "localhost.key",
        "cert": "localhost.crt",
        "networktraffic": false,
        "authentication": {
            "login": true,
            "twoFA": false
        },
        "notifications": {
            "trade": true,
            "callback": false,
            "error": true
        }
    },
    "AutoConfig": {
        "enabled": false,
        "silentMode": false,
        "statsCount": 1
    },
    "imap_listener": {
        "enabled": false,
        "authorized_froms": "[\"noreply@tradingview.com\"]",
        "user": "YOUREMAIL",
        "password": "YOURPASSWORD",
        "host": "imap.gmail.com",
        "port": 993,
        "tls": true,
        "tlsOptions": {
            "rejectUnauthorized": false
        }
    }
}
