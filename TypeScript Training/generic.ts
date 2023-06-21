function getIdentity<T>(id: T) {
    console.log(id);
}

getIdentity<string>('123')
getIdentity<number>(123)

enum PaymentStatus {
    Fail,
    Successful,
    Pending
}
