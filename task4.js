const customJSON = {
    stringify: (value) => {
        // const keys = Object.keys(value);
        // const values = Object.values(value);
        if (typeof value === 'object' && value) {
            const map = Object.entries(value);
            let result = '';
    
            for (let i = 0; i < map.length; i++) {
                const value = map[i][1];
                const key = map[i][0];
                
                if (typeof value === "undefined") continue;
    
                if (i === 0) result += "{";
    
                result += typeof value === 'string' ? `"${key}":"${value}"` : `"${key}":${value}`;
    
                result += i === map.length - 1 ? "}" : ",";
            }
    
            return result;
        } else {
            if (typeof value === 'undefined') return undefined;

            if (typeof value === 'string') {
                return `"${value}"`;
            } else {
                return `${value}`;
            }
        }
    }
}
const value = {
    name: "MoonKnight",
    alterEgo: true,
    series: 6,
    universe: undefined,
    enemies: null,
};
console.log(customJSON.stringify(value));
console.log(JSON.stringify(value));