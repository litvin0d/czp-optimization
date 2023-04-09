import { DataItem } from "./components/StoreTable";


export const algorithm = (queue: DataItem[]) => {
    queue.forEach((item) => {
        if (item.MetricUnit === "КГ") {
            item.ProductVolume /= 1000;
        }
    })

    // Сортировка массива по возрастанию значения поля tonnage
    queue.sort((a, b) => a.ProductVolume - b.ProductVolume);

    // Разбиение массива на группы по два объекта и добавление наибольшего элемента в конец.
    const sortedQueue = [];
    for (let i = 0; i < queue.length; i += 2) {
        sortedQueue.push(queue[i], queue[i + 1]);
    }
    sortedQueue.push(queue[queue.length - 1]);

    // Сортировка массива по убыванию значения поля tonnage
    sortedQueue.sort((a, b) => b.ProductVolume - a.ProductVolume);

    // Возвращаем отсортированный массив объектов
    return sortedQueue;
}