const winston = require("winston");

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

// En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
console.info("Esto es un mensaje informativo");
console.debug("Esto es un mensaje de debu");
console.warn("Esto es un mensaje de advertencia");
console.error("Esto es un mensaje de error");

// Registra el error en un archivo a través de un try...catch
try {
  throw new Error("Esto es un error");
} catch (error) {
  logger.error(error);
}
