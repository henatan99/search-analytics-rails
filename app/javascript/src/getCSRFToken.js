function getCSRFToken() {
    const csrfTokenMeta = document.head.querySelector('meta[name="csrf-token"]');
    console.log('mycsrdTokenMeta', csrfTokenMeta);
    return csrfTokenMeta ? csrfTokenMeta.content : '';
}

export default getCSRFToken;