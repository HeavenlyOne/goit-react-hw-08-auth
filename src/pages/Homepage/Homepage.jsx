const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Homepage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Wellcome to the Homepage</h1>
    </div>
  );
}
