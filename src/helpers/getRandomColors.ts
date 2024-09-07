interface Color { //Color arayüzü, iki string türünde özelliği olan bir nesneyi tanımlar: 
    bg:string;
    text: string;

}

//her bir string olan keye karşılık bir color nesnesi döndüreceğini söylüyor mesela red string olan bir keydir  karşılığındaki bg ve text de color arayüzünden türeyen nesnedir
const colors : {[key:string]:Color} = { //colors değişkeni, anahtarların (key) string olduğu ve bu anahtarlara karşılık gelen değerlerin Color türünde olduğu bir nesnedir.

    red: { bg: "#fee2e2", text: "#dc2626" },
	rose: { bg: "#ffe4e6", text: "#e11d48" },
	blue: { bg: "#dbeafe", text: "#2563eb" },
	green: { bg: "#d1fae5", text: "#059669" },
	indigo: { bg: "#e0e7ff", text: "#4f46e5" },
	cyan: { bg: "#cffafe", text: "#0891b2" },
	lime: { bg: "#ecfccb", text: "#65a30d" },
	amber: { bg: "#fef3c7", text: "#d97706" },


}


export const getRandomColors = (): Color => {

    const keys= Object.keys(colors) //colors nesnesindeki tüm anahtarları (örneğin "red") bir dizi olarak döndürür.
    const randomKey = keys[Math.floor(Math.random()*keys.length)] //bu anahtarlar arasından rastgele bir indeks seçer.
    return colors[randomKey] //rastgele seçilen anahtarın (randomKey) değerini döndürür. Bu değer bir Color nesnesidir.

}