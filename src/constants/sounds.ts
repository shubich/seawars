const basePath = (process.env.PUBLIC_PATH || '/').replace(/\/?$/, '/');
const soundPath = `${basePath}sound`;

export const missed = new Audio(`${soundPath}/missed.ogg`);

export const wounded = new Audio(`${soundPath}/wounded.ogg`);

export const killed = new Audio(`${soundPath}/killed.ogg`);

export const win = new Audio(`${soundPath}/win.ogg`);

export const lose = new Audio(`${soundPath}/lose.ogg`);
