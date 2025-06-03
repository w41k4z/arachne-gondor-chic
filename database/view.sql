CREATE VIEW v_product_stock_quantities AS
SELECT
    p.id AS product_id,
    COALESCE(SUM(sm.quantity_in) - SUM(sm.quantity_out), 0) AS quantity
FROM
    products p
LEFT JOIN
    stock_movements sm ON sm.product_id = p.id
GROUP BY
    p.id;

CREATE VIEW v_latest_product_prices AS
SELECT
    pp.product_id,
    pp.price
FROM
    product_prices pp
INNER JOIN (
    SELECT
        product_id,
        MAX(date) AS latest_date
    FROM
        product_prices
    GROUP BY
        product_id
) latest ON latest.product_id = pp.product_id AND latest.latest_date = pp.date;

CREATE VIEW v_all_products AS
SELECT
    p.*,
    COALESCE(lp.price, 0) AS price,
    COALESCE(psq.quantity, 0) AS quantity
FROM
    products p
LEFT JOIN v_latest_product_prices lp ON lp.product_id = p.id
LEFT JOIN v_product_stock_quantities psq ON psq.product_id = p.id;
