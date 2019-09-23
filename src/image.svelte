<script>
  export let src;
  export let fallbackSrc = "";
  export let style;
  export let alt;

  if (!alt && process.env.NODE_ENV !== "production") {
    console.warn(`Svelte-Image: No alt found for image with src ${src}.`);
  }

  const maxLoadFails = typeof fallbackSrc === "string" ? 1 : fallbackSrc.length;
  let loadFails = 0;

  const loadFallbackImg = e => {
    if (loadFails < maxLoadFails) {
      loadFails++;
      e.target.src = fallbackSrc;
    }
  };
</script>

<img {src} {alt} {style} on:error={loadFallbackImg} />
