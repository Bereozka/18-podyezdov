def add_total_types(
    data,
):
    work_price = get_total_price(data["workData"])
    data["workData"].append({
        "type": "total",
        "data": {
            "value": f"ИТОГО: {work_price} Р"
        },
    })

    material_price = get_total_price(data["materialData"])
    data["materialData"].append({
        "type": "total",
        "data": {
            "value": f"ИТОГО: {material_price} Р"
        },
    })
    return f"ВСЕГО: {work_price + material_price} Р"


def get_total_price(
    data,
):
    total_price = 0
    for item in data:
        if "total" in item["data"]:
            total = item["data"]["total"]
            total_price += float(total)
    return total_price
