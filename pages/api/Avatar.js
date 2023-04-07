function Avatar({url, className}) {
    return (
    <img
    loading="lazy"
    className={`h-10 rounded-full object-cover cursor-pointer transition hover:scale-110 ${className}`}
    src={url}
    alt="profile pic"
    />
    );
  }
  
  
  export default Avatar
  