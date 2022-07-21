class ObjectManager {
    constructor() {
        this.Objects = [];
    }
    add(_Object) {
        if (
            _Object.name === undefined ||
            _Object.name === null ||
            _Object.name === ""
        ) {
            throw new Error("Object.add: Object.name is undefined");
        }

        if (this.findObjectByName(_Object.name)) {
            throw new Error(
                "Object with name " + _Object.name + " already exists"
            );
        }

        this.Objects.push({
            name: _Object.name,
            instance: _Object.instance,
        });
        console.log("Object " + _Object.name + " added");
    }

    remove(name) {
        if (name === undefined || name === null || name === "") {
            throw new Error("Object.remove: name is undefined");
        }

        if (!this.findObjectByName(name)) {
            throw new Error("Object with name " + name + " does not exist");
        }

        this.Objects = this.Objects.filter((_Object) => _Object.name !== name);

        console.log("Object " + name + " removed");
    }

    findObjectByName(name) {
        return this.Objects.find((_Object) => _Object.name === name);
    }

    findObjectsByNameStart(name) {
        return this.Objects.filter((_Object) => _Object.name.startsWith(name));
    }
}

export default ObjectManager;
