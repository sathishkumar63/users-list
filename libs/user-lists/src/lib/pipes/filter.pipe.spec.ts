import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let filterPipe: FilterPipe;

  // synchronous beforeEach
  beforeEach(() => {
    filterPipe = new FilterPipe();
  });

  test('should be instantiated', () => {
    expect(filterPipe).toBeDefined();
  });

  test('should return empty array if no items given', () => {
    // arrange + act
    const filtered = filterPipe.transform([], 'name', 'angular');
    // assert
    expect(filtered.length).toBe(0);
    expect(filtered).toEqual([]);
  });

  test('should return items if no field is given', () => {
    // arrange
    const items = [];
    items.push({ id: 1, name: 'angular' });
    // act
    const filtered = filterPipe.transform(items, '', 'angular');
    // assert
    expect(filtered).toEqual(items);
  });

  test('should return items if no value is given', () => {
    // arrange
    const items = [];
    items.push({ id: 1, name: 'angular' });
    // act
    const filtered = filterPipe.transform(items, 'name', '');
    // assert
    expect(filtered).toEqual(items);
  });

  test('should filter correctly', () => {
    // arrange
    const items = [];

    items.push({ id: 1, name: 'angular' });
    items.push({ id: 2, name: 'React' });
    items.push({ id: 3, name: 'Google' });
    items.push({ id: 4, name: 'Amazon' });
    // act
    const filtered = filterPipe.transform(items, 'name', 'angular');
    // assert
    expect(filtered.length).toBe(1);
  });

  test('should filter two items', () => {
    // arrange
    const items = [];

    items.push({ id: 1, name: 'angular' });
    items.push({ id: 2, name: 'angular' });
    items.push({ id: 3, name: 'Google' });
    items.push({ id: 4, name: 'Amazon' });
    // act
    const filtered = filterPipe.transform(items, 'name', 'angular');
    // assert
    expect(filtered.length).toBe(2);
  });
});
